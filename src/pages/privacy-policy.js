import ResetCSS from "common/assets/css/style";
import Container from "common/components/UI/Container";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import PrivacyPolicy from "./privacy-policy-content.mdx";

const pagePrivacy = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Printcart | Privacy Policy</title>
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
        <Container>
          <div className="container-body">
            <PrivacyPolicy />
          </div>
        </Container>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};
export default pagePrivacy;
