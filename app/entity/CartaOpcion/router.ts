import { Router, requireAdmin,getData } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/CartaOpcion",
  });

router
.get("/",  controller.get)
.get("/:id",requireAdmin,  controller.getById)
.get("getByCatagoriaId/:id", controller.getByCatagoriaId)
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
