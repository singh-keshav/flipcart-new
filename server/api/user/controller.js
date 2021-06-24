import User from "./user.model";

export const getUserSignUp = async ({firsName, lastName, mobile, userName, password}) => {
  const user = model({firsName, lastName, mobile, userName, password});

  // const existingMobile = await User.findOne({mobile});
  // const existingUserName = await User.findOne({userName});

  // if (existingMobile) {
  //   //throw error
  // }
  // if (existingUserName) {
  //   //throw error
  // }

  await user.save();
  return user;
};
