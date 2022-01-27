import React from "react";
import Login from "../../components/dashboard/user/Login";
import { useSelector } from "react-redux";
import { wrapper } from "../../redux/store";
import { loadUser } from "../../redux/actions/UserActions";

const login = () => {
  const { user, loading, error } = useSelector((state) => state.auth);

  console.log(loading);
  console.log(user);
  console.log(error);

  // if (!user) return <h1>loadijg...</h1>;
  return (
    <div>
      <Login />
    </div>
  );
};

export default login;

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(loadUser(req));
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(loadUser(req));
    }
);

login.getLayout = (page) => <>{page}</>;
