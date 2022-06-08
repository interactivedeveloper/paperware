import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactNode, Suspense } from "react";
import { useRecoilState } from "recoil";

import { scrollStartedState } from "store/store";
// import ChannelIO from './ChannelIO';
import Footer from "./Footer";
import Header from "./Header";

const ChannelIO = dynamic(() => import("../common/ChannelIO"), { ssr: false });

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [scrollStarted] = useRecoilState(scrollStartedState);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      {scrollStarted && <ChannelIO />}
      <Footer />
    </>
  );
};

export default Layout;
