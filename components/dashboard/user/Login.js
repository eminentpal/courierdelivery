import React, { useState } from "react";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
const Signup = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { isAuthenticated, error, user, loading } = useSelector(
  //   (state) => state.auth
  // );

  // console.log(user);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/login/`, {
      //we need to add this since its a post req
      method: "POST",
      body: JSON.stringify({ email, password }),
      //header to show we sending a json file
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await response.json();
    console.log(res);
    // if (res.message || res.error) {
    //   console.log(res.message);
    // } else {

    //   const options = {
    //     expiresIn: process.env.JWT_EXPIRES_TIME,
    //     httpOnly: true,
    //   };

    //   cookie.set("token", res.token);
    //   const r = cookie.get("token");
    //   console.log(r);
    //   console.log("sent");
    // }
  };

  const clickHandler = () => {};

  // var name = "innocnet";
  // const sayHello = (name) => {
  //   // You can print to STDOUT for debugging like you normally would: // but you need to return the value in order to complete the challenge return name; // TODO: return the correct value

  //   console.log(name);
  // };

  // sayHello(name);

  return (
    <div className="signup">
      <div className={"signupMain"} style={{ height: "350px" }}>
        {toggle ? (
          <h3>Create Account</h3>
        ) : (
          <h3>Welcome back! Please sign in.</h3>
        )}
        <div className="signupHeader">
          <h4
            onClick={() => router.push("/user/signup")}
            className={"inactiveH3"}
          >
            Sign Up
          </h4>
          <h4 className={"activeH3"}>Sign In</h4>
        </div>
        <div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="EMAIL*"
              name="yourname"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="form-input"
              id="passowrd"
              placeholder="PASSWORD*"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Sign In</button>
          </form>

          <>
            <span>Already have account?</span>{" "}
            <span onClick={() => router.push("/user/signup")}>Sign In now</span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Signup;
