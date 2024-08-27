import React, { Fragment } from "react";
import Head from "next/head";
import ErrorSec from "containers/Error";
import ResetCSS from "common/assets/css/style";

export default function Error() {
  return (
    <Fragment>
      <Head>
        <title>404: Not found</title>
        <link
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,500,600,700|Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ResetCSS />
      <div style={{ textAlign: "center" }}>
        <ErrorSec />
      </div>
    </Fragment>
  );
}
