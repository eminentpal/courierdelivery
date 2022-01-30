import shipConnect from "../../database/shipConnect";

import User from "../../models/user";
import sendToken from "../../utils/sendJwt";

shipConnect();

export default async function handler(req, res) {
  //   if (req.method === "GET") {
  //   }

  const { email, password } = req.body;

  console.log(req.body);

  try {
    if (!email || !password) {
      return res.status(422).json({ message: "All fields requred" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }

    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid Email or Password" });
    }
    //200 is the statuscode

    //its coming with a response so no need for a reponse
    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}
