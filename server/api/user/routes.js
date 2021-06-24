import {Router} from "express"
import { getUserSignUp } from "./controller";

const userRoute=Router();

userRoute.post("/signup",async (req, res, next)=>{
  try{
    console.log(req.body);
    const data=await req.body.json() ;
    console.log(data)
    const {user}=await getUserSignUp(data);
    res.json({sucess:true, user});
  } catch(error){
    next(error);
    console.log("inside catch")
  }
})


export default userRoute;
// module.exports.userRoute;
