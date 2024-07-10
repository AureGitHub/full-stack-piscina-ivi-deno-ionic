import { Router } from  "../../../dep/deps.ts";
import controller from "./controller.ts";




const router = new Router({
    prefix: "/user",
  });

router
.post("/login", controller.login)
;

export default router;
