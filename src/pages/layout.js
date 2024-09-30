import Head from "next/head";
import { ThemeProvider } from "styled-components";
import ResetCSS from "../common/assets/css/style";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "../containers/AppModern/appModern.style";
config.autoAddCss = false;

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <Head>
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
        <ContentWrapper>{children}</ContentWrapper>
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
}
