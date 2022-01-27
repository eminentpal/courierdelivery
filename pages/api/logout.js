import shipConnect from "../../database/shipConnect";
import cookie from "cookie";
import sendToken from "../../utils/sendJwt";

shipConnect();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      //two things happen here, logout wehn buttton is clicked
      //all automatic logout when time assigned is expired
      console.log("done");

      const token = "";

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", token, {
          httpOnly: true,
          maxAge: new Date(0),
          path: "/",
        })
      );
      // res.cookie("token", null, {
      //     expires: new Date(Date.now()),
      //     httpOnly: true,
      //   });

      res.status(200).json({
        sucess: true,
        message: "Logged out",
      });
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
