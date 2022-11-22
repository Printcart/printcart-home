import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import Navbar from "containers/AppModern/Navbar";
import ServiceDetail from "containers/AppModern/ServiceDetail";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const Service = (props) => {
  const { character, related } = props;
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
            character={character.attributes}
            service_id={character.id}
            related={related}
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

  const results = await fetch(
    `${process.env.STRAPI_2_API_URL}services?populate=image&populate=users_permissions_user.avatar&filters[alias][$eq]=${params.slug}` +
      time
  ).then((res) => res.json());

  if (results.data.length > 0) {
    const type = results.data[0].attributes.project_cat[0]?.label;
    const related = await fetch(
      `${process.env.STRAPI_2_API_URL}services?populate=image&filters[project_cat][$containsi]=${type}&filters[alias][$notIn]=${params.slug}&pagination[limit]=10&sort=createdAt:DESC` +
        time
    ).then((res) => res.json());

    return {
      props: {
        character: results.data[0],
        related: related.data,
      },
      revalidate: 604800,
    };
  }

  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const characters = await fetch(
    `${process.env.STRAPI_2_API_URL}services?pagination[limit]=1`
  ).then((res) => res.json());

  if (characters.data) {
    return {
      paths: characters.data.map((_service) => {
        return {
          params: { slug: _service.attributes.alias },
        };
      }),
      fallback: "blocking",
    };
  }
}
