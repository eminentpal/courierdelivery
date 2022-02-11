import catchAsyncErrors from "./auth";
import { Cookie } from "next-cookie";

const Hello = (req, res) => {
  // const cookies = Cookie.fromApiRoute(req, res);
  // const token = cookies.get("token");
  // console.log(token);
  res.status(200).json({
    success: true,
    message: "Account Registered successfully",
  });
};

export default Hello;
