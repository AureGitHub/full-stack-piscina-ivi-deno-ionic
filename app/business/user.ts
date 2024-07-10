// deno-lint-ignore-file no-explicit-any
import { aureDB, StatusCodes } from "../../dep/deps.ts";
import client from "../aureDB/client.ts";
import entities from "../aureDB/entities/entities.ts";
import { TC_UserEstado, TC_MovimientoTipo } from "../enums.ts";

const entityUser = new aureDB(client, entities, 'User');


const CambiarSaldo = async (userid: number, beforesaldo : number, importe: number, tipoid : number, apuestaid:any,bizumid : any, transaction: any)=>{

    const entityUserXMovimiento = new aureDB(client, entities, 'UserXMovimiento');

    const saldo = beforesaldo + importe; 

    //update el saldo del usuario
    await entityUser.update({where: {id :userid }, data:{saldo} ,tr :  transaction});

    // creo el movimiento
    const createMovimiento = await entityUserXMovimiento.create({data:{ beforesaldo, actualsaldo:saldo,  tipoid, importe , userid, apuestaid, bizumid } ,tr :  transaction  });

    return{
        movimientoid : createMovimiento.id
    }


}


const addSaldo = async (id: number, importe: number) => {

    const user = await entityUser.findFirst({ where: { id } });
    if (!user || (user && user.estadoid == TC_UserEstado.baja)) {
        return {
            error: {
                Status: 200,
                StatusCodes: StatusCodes.CONFLICT,
                message: "Usuario no existe o dado de baja. Póngase en contacto con el administrador"
            }
        }
    }

    const transaction = client.createTransaction("tr_addSaldo");
    try{
        await transaction.begin();    
        await CambiarSaldo(id,Number(user.saldo),importe,TC_MovimientoTipo.ingreso,null,null,transaction);
        await transaction.commit();
    
    }
    catch(err){
        transaction.rollback(); 
        throw err;
    }
  
   
    return true;


}

export default {
    addSaldo,
    CambiarSaldo
}