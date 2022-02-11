import React from "react";
import Newuser from "../../components/dashboard/user/User";
import { wrapper } from "../../redux/store";
import { loadUser } from "../../redux/actions/UserActions";

import { Cookie } from "next-cookie";

const index = () => {
  return (
    <div>
      <Newuser />
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
            destination: "/user/login",
            permanent: false,
          },
        };
      } else {
        await store.dispatch(loadUser(req, token));
      }
    }
);
export default index;
