import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import PostDetail from "containers/AppModern/BlogPage/PostDetail";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const DetailPage = (props) => {
  const { postData, relatedData } = props;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>{postData?.attributes?.title}</title>
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
          <PostDetail postData={postData} relatedData={relatedData} />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default DetailPage;
export async function getStaticProps({ params }) {
  const baseUrl = process.env.STRAPI_API_URL;
  const getSlug = params.slug;
  const setUrl = new URL("posts", baseUrl);
  setUrl.searchParams.set("filters[alias][$eq]", getSlug);
  setUrl.searchParams.set("populate", "*");
  const newUrl = setUrl.href;

  const fetchData = await fetch(newUrl);
  const resultData = await fetchData.json();

  const idUser = resultData.data[0]?.attributes?.user_profile?.data?.id;
  const notIdUser = resultData.data[0]?.id;
  const relatedURL = new URL("posts", baseUrl);
  // relatedURL.searchParams.set("filters[channels][name][$eq]", "Printcart");
  relatedURL.searchParams.set("filters[$or][1][user_profile][id]", idUser);
  relatedURL.searchParams.set("filters[id][$notIn]", notIdUser);
  relatedURL.searchParams.set("pagination[limit]", 6);
  relatedURL.searchParams.set("filters[post_type][id]", 3);
  relatedURL.searchParams.set("fields[0]", "alias");
  relatedURL.searchParams.set("fields[1]", "title");
  relatedURL.searchParams.set("fields[2]", "createdAt");
  relatedURL.searchParams.set("fields[3]", "short_intro");
  relatedURL.searchParams.set("populate[user_profile]", "*");
  relatedURL.searchParams.set("populate[tags][fields][0]", "name");
  relatedURL.searchParams.set("populate[tags][fields][1]", "alias");
  relatedURL.searchParams.set("populate[banner][fields][0]", "formats");
  relatedURL.searchParams.set("sort[0]", "createdAt:desc");

  const newUrlRelated = relatedURL.href;

  const fetchRelated = await fetch(newUrlRelated);
  const resultRelated = await fetchRelated.json();

  return {
    props: {
      postData: resultData?.data[0] || {},
      relatedData: resultRelated || {},
    },
  };
}

export async function getStaticPaths() {
  const baseUrl = process.env.STRAPI_API_URL;
  const setUrl = new URL("posts", baseUrl);
  setUrl.searchParams.set("filters[channels][name][$eq]", "Printcart");
  setUrl.searchParams.set("pagination[pageSize]", "1");
  setUrl.searchParams.set("fields[0]", "alias");
  setUrl.searchParams.set("sort[0]", "createdAt:desc");
  const newUrl = setUrl.href;

  const fetchData = await fetch(newUrl);
  const result = await fetchData.json();

  if (result.data) {
    return {
      paths: result?.data.map((items) => {
        return {
          params: { slug: items.attributes.alias },
        };
      }),
      fallback: "blocking",
    };
  }
}
