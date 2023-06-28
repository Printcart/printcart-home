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
  const parameter = {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  };
  const urlCollection = new URL(`collections/${params.id}`, baseUrlAdmin);
  const fetchUrl = urlCollection.href;
  const urlVendor = new URL("vendors", baseUrlAdmin);
  // urlVendor.searchParams.set("limit", 5000);
  const fetchUrlVendor = urlVendor.href;

  const urlProducts = new URL("products", baseUrlAdmin);
  urlProducts.searchParams.set("collection_id[]", params.id);
  urlProducts.searchParams.set("status", "published");
  const newUrl = urlProducts.href;
  console.log(newUrl);

  const resAdmin = await fetch(fetchUrl, parameter);
  const fetchVendor = await fetch(fetchUrlVendor, parameter);
  const fetchProducts = await fetch(newUrl, parameter);

  const result = await resAdmin.json();
  const resVendor = await fetchVendor.json();
  const resProducts = await fetchProducts.json();

  return {
    props: {
      collection: result?.collection || {},
      vendors: resVendor.vendors || {},
      products: resProducts?.products || {}
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  };
  const resAdmin = await fetch(`${baseUrlAdmin}collections`, parameter);
  const result = await resAdmin.json();

  if (result.collections) {
    return {
      paths: result.collections.map((collection) => {
        return {
          params: { id: collection.id }
        };
      }),
      fallback: "blocking"
    };
  }
}
