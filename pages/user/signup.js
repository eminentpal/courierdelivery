import React from "react";
import Signup from "../../components/dashboard/user/Signup";

const signup = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default signup;

signup.getLayout = (page) => <>{page}</>;
