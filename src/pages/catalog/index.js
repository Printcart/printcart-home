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
  const { products, collections, ecoData, aopData, neckData } = props;
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
  const today = new Date();
  const curentDay = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const urlCollection = new URL("collections", baseUrlAdmin);
  urlCollection.searchParams.set("limit", 30);
  const paramsCollection = urlCollection.href;

  const urlFilter = new URL("products", baseUrlAdmin);
  urlFilter.searchParams.set("status", "published");
  urlFilter.searchParams.set("tags[]", "ptag_01H3XHMMXSMKNB5YVEB0Y5DCGJ");
  const newUrlFilter = urlFilter.href;

  const urlFilter2 = new URL("products", baseUrlAdmin);
  urlFilter2.searchParams.set("status", "published");
  urlFilter2.searchParams.set("tags[]", "ptag_01H3XSTEDQ9NGYFEX9EB2KVGVV");
  const newUrlFilter2 = urlFilter2.href;

  const urlFilter3 = new URL("products", baseUrlAdmin);
  urlFilter3.searchParams.set("status", "published");
  urlFilter3.searchParams.set("tags[]", "ptag_01H3XV3ZSP0YAZ9N4E4QTD88XN");
  const newUrlFilter3 = urlFilter3.href;

  const urlProduct = new URL("products", baseUrlAdmin);
  urlProduct.searchParams.set("status", "published");
  // urlProduct.searchParams.set("limit", 500);
  urlProduct.searchParams.set("updated_at[gte]", curentDay);
  const paramsProduct = urlProduct.href;

  const fetchCollections = fetch(paramsCollection, parameter);
  const fetchProducts = fetch(paramsProduct, parameter);
  const fetchFilter = fetch(newUrlFilter, parameter);
  const fetchFilter2 = fetch(newUrlFilter2, parameter);
  const fetchFilter3 = fetch(newUrlFilter3, parameter);

  const [resCollections, resProducts, resFilter, resFilter2, resFilter3] =
    await Promise.all([
      fetchCollections,
      fetchProducts,
      fetchFilter,
      fetchFilter2,
      fetchFilter3
    ]);

  const [
    resultCollection,
    resultProducts,
    resultEcoFilter,
    resultAOPfilter,
    resultNeckFilter
  ] = await Promise.all([
    resCollections.json(),
    resProducts.json(),
    resFilter.json(),
    resFilter2.json(),
    resFilter3.json()
  ]);

  return {
    props: {
      collections: resultCollection.collections || {},
      products: resultProducts.products || {},
      ecoData: resultEcoFilter.products || {},
      aopData: resultAOPfilter.products || {},
      neckData: resultNeckFilter.products || {}
    },
    revalidate: 1
  };
}
