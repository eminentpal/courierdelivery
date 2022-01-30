import React from "react";
import Newuser from "../../components/dashboard/user/User";
import { wrapper } from "../../redux/store";
import { loadUser } from "../../redux/actions/UserActions";
// import { getSession } from "next-auth/react";
import { getSession } from "next-auth/client";

import { Cookie } from "next-cookie";

const index = () => {
  return (
    <div>
      <Newuser />
    </div>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      const cookies = Cookie.fromApiRoute(req);

      const token = cookies.get("token");
      const sess = await getSession({ req });

      console.log({ ok: token });
      console.log(sess);
      if (!token) {
        return {
          redirect: {
            destination: "/user/login",
            permanent: false,
          },
        };
      }
      await store.dispatch(loadUser(req, token));
    }
);
export default index;
