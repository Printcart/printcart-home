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
  urlProduct.searchParams.set("status", "published");

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

  const [resCollection, resProducts] = await Promise.all([
    fetchCollections.json(),
    fetchProducts.json()
  ]);

  return {
    props: {
      collections: resCollection.collections,
      products: resProducts.products
    },
    revalidate: 1
  };
}
