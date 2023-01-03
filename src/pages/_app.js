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

export default function CustomApp({ Component, pageProps }) {
  return (
    <Modal>
      {/* <script
        id="chatcows"
        src="https://images-products.s3.us-east-1.amazonaws.com/popup-chat/chatco.js?integrity=CvIxKgRTmGeQVJN4U3U4"
      /> */}
      <Component {...pageProps} />
    </Modal>
  );
}
