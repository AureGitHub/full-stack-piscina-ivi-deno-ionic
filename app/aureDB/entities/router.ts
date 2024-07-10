import { Router } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/entities",
  });

router.get("/",  controller.getByName)

export default router;
