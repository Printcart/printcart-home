import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import CollectionDetail from "containers/AppModern/CollectionDetail";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Product = (props) => {
  const { collection } = props;
  // console.log(collection);
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | ProductDetail</title>
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
          <CollectionDetail collection={collection} />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Product;
export async function getStaticProps({ params }) {
  const baseUrlAdmin = process.env.MEDUSA_API_ADMIN_URL;
  const resAdmin = await fetch(`${baseUrlAdmin}collections/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  });
  const result = await resAdmin.json();

  return {
    props: {
      collection: result.collection
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const baseUrl = process.env.MEDUSA_API_ADMIN_URL;
  // console.log(`${baseUrl}collections`);
  const resAdmin = await fetch(`${baseUrl}collections`, {
    method: "GET",
    headers: {
      Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
      "Content-Type": "application/json"
    }
  });
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
