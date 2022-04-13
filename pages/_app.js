import "../styles/globals.css";
import "../styles/App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Head from "next/head";

// import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Router, useRouter } from "next/router";

import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
};

function MyApp({ Component, pageProps }) {
  //I load user when the component mount
  //i added the router as a dependency to keep track of the user state

  // useEffect(() => {
  //   if (router) dispatch(loadUser());
  // }, [router]);

  if (Component.getLayout) {
    return (
      <div>
        <Head>
          <script
            src="https://kit.fontawesome.com/c8e4d183c2.js"
            crossOrigin="anonymous"
          ></script>
        </Head>

        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/c8e4d183c2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <Header />

      <Component {...pageProps} />

      {/* <Footer /> */}
    </div>
  );
}

export default wrapper.withRedux(MyApp);
