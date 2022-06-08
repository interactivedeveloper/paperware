import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import {
  faCertificate,
  faCubes,
  faEnvelope,
  faEye,
  faPhoneSquare,
  faRotate,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { RecoilRoot } from "recoil";

import Layout from "components/common/Layout";

library.add(
  faShoppingCart,
  faEye,
  faCubes,
  faPhoneSquare,
  faEnvelope,
  faCertificate,
  faRotate
);

config.autoAddCss = false;

import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
