import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { registerUser, clearErrors } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const [data, setData] = useState({});

  const alert = useAlert();

  const dispatch = useDispatch();
  const { isAuthenticated, error, user, loading } = useSelector(
    (state) => state.auth
  );

  // console.log(user);

  // console.log(isAuthenticated);

  useEffect(() => {
    //if user is already logged
    if (isAuthenticated) {
      router.push("/user");
    }
    if (error) {
      alert.error(error);
      console.log(error);
      dispatch(clearErrors());
    }
  }, [dispatch, isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(registerUser({ name, email, password, confirmPassword, phoneNo }));
    // const response = await fetch(`/api/register/`, {
    //   //we need to add this since its a post req
    //   method: "POST",
    //   body: JSON.stringify({ name, email, password, confirmPassword, phoneNo }),
    //   //header to show we sending a json file
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // const data = await response.json();
    // console.log(data);
  };

  // const clickHandler = () => {
  //   setToggle((prev) => !prev);
  // };

  return (
    <div className="signup">
      <div className={"signupMain"}>
        <h3>Create Account</h3>

        <div className="signupHeader">
          <h4 className={"activeH3"}>Sign Up</h4>
          <h4 className={"inactiveH3"} onClick={() => router.push("/login")}>
            Sign In
          </h4>
        </div>
        <div>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input
              type="text"
              className="form-input"
              id="name"
              placeholder="FIRST AND LASTNAME*"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-input"
              id="phone"
              placeholder="PHONE NO*"
              name="phoneNo"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />

            <input
              type="email"
              className="form-input"
              id="email"
              placeholder="EMAIL*"
              name="email"
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

            <input
              type="password"
              className="form-input"
              id="name"
              placeholder="CONFIRM PASSWORD*"
              name="confirmPassowrd"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
          </form>

          <>
            <span>Already have account?</span>
            <span onClick={() => router.push("/user/login")}>Sign In now</span>
          </>
        </div>
      </div>
    </div>
  );
};

export default Signup;
