import User from "../models/User";

export const getUser = async (req, res) => {
  //remember we stored d user id on the payload so we use it to find d user
  const user = await User.findById(req.user._id);
  console.log("user");
  res.status(200).json(user);
};
