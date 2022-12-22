import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ServiceDetail from "containers/AppModern/ServiceDetail";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Service = (props) => {
  const { character, related, fetchAlias } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>{character.attributes.title}</title>
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
          <ServiceDetail
            character={character}
            service_id={character.id}
            related={related}
            fetchAlias={fetchAlias}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Service;

export async function getStaticProps({ params }) {
  // const time = `&time=${Date.now()}`
  const time = ``;

  const res = await fetch(
    `${process.env.STRAPI_2_API_URL}services?populate=image&populate=users_permissions_user.avatar&filters[alias][$eq]=${params.slug}` +
      time
  );
  const result = await res.json();

  const getValue = result?.data[0]?.attributes?.project_cat.map(
    (items) => items.value
  );
  const filterValue = getValue && getValue.join("&filters[id]=");

  const resAlias = await fetch(
    `${process.env.STRAPI_API_URL}project-categories?pagination[pageSize]=100&filters[id]=${filterValue}`
  );
  const fetchAlias = await resAlias.json();

  if (result.data.length > 0) {
    const type = result?.data[0]?.attributes?.project_cat[0]?.label;
    const resRelated = await fetch(
      `${process.env.STRAPI_2_API_URL}services?populate=image&filters[project_cat][$containsi]=${type}&filters[alias][$notIn]=${params.slug}&pagination[limit]=10&sort=createdAt:DESC` +
        time
    );
    const related = await resRelated.json();

    return {
      props: {
        character: result.data[0],
        related: related.data,
        fetchAlias: fetchAlias["data"],
        result: result,
      },
      revalidate: 604800,
    };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.STRAPI_2_API_URL}services?pagination[limit]=1`
  );
  const result = await res.json();

  if (result.data) {
    return {
      paths: result.data.map((_service) => {
        return {
          params: { slug: _service.attributes.alias },
        };
      }),
      fallback: "blocking",
    };
  }
}
