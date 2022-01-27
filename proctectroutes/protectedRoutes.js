import cookie from "js-cookie";
import jwt from "jsonwebtoken";
import { Cookie } from "next-cookie";

const protectedRoutes = async (res, req, statusCode) => {
  const cookies = Cookie.fromApiRoute(req, res);

  const token = cookies.get("token");

  console.log(token);

  // const {token} = req.cookies
  if (!token) {
    return res
      .status(401)
      .json({ message: "Login first to access this resource." });
  } else {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);

    //remember we stored d user id on the payload so we use it to find d user
    // req.user = await User.findById(decoded.id);

    // console.log(req.user);

    // res.status(statusCode).json({
    //   success: true,
    //   token,
    // });
  }
};

export default protectedRoutes;
