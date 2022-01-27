import shipConnect from "../../database/shipConnect";
const validator = require("validator");
import User from "../../models/user";
import sendToken from "../../utils/sendJwt";

shipConnect();

export default async function handler(req, res, next) {
  //   if (req.method === "GET") {
  //   }

  if (req.method === "POST") {
    const { name, email, password, confirmPassword, phoneNo } = req.body;

    console.log(req.body);
    //   let name = "innocent ezie";
    //   let email = "ezieinsp0833854490@gmail.com";
    //   let password = "123456";

    try {
      if (!name || !email || !password || !confirmPassword || !phoneNo) {
        return res.status(422).json({ message: "All fields requred" });
      }

      if (confirmPassword !== password) {
        return res
          .status(422)
          .json({ message: "confirmPassword must be same with password" });
      }

      if (password.length < 6) {
        return res
          .status(422)
          .json({ message: "Your Password must be longer than 6 characters" });
      }
      // if (validator.isEmail) {
      //   next();
      // } else {
      //   return res.status(422).json({ message: "Please enter valid email" });
      // }

      const findEmail = await User.findOne({ email });

      if (findEmail) {
        return res.status(422).json({ message: "User with that email exist" });
      }

      console.log(phoneNo);
      const user = await User.create({
        name,
        email,
        password,
        phoneNo,
        avatar: {
          public_id: "products/dsvbpny402gelwugv2le",
          url: "https://res.cloudinary.com/bookit/image/upload/v1608062030/products/dsvbpny402gelwugv2le.jpg",
          // public_id: result.public_id ,
          // url: result.secure_url
        },
      });

      //200 is the statuscode

      //its coming with a response so no need for a reponse
      sendToken(user, 200, res);
    } catch (error) {
      res.status(500).json({ message: "Something went wrong" });
    }
  }
}
