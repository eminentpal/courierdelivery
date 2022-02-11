import catchAsyncErrors from "./catchAsyncErrors";
// import ErrorHandler from '../utils/errorHandler'
// import { getSession } from 'next-auth/client';
import jwt from "jsonwebtoken";
import { Cookie } from "next-cookie";
import User from "../models/User";

const isAuthenticated = async (req, res, next) => {
  const cookies = Cookie.fromApiRoute(req, res);

  const parseToken = cookies.get("token");

  //This was the old method
  // I removed the 'token=' if its in the token to get the token
  // const newToken = req.headers.cookie.slice(6, 1000);

  // const verify = req.headers.cookie.slice(0, 6);

  // const token = verify === "token=" ? newToken : req.headers.cookie;

  const token = parseToken || req.headers.cookie;

  console.log({ header: token });

  // const {token} = req.cookies
  if (!token) {
    return res
      .status(401)
      .json({ message: "Login first to access this resource." });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      console.log(decoded);

      //remember we stored d user id on token wen we created it so we use it to find d user
      req.user = await User.findById(decoded.id);

      // console.log(req.user);
      if (!req.user) {
        return res.status(401).json({ message: "No User with that ID" });
      }

      console.log("next");
      next();
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }
};

export default isAuthenticated;
