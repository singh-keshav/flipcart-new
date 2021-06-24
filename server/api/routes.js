import {Router} from "express"
import userRoute from "./user/routes";


const appRoutes=Router();

appRoutes.use("/user",userRoute);
// appRoutes.use("/user",)


export default appRoutes;
