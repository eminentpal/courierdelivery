// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import protectedRoutes from "../../proctectroutes/protectedRoutes";
import { Cookie } from "next-cookie";

import cookie from "js-cookie";
import jwt from "jsonwebtoken";

const handler = async (req, res) => {
  const cookies = Cookie.fromApiRoute(req, res);

  const token = cookies.get("token");

  console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Login first to access this resource." });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
};

export default handler;
