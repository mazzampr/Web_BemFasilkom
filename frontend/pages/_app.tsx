import "react-tabs/style/react-tabs.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Provider } from "next-auth/client";
import { NavbarBackgroundContext } from "../contexts/navbar-background";
import { useMemo, useState } from "react";
import { Footer } from "../components/Footer";

function MyApp({ Component, pageProps, router }: AppProps) {
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState("#fff");
  const value = useMemo(
    () => ({ navbarBackgroundColor, setNavbarBackgroundColor }),
    [navbarBackgroundColor]
  );

  return (
    <Provider session={pageProps.session}>
      <NavbarBackgroundContext.Provider value={value}>
        <Navbar />
        <div id="root" className="page-content ">
          <Component {...pageProps} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </NavbarBackgroundContext.Provider>
    </Provider>
  );
}
export default MyApp;
