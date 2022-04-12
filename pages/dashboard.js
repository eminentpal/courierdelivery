import { useEffect } from "react";
import DashboardOne from "../components/dashboard/admin/DashboardOne";
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
      <DashboardOne />
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
      }

      if (token) {
        // const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded);
        // //remember we stored d user id on token wen we created it so we use it to find d user
        // req.user = await User.findById(decoded.id);
      } else {
        await store.dispatch(LoadUser(req, token));
      }
    }
);
export default dashboard;
