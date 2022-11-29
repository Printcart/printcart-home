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
    listServices,
    characters,
    choice,
    servicesRealted,
    dataSubCat,
    current_cat,
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
            serviceList={listServices}
            total={total}
            dataNew={dataSubCat}
            characters={characters}
            current_cat={current_cat}
            choice={choice}
            serviceRealted={servicesRealted}
            dataSubCat={dataSubCat}
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
  // const uniqueValue = [];
  const paramStrapi = `${process.env.STRAPI_API_URL}`;
  const paramString = `${process.env.STRAPI_2_API_URL}`;
  const setUrl = new URL(
    "services?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$containsi]",
    paramString
  );
  const newUrl = setUrl.href;
  const filProjectCat = `&fields[0]=project_cat`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const filSort = `&sort=createdAt:DESC`;
  const limit = `&pagination[pageSize]=100`;

  const results = await fetch(
    `${paramStrapi}project-categories?sort=updatedAt:DESC&filters[$and][0][alias][$eq]=${alias}`
  ).then((res) => res.json());

  if (results.data.length > 0) {
    const name_cat = results.data[0].attributes.name;
    const alias_cat = results.data[0].attributes.alias;
    const current_cat = { name_cat, alias_cat };

    // const servicesCategory = await fetch(
    //   `${paramString}services?pagination[pageSize]=100` +
    //     filProjectCat +
    //     filAgency
    // ).then((res) => res.json());

    // const mergearray = uniqueValue.concat(
    //   servicesCategory.data.map((items) =>
    //     items.attributes.project_cat.map((item) => item)
    //   )
    // );
    // const delDuplicate = mergearray.flat();
    // const data = delDuplicate.filter((element) => {
    //   const isDuplicate = delDuplicate.includes(element.value);
    //   if (!isDuplicate) {
    //     delDuplicate.push(element.value);
    //     return true;
    //   }
    //   return false;
    // });
    // const valueData = data.map((item) => item.value);
    // const mergeValue = valueData.join("&filters[id]=");

    // const fetchDataCategory = fetch(
    //   `${paramStrapi}project-categories?pagination[pageSize]=100&filters[id]=${mergeValue}`
    // );
    const fetchListService = fetch(
      `${newUrl}=${name_cat}` + filAgency + filSort
    );
    const fetchServiceRealted = fetch(
      `${paramString}services?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$notContainsi]=${name_cat}&pagination[limit]=8` +
        filSort
    );
    const fetchSubCat = fetch(
      `${paramStrapi}project-categories?populate=parent.parent&filters[parent][alias][$eq]=${alias}&sort=service_count:DESC` +
        limit
    );

    const [
      // promiseDataDatacategory,
      promiseListServices,
      promiseServicesRealted,
      promiseSubcat,
    ] = await Promise.all([
      // fetchDataCategory,
      fetchListService,
      fetchServiceRealted,
      fetchSubCat,
    ]);
    const [listServices, servicesRealted, dataSubCat] = await Promise.all([
      // promiseDataDatacategory.json(),
      promiseListServices.json(),
      promiseServicesRealted.json(),
      promiseSubcat.json(),
    ]);

    return {
      props: {
        characters: results.data[0],
        listServices: listServices["data"],
        total: listServices["meta"],
        choice: alias,
        current_cat,
        servicesRealted: servicesRealted["data"],
        dataSubCat: dataSubCat["data"],
      },
    };
  }

  return {
    notFound: true,
  };
}
