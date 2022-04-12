import React from "react";
import { wrapper } from "../../redux/store";
import { LoadUser } from "../../redux/actions/UserActions";
import { Cookie } from "next-cookie";
import Dashboard from "../../components/dashboard/user/Dashboard";

const index = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store, context) =>
    async ({ req }) => {
      const cookies = Cookie.fromApiRoute(req);

      console.log({ token: cookies.cookies });
      const token = cookies.get("token");

      console.log(token);

      if (!token) {
        return {
          redirect: {
            destination: "/login",
            permanent: false,
          },
        };
      } else {
        await store.dispatch(LoadUser(req, token));
      }
    }
);
export default index;
