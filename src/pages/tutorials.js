import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import BlogPage from "containers/AppModern/BlogPage";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "containers/AppModern/appModern.style";
import Head from "next/head";
import React from "react";
import { ThemeProvider } from "styled-components";

const Blog = (props) => {
  const { resPosts, pages } = props;
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <title>Printcart | Tutorials</title>
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
            <BlogPage resPosts={resPosts} pages={pages} />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};
export default Blog;

export async function getStaticProps() {
  const baseUrl = process.env.STRAPI_API_URL;
  const setUrl = new URL("posts", baseUrl);
  setUrl.searchParams.set("filters[channels][name][$eq]", "Printcart");
  setUrl.searchParams.set("pagination[pageSize]", "100");
  setUrl.searchParams.set("fields[0]", "alias");
  setUrl.searchParams.set("fields[1]", "title");
  setUrl.searchParams.set("fields[2]", "createdAt");
  setUrl.searchParams.set("fields[3]", "short_intro");
  setUrl.searchParams.set("populate[user_profile]", "*");
  setUrl.searchParams.set("populate[tags][fields][0]", "name");
  setUrl.searchParams.set("populate[tags][fields][1]", "alias");
  setUrl.searchParams.set("sort[0]", "createdAt:desc");
  const newUrl = setUrl.href

  const fetchData = await fetch(newUrl);
  const results = await fetchData.json();

  if (results.data.length > 0) {
    return {
      props: {
        pages: results["meta"],
        resPosts: results["data"]
      },
      revalidate: 1
    };
  }
}
