import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import ProductsPOD from "containers/AppModern/ProductsPOD";

const productsPOD = (props) => {
  const { getProducts } = props;
  console.log(getProducts);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Categories</title>
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
            <ProductsPOD getProducts={getProducts} />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default productsPOD;

export async function getStaticProps() {
  const baseUrl = process.env.MEDUSA_API_URL;
  const res = await fetch(`${baseUrl}/products`);
  const result = await res.json();

  return {
    props: {
      getProducts: result.products,
    },
  };
}