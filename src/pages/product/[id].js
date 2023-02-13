import ResetCSS from "common/assets/css/style";
import { base } from "common/components/base";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ProductDetail from "containers/AppModern/ProductDetail";
import ServiceDetail from "containers/AppModern/ServiceDetail";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Product = (props) => {
  const { product, products } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Product Detail</title>
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
          <ProductDetail product={product} products={products} />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Product;

export async function getStaticProps({ params }) {
  const baseUrl = process.env.MEDUSA_API_URL;
  const res = await fetch(`${baseUrl}products/${params.id}`);
  const resRelated = await fetch(`${baseUrl}products/`);
  const result = await res.json();
  const resultRelated = await resRelated.json();

  return {
    props: {
      product: result,
      products: resultRelated.products
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const baseUrl = process.env.MEDUSA_API_URL;
  const res = await fetch(`${baseUrl}products`);
  const result = await res.json();

  if (result.products) {
    return {
      paths: result.products.map((product) => {
        return {
          params: { id: product.id }
        };
      }),
      fallback: "blocking"
    };
  }
}
