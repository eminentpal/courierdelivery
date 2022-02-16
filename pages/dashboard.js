import { useEffect } from "react";
import Dashboard from "../components/dashboard/admin/Dashboard";
import { wrapper } from "../redux/store";
import { LoadUser } from "../redux/actions/userActions";
import { Cookie } from "next-cookie";

import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const dashboard = () => {
  const router = useRouter();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.role !== "admin") {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return <div>loading..</div>;
  }
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
export default dashboard;
