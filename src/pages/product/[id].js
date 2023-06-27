import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ProductDetail from "containers/AppModern/ProductDetail";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const baseUrl = process.env.MEDUSA_API_ADMIN_URL;
const paramsProduct = {
  method: "GET",
  headers: {
    Authorization: "Bearer Rl2KcwXuTa6abLczqxu1Z1ID2fE0CVCq",
    "Content-Type": "application/json"
  }
};
const Product = (props) => {
  const { product, productsRelated } = props;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Product Detail</title>
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
          <ProductDetail product={product} productsRelated={productsRelated} />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Product;

export async function getStaticProps({ params }) {
  const newBaseProduct = new URL(`products/${params.id}`, baseUrl);
  const fetchProduct = newBaseProduct.href;
  const newBaseUrl = new URL("products", baseUrl);
  newBaseUrl.searchParams.set("status", "published");
  const fetchUrl = newBaseUrl.href;

  const res = await fetch(fetchProduct, paramsProduct);
  const resRelated = await fetch(fetchUrl, paramsProduct);

  const result = await res.json();
  const resultRelated = await resRelated.json();

  return {
    props: {
      product: result?.product || {},
      productsRelated: resultRelated.products || {}
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const newUrlPath = new URL("products", baseUrl);
  const fetchPath = newUrlPath.href;

  const res = await fetch(fetchPath, paramsProduct);
  const result = await res.json();

  if (result.products) {
    return {
      paths: result.products.map((product) => {
        return {
          params: { id: product.id }
        };
      }),
      fallback: "blocking"
    };
  }
}
