import React from "react";
import Signup from "../../components/dashboard/user/Signup";
import { wrapper } from "../../redux/store";
import { loadUser } from "../../redux/actions/UserActions";
// import { getSession } from "next-auth/client";

const signup = () => {
  return (
    <div>
      <Signup />
    </div>
  );
};

export default signup;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookies = Cookie.fromApiRoute(req);

      const token = cookies.get("token");
      // const sess = await getSession({ req });

      if (token) {
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
      await store.dispatch(loadUser(req, token));
    }
);

signup.getLayout = (page) => <>{page}</>;
