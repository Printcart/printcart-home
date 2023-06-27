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
  const { products, collections, ecoFilter, aopFilter, neckFilter } = props;
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
              ecoFilter={ecoFilter}
              aopFilter={aopFilter}
              neckFilter={neckFilter}
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
  urlProduct.searchParams.set("limit", 500);

  const paramsProduct = urlProduct.href;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  };

  const fetchCollections = await fetch(paramsCollection, parameter);
  const fetchProducts = await fetch(paramsProduct, parameter);
  const fetchFilter = await fetch(newUrlFilter, parameter);
  const fetchFilter2 = await fetch(newUrlFilter2, parameter);
  const fetchFilter3 = await fetch(newUrlFilter3, parameter);

  const [
    resCollection,
    resProducts,
    resEcoFilter,
    resAOPfilter,
    resNeckFilter
  ] = await Promise.all([
    fetchCollections.json(),
    fetchProducts.json(),
    fetchFilter.json(),
    fetchFilter2.json(),
    fetchFilter3.json()
  ]);

  return {
    props: {
      collections: resCollection.collections,
      products: resProducts.products,
      ecoFilter: resEcoFilter.products,
      aopFilter: resAOPfilter.products,
      neckFilter: resNeckFilter.products
    },
    revalidate: 1
  };
}
