// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import protectedRoutes from "../../middlewares/protectedRoutes";
import { Cookie } from "next-cookie";

import cookie from "js-cookie";
import jwt from "jsonwebtoken";
import isAuthenticated from "../../middlewares/auth";
import nc from "next-connect";
import Hello from "../../middlewares/hello";
import shipConnect from "../../database/shipConnect";

const handler = nc();

shipConnect();
handler.use(isAuthenticated).get(Hello);

export default handler;

// const handler =  (req, res) => {
//   // const cookies = Cookie.fromApiRoute(req, res);
//   // const token = cookies.get("token");
//   // console.log(token);
//   // if (!token) {
//   //   return res
//   //     .status(401)
//   //     .json({ message: "Login first to access this resource." });
//   // } else {
//   //   res.status(200).json({ name: "John Doe" });
//   // }
// };

// export default handler;
