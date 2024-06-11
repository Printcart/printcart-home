import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";
import Box from "common/components/Box";
import Card from "common/components/Card";
import Link from "next/link";

const UnsubscribedComponent = () => {
  const styles = {
    cardItem: {
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      margin: '200px auto',
    },
    thankYouMessage: {
      fontSize: '18px',
      color: '#333',
      marginBottom: '20px',
    },
    resubscribeMessage: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '20px',
    },
    resubscribeLink: {
      display: 'inline-block',
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      textDecoration: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    resubscribeLinkHover: {
      backgroundColor: '#0056b3',
    }
  };

  return React.createElement(
    Card,
    { style: styles.cardItem },
    React.createElement(
      Box,
      null,
      React.createElement(
        'div',
        { style: styles.thankYouMessage },
        'You have unsubscribed email from Printcart.'
      ),
      React.createElement(
        'div',
        { style: styles.resubscribeMessage },
        'If you change your mind, you can resubscribe to receive our emails at any time by contact our support.'
      ),
    )
  );
};

const Unsubscribed = () => {
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
          <div className="sticky-active">
            <Navbar />
          </div>
          <UnsubscribedComponent />
          <Footer />
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default Unsubscribed;
