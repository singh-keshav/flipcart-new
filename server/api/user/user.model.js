import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: Number,
  userName:{type:String, required:true},
  password: { type: String, required: true },
});

const User=model("user", UserSchema);

export default User;
