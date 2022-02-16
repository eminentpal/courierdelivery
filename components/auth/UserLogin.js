import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { loginUser, clearErrors } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = () => {
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  // console.log(user);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(loginUser(email, password));
    // const response = await fetch(`/api/login/`, {
    //   //we need to add this since its a post req
    //   method: "POST",
    //   body: JSON.stringify({ email, password }),
    //   //header to show we sending a json file
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const res = await response.json();
    // console.log(res);
  };

  useEffect(() => {
    //if user is already logged
    if (isAuthenticated) {
      router.push("/user");
    }
    if (error) {
      alert(error);
      console.log(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, , error]);

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
            <span>Don't have account?</span>
            <span onClick={() => router.push("/user/signup")}>Sign Up now</span>
          </>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
