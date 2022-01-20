import "../styles/globals.css";
import "../styles/App.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/c8e4d183c2.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}

export default MyApp;
