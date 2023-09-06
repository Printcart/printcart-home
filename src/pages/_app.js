import { Modal } from "@redq/reuse-modal";
import "@redq/reuse-modal/es/index.css";
import "common/assets/css/flaticon.css";
import "../containers/CryptoModern/CountDown/timer.css";
import "common/assets/css/icon-example-page.css";
// swiper bundle styles
import "swiper/css/bundle";
import "common/assets/css/react-slick.css";
import "common/assets/css/rc-collapse.css";
import "rc-collapse/assets/index.css";
import React from "react";
import Script from "next/script";

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      <iframe
        id="chatco_popup"
        src="https://api.cloodo.com/v1/popup_chat/?integrity=zUG421pvjBDS5Bcjf4Pj"
        width="0"
        height="0"
      ></iframe>
      <Script
        src="https://images-products.s3.us-east-1.amazonaws.com/popup-chat/chatcov2.js"
        strategy="beforeInteractive"
        defer
      />
      <Component {...pageProps} />
    </Modal>
  );
}
