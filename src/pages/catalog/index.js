import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ProductsPOD from "containers/AppModern/ProductsPOD";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "containers/AppModern/appModern.style";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Catalog = (props) => {
  const { products, collections, ecoData, aopData, neckData, otherData } =
    props;
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
            <ProductsPOD
              getProducts={products}
              collections={collections}
              ecoData={ecoData}
              aopData={aopData}
              neckData={neckData}
              otherData={otherData}
            />
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
  const token = process.env.TOKEN_AUTH;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  // const today = new Date();
  // const curentDay = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const urlCollection = new URL("collections", baseUrlAdmin);
  urlCollection.searchParams.set("limit", 30);
  const paramsCollection = urlCollection.href;

  const urlFilter = new URL("products", baseUrlAdmin);
  urlFilter.searchParams.set("status", "published");
  urlFilter.searchParams.set("tags[]", "ptag_01H4JEYNQ52B0KW1K4NZMNVN1Q");
  const newUrlFilter = urlFilter.href;

  const urlFilter2 = new URL("products", baseUrlAdmin);
  urlFilter2.searchParams.set("status", "published");
  urlFilter2.searchParams.set("tags[]", "ptag_01H3XSTEDQ9NGYFEX9EB2KVGVV");
  const newUrlFilter2 = urlFilter2.href;

  const urlFilter3 = new URL("products", baseUrlAdmin);
  urlFilter3.searchParams.set("status", "published");
  urlFilter3.searchParams.set("tags[]", "ptag_01H3XV3ZSP0YAZ9N4E4QTD88XN");
  const newUrlFilter3 = urlFilter3.href;

  const urlFilter4 = new URL("products", baseUrlAdmin);
  urlFilter4.searchParams.set("status", "published");
  urlFilter4.searchParams.set("tags[]", "ptag_01H4JKTVGYYZQDY0D4FEAY1P4K");
  const newUrlFilter4 = urlFilter4.href;

  const urlProduct = new URL("products", baseUrlAdmin);
  urlProduct.searchParams.set("status", "published");
  // urlProduct.searchParams.set("limit", 500);
  // urlProduct.searchParams.set("updated_at[lte]", curentDay);
  const paramsProduct = urlProduct.href;

  const fetchCollections = fetch(paramsCollection, parameter);
  const fetchProducts = fetch(paramsProduct, parameter);
  const fetchFilter = fetch(newUrlFilter, parameter);
  const fetchFilter2 = fetch(newUrlFilter2, parameter);
  const fetchFilter3 = fetch(newUrlFilter3, parameter);
  const fetchFilter4 = fetch(newUrlFilter4, parameter);

  const [
    resCollections,
    resProducts,
    resFilter,
    resFilter2,
    resFilter3,
    resFilter4
  ] = await Promise.all([
    fetchCollections,
    fetchProducts,
    fetchFilter,
    fetchFilter2,
    fetchFilter3,
    fetchFilter4
  ]);

  const [
    resultCollection,
    resultProducts,
    resultEcoFilter,
    resultAOPfilter,
    resultNeckFilter,
    resultOtherFilter
  ] = await Promise.all([
    resCollections.json(),
    resProducts.json(),
    resFilter.json(),
    resFilter2.json(),
    resFilter3.json(),
    resFilter4.json()
  ]);

  return {
    props: {
      collections: resultCollection.collections || {},
      products: resultProducts.products || {},
      ecoData: resultEcoFilter.products || {},
      aopData: resultAOPfilter.products || {},
      neckData: resultNeckFilter.products || {},
      otherData: resultOtherFilter.products || {}
    },
    revalidate: 1
  };
}
