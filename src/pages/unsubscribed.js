import ResetCSS from "common/assets/css/style";
import mailError from "common/assets/image/mailError.jpg";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { ThemeProvider } from "styled-components";

const UnsubscribeForm = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <title>Printcart | Tutorials</title>
          <meta name="theme-color" content="#2563FF" />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <div
            style={{
              display: "block",
              width: "100vw",
              height: "100vh",
              backgroundColor: "#f0f0f0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: "500px",
                width: "100%",
                margin: "auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                src={mailError}
                alt="Mail Error"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "1rem",
                }}
              />
              <h2 style={{ marginBottom: "0.5rem" }}>
                Successful unsubscribe from Printcart
              </h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "0" }}>
                You won't receive mail from our system anymore.
              </p>
              <p>
                If this is a mistake, you can subscribe again by contacting us.
              </p>
            </div>
          </div>
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default UnsubscribeForm;
