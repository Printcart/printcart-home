import ResetCSS from "common/assets/css/style";
import Navbar from "common/components/Navbar";
import { theme } from "common/theme/appModern";
import BlogPage from "containers/AppModern/BlogPage";
import Footer from "containers/AppModern/Footer";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "containers/AppModern/appModern.style";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

const Blog = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <title>Printcart | Blog</title>
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
          <ContentWrapper>
            <BlogPage />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};
export default Blog;
