"use client";
import BlogPage from "../../containers/AppModern/BlogPage";

const Tutorials = (props) => {
  const { resPosts, pages } = props;

  return <BlogPage resPosts={resPosts} pages={pages} />;
};

export default Tutorials;

export async function getStaticProps() {
  const baseUrl = process.env.STRAPI_API_URL;
  const setUrl = new URL("posts", baseUrl);
  setUrl.searchParams.set("filters[channels][name][$eq]", "Printcart");
  setUrl.searchParams.set("pagination[pageSize]", "10");
  setUrl.searchParams.set("fields[0]", "alias");
  setUrl.searchParams.set("fields[1]", "title");
  setUrl.searchParams.set("fields[2]", "createdAt");
  setUrl.searchParams.set("fields[3]", "short_intro");
  setUrl.searchParams.set("populate[user_profile]", "*");
  setUrl.searchParams.set("populate[tags][fields][0]", "name");
  setUrl.searchParams.set("populate[tags][fields][1]", "alias");
  setUrl.searchParams.set("populate[banner][fields][0]", "formats");
  setUrl.searchParams.set("sort[0]", "createdAt:desc");
  const newUrl = setUrl.href;

  const fetchData = await fetch(newUrl);
  const results = await fetchData.json();

  if (results?.data?.length > 0) {
    return {
      props: {
        pages: results["meta"],
        resPosts: results["data"],
      },
      revalidate: 1,
    };
  }
}
