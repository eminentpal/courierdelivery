import React from "react";
import UserLogin from "../components/auth/UserLogin";
import { useSelector } from "react-redux";
import { wrapper } from "../redux/store";

// import { getSession } from "next-auth/client";

import { Cookie } from "next-cookie";

const login = () => {
  // const { user, loading, error } = useSelector((state) => state.auth);

  // console.log(loading);
  // console.log(user);
  // console.log(error);

  // if (!user) return <h1>loadijg...</h1>;
  return (
    <div>
      <UserLogin />
    </div>
  );
};

export default login;

//use this serverside method when u are  bothered abt server side rednering of ur data through redux store.
// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(loadUser(req));
//   }
// );

//use this serverside method when u are not bothered abt server side rednering of ur data through redux store.

export function getServerSideProps(context) {
  // const sess = await getSession({ req });

  const token = context.req.headers.cookie;

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

login.getLayout = (page) => <>{page}</>;
