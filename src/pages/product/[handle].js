import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ProductDetail from "containers/AppModern/ProductDetail";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

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
  const baseUrl = process.env.MEDUSA_API_ADMIN_URL;
  const token = process.env.TOKEN_AUTH;
  const paramsProduct = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  const setUrlProducts = new URL(`products?handle=${params.handle}`, baseUrl);
  const urlProducts = setUrlProducts.href;

  const setUrlRelated = new URL("products", baseUrl);
  setUrlRelated.searchParams.set("status", "published");
  setUrlRelated.searchParams.set("limit", 4);
  const urlRelated = setUrlRelated.href;

  const fetchProducts = fetch(urlProducts, paramsProduct);
  const fetchProductsRelated = fetch(urlRelated, paramsProduct);

  const [res, resRelated] = await Promise.all([
    fetchProducts,
    fetchProductsRelated
  ]);

  const [result, resultRelated] = await Promise.all([
    res.json(),
    resRelated.json()
  ]);

  return {
    props: {
      product: result?.products || {},
      productsRelated: resultRelated.products || {}
    },
    revalidate: 1
  };
}

export async function getStaticPaths() {
  const baseUrl = process.env.MEDUSA_API_ADMIN_URL;
  const token = process.env.TOKEN_AUTH;

  const paramsProduct = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  const newUrlPath = new URL("products", baseUrl);
  newUrlPath.searchParams.set("status", "published");
  const fetchPath = newUrlPath.href;

  const res = await fetch(fetchPath, paramsProduct);
  const result = await res.json();

  if (result.products) {
    return {
      paths: result.products.map((product) => {
        return {
          params: { handle: product.handle }
        };
      }),
      fallback: "blocking"
    };
  }
}
