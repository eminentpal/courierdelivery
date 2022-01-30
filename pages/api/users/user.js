import { Cookie } from "next-cookie";
import shipConnect from "../../../database/shipConnect";
import nc from "next-connect";
import User from "../../../models/user";
import jwt from "jsonwebtoken";

//this api is for user info.
shipConnect();

const handler = async (req, res) => {
  if (req.method === "GET") {
    console.log("jj");

    const cookies = Cookie.fromApiRoute(req, res);

    const token = req.headers.cookie;

    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Login first to access this resource." });
    } else {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);

      //remember we stored d user id on the payload so we use it to find d user
      const user = await User.findById(decoded.id);
      console.log(user);
      res.status(200).json(user);
    }
  }
};

export default handler;
