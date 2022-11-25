import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import InfoServices from "containers/AppModern/InfoServices";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

const ServicesCategory = (props) => {
  const {
    total,
    listService,
    characters,
    choice,
    dataServices,
    serviceRealted,
  } = props;
  const title = characters.attributes.name;

  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>
            {title && `Services for the ${title} category on Cloodo`}
          </title>
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
          <InfoServices
            serviceList={listService}
            total={total}
            dataNew={dataServices}
            characters={characters}
            choice={choice}
            serviceRealted={serviceRealted}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default ServicesCategory;

export async function getServerSideProps({ query }) {
  const alias = query.category;
  const uniqueValue = [];
  const paramStrapi = `${process.env.STRAPI_API_URL}project-categories`;
  const paramString = `${process.env.STRAPI_2_API_URL}services`;
  const setUrl = new URL(
    "?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$containsi]",
    paramString
  );
  const newUrl = setUrl.href;
  const filProjectCat = `&fields[0]=project_cat`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const filSort = `&sort=createdAt:DESC`;

  const results = await fetch(
    `${paramStrapi}?sort=updatedAt:DESC&filters[$and][0][alias][$eq]=${alias}`
  ).then((res) => res.json());

  if (results.data.length > 0) {
    const name_cat = results.data[0].attributes.name;

    const listService = await fetch(
      `${newUrl}=${name_cat}` + filAgency + filSort
    ).then((res) => res.json());

    const servicesCategory = await fetch(
      `${paramString}?pagination[pageSize]=100` + filProjectCat + filAgency
    ).then((res) => res.json());

    const mergearray = uniqueValue.concat(
      servicesCategory.data.map((items) =>
        items.attributes.project_cat.map((item) => item)
      )
    );
    const delDuplicate = mergearray.flat();
    const data = delDuplicate.filter((element) => {
      const isDuplicate = delDuplicate.includes(element.value);
      if (!isDuplicate) {
        delDuplicate.push(element.value);
        return true;
      }
      return false;
    });
    const valueData = data.map((item) => item.value);
    const mergeValue = valueData.join("&filters[id]=");

    const dataServices = await fetch(
      `${paramStrapi}?pagination[pageSize]=100&filters[id]=${mergeValue}`
    ).then((res) => res.json());

    const serviceRealted = await fetch(
      `${paramString}?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$notContainsi]=${name_cat}&pagination[limit]=8` +
        filSort
    ).then((res) => res.json());

    return {
      props: {
        characters: results.data[0],
        listService: listService.data,
        total: listService["meta"],
        dataServices: dataServices["data"],
        choice: alias,
        serviceRealted: serviceRealted["data"],
      },
    };
  }

  return {
    notFound: true,
  };
}
