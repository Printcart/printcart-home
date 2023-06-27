import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import CollectionDetail from "containers/AppModern/CollectionDetail";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
const parameter = {
  method: "GET",
  headers: {
    Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
    "Content-Type": "application/json"
  }
};

const Collection = (props) => {
  const { collection, vendors } = props;
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
          <CollectionDetail collection={collection} vendors={vendors} />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Collection;
export async function getStaticProps({ params }) {
  const urlCollection = new URL(`collections/${params.id}`, baseUrlAdmin);
  const fetchUrl = urlCollection.href;
  const urlVendor = new URL("vendors", baseUrlAdmin);
  // urlVendor.searchParams.set("limit", 5000);
  const fetchUrlVendor = urlVendor.href;

  const resAdmin = await fetch(fetchUrl, parameter);
  const fetchVendor = await fetch(fetchUrlVendor, parameter);

  const result = await resAdmin.json();
  const resVendor = await fetchVendor.json();

  return {
    props: {
      collection: result?.collection || {},
      vendors: resVendor.vendors || {}
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
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
