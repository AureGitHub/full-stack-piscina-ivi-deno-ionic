import { run } from  "./dep/deps.ts";
import appRouter from "./app/router.js";

const fullstack = true;

run(appRouter, fullstack); 



