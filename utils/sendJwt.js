import jwt from "jsonwebtoken";
import cookie from "cookie";

const sendToken = (user, statusCode, res) => {
  //create jwt Token
  const token = user.getJwtToken();

  //options for cookies
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    //this is to  ensure its not easy to access isong javascript code by hackers
    httpOnly: true,
    path: "/",
  };

  console.log(token);
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      maxAge: 60 * 60,
      path: "/",
    })
  );

  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};

// export default sendToken;

// const sendToken = (user, statusCode, res) => {

// const sendToken = (user, statusCode, res) => {
//   //the user is an object thats why we {user} other option is to destructure it taking out the values and
//   // assign to new keys
//   const token = jwt.sign({ user }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_TIME,
//   });
//   res.status(statusCode).json({
//     success: true,
//     token,
//     user,
//   });
// };

export default sendToken;

//24hours 60mins 60 seonds 1000 milliseconds

export const deleteToken = (user, statusCode, res) => {
  //create jwt Token
  const token = "";

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", token, {
      httpOnly: true,
      maxAge: new Date(0),
      path: "/",
    })
  );

  res.status(statusCode).json({
    success: true,
    token,
    user,
  });
};
