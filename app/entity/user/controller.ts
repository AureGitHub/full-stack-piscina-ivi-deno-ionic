// deno-lint-ignore-file no-explicit-any
import { aureDB , statusOK, StatusCodes, giveMeToken ,setStatus, statusError, sendEmail} from  "../../../dep/deps.ts"

import { userClass } from "./user.model.ts";
import { TC_UserEstado, TC_Auditoria } from "../../enums.ts"
import client from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";

const entity =new aureDB(client,entities,'User');


const login = async (ctx: any) => {
  try {


    const { email, password }: { email: string; password: string } =
      await ctx.request.body().value;


    const user = await entity.findFirst({ where: { email, password } });

    if (!user) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario o password incorrecta!!");
      return;
    }


    if (user && (user.estadoid == TC_UserEstado.baja || user.estadoid == TC_UserEstado.bloqueado)) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Usuario dado de baja ó bloqueado. Póngase en contacto con el administrador");
      return;
    }


    if (user && user.estadoid == TC_UserEstado.cambiar_pass) {
      setStatus(ctx, 200, StatusCodes.CONFLICT, "Password bloqueda. Debe cambiar su password");
      return;
    }

    const userRet = new userClass(user);

    const data = await giveMeToken(userRet);

    statusOK(ctx, data);

  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


export default {
  login,
};