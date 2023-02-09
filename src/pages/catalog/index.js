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
  const { getProducts, collections } = props;
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
            <ProductsPOD getProducts={getProducts} collections={collections} />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Catalog;

export async function getStaticProps() {
  const baseUrl = process.env.MEDUSA_API_URL;
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const resAdmin = await fetch(`${baseUrlAdmin}collections`, {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  });

  const res = await fetch(`${baseUrl}/products?limit=6`);
  const result = await res.json();
  const resultAdmin = await resAdmin.json();

  return {
    props: {
      getProducts: result.products,
      collections: resultAdmin
    },
    revalidate: 1,
  };
}
