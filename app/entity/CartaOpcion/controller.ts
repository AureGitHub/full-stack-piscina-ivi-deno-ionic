// deno-lint-ignore-file no-explicit-any
import { aureDB, StatusCodes,statusError, statusOK } from  "../../../dep/deps.ts";
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";

const entity =new aureDB(client,entities,'CartaOpcion' );


const get= async (ctx: any) => {

    const sqlSelect = `  select *, titulo || ' (' || orden || ')' "tituloPres", case when disponible then 'Sí' else 'No' end "disponiblePres"  `; 

  let sqlFrom =` from "CartaOpcion" c `;


  const orderBydefect = ``;

  const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: result.data.rows, count: result.count },
   };
 
};


const getByCatagoriaId= async (ctx: any) => {


  const  cartacategoriaid  = Number(ctx?.params?.id);

  const data= entity.findMany({where : {cartacategoriaid} })


  const sqlSelect = ` select * `;

let sqlFrom =` from "cartaCategoria" c `;


const orderBydefect = ``;

const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
ctx.response.status = 201;
 ctx.response.body = {
   status: StatusCodes.OK,
   data: { data: result.data.rows, count: result.count },
 };

};



const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await entity.findFirst({where: {id}});
    statusOK(ctx,data);   

};


const add = async (ctx: any) => {
    try {
      //const newItem = await ctx.request.body().value;
      const newItem =ctx.state.data;
      const data = await entity.create({data: newItem});
      statusOK(ctx,data);    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  const update = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const itemUpdateInput =ctx.state.data;
      const data = await entity.update({data: itemUpdateInput, where : {id}});
      statusOK(ctx,{rowCount : data?.rowCount});    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };
  
const del = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const data = await entity.del({where: {id}});
      statusOK(ctx,{rowCount : data?.rowCount}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };


export default { 
    get,
    getByCatagoriaId,
    getById,
    add, 
    update, 
    del,
};
