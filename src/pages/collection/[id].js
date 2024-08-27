import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import CollectionDetail from "containers/AppModern/CollectionDetail";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Collection = (props) => {
  const { collection, vendors, products } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Collection Detail</title>
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
          <CollectionDetail
            collection={collection}
            vendors={vendors}
            products={products}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Collection;
export async function getStaticProps({ params }) {
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const token = process.env.TOKEN_AUTH;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const setUrlCollections = new URL(`collections/${params.id}`, baseUrlAdmin);
  const urlCollections = setUrlCollections.href;

  const setUrlProducts = new URL("products", baseUrlAdmin);
  setUrlProducts.searchParams.set("collection_id[]", params.id);
  setUrlProducts.searchParams.set("status", "published");
  const newUrlProducts = setUrlProducts.href;

  const fetchCollection = fetch(urlCollections, parameter);
  const fetchProducts = fetch(newUrlProducts, parameter);

  const [resCollection, resProducts] = await Promise.all([
    fetchCollection,
    fetchProducts,
  ]);

  const [resultCollection, resultProducts] = await Promise.all([
    resCollection.json(),
    resProducts.json(),
  ]);

  return {
    props: {
      collection: resultCollection?.collection || {},
      products: resultProducts?.products || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const token = process.env.TOKEN_AUTH;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const resAdmin = await fetch(`${baseUrlAdmin}collections`, parameter);
  const result = await resAdmin.json();

  if (result.collections) {
    return {
      paths: result.collections.map((collection) => {
        return {
          params: { id: collection.id },
        };
      }),
      fallback: "blocking",
    };
  }
}

export const config = {
  runtime: "experimental-edge",
};
