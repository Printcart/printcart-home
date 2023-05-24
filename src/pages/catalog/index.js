import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import ProductsPOD from "containers/AppModern/ProductsPOD";
import React from "react";

const Catalog = (props) => {
  const { products, collections } = props;
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
            <ProductsPOD getProducts={products} collections={collections} />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Catalog;

export async function getStaticProps() {
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const urlCollection = new URL("collections", baseUrlAdmin);
  urlCollection.searchParams.set("limit", 30);
  const paramsCollection = urlCollection.href;

  const urlProduct = new URL("products", baseUrlAdmin);
  urlProduct.searchParams.set("limit", 6);
  urlProduct.searchParams.set("status", "published");
  const paramsProduct = urlProduct.href;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  };

  const resCollection = await fetch(paramsCollection, parameter);
  const resProducts = await fetch(paramsProduct, parameter);

  const [fetchCollection, fetchProducts] = await Promise.all([
    resCollection.json(),
    resProducts.json()
  ]);

  return {
    props: {
      collections: fetchCollection.collections,
      products: fetchProducts.products
    },
    revalidate: 1
  };
}
