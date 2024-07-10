import { Router } from "../dep/deps.ts";
import entitiesRouter from "./aureDB/entities/router.ts";
import userRouter from "./entity/user/router.ts";
import cartaCategoriaRouter from "./entity/cartaCategoria/router.ts";
import cartaOpcionRouter from "./entity/CartaOpcion/router.ts";




const router = new Router({
  prefix: "/api",
});

router.use(entitiesRouter.routes());  
router.use(userRouter.routes());  
router.use(cartaCategoriaRouter.routes());  
router.use(cartaOpcionRouter.routes());  


export default router;







