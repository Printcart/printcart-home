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
    servicesRealted,
    currentCat,
    dataSubCat,
    dataFAQ,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>
            {currentCat &&
              `Services for the ${currentCat.name_subcat} category on Printcart`}
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
            currentCat={currentCat}
            serviceRealted={servicesRealted}
            dataFAQ={dataFAQ}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default ServicesCategory;

export async function getServerSideProps({ query }) {
  const aliasSub = query.subCategory;
  const urlStrapi = `${process.env.STRAPI_API_URL}`;
  const urlData2 = `${process.env.STRAPI_2_API_URL}services`;
  const params = new URLSearchParams({
    populate: "image",
  });
  params.append("populate", "users_permissions_user.avatar");
  const newUrl = `${urlData2}?${params.toString()}`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const filSort = `&sort=createdAt:DESC`;
  const limit = `&pagination[pageSize]=10`;

  const res = await fetch(
    `${urlStrapi}project-categories?populate=parent&filters[parent][parent][alias][$null]=true&filters[parent][alias][$notNull]=true&filters[alias][$eq]=${aliasSub}`
  );
  const results = await res.json();

  if (results.data.length > 0) {
    const name_subcat = results.data[0].attributes.name;
    const name_cat = results.data[0].attributes.parent.data.attributes.name;
    const alias_subcat = results.data[0].attributes.alias;
    const alias_cat = results.data[0].attributes.parent.data.attributes.alias;
    const currentCat = { name_subcat, alias_subcat, name_cat, alias_cat };

    const fetchListService = fetch(
      `${newUrl}&filters[project_cat][$containsi]=${name_subcat}` +
        filAgency +
        filSort
    );
    const fetchServiceRealted = fetch(
      `${newUrl}&filters[project_cat][$notContainsi]=${name_subcat}&filters[project_cat][$containsi]=${name_cat}` +
        filSort +
        filAgency
    );
    const fetchSubCat = fetch(
      `${urlStrapi}project-categories?populate=parent.parent&filters[parent][alias][$eq]=${aliasSub}&sort=service_count:DESC` +
        limit
    );
    const fetchFAQ = fetch(
      `${urlStrapi}faqs?filters[$and][0][project_cat][$contains]="20956"`
    );

    const [
      promiseListServices,
      promiseServicesRealted,
      promiseSubcat,
      promiseFAQ,
    ] = await Promise.all([
      fetchListService,
      fetchServiceRealted,
      fetchSubCat,
      fetchFAQ,
    ]);
    const [listServices, servicesRealted, dataSubCat, dataFAQ] =
      await Promise.all([
        promiseListServices.json(),
        promiseServicesRealted.json(),
        promiseSubcat.json(),
        promiseFAQ.json(),
      ]);

    return {
      props: {
        listServices: listServices["data"],
        total: listServices["meta"],
        currentCat,
        servicesRealted: servicesRealted["data"],
        dataSubCat: dataSubCat["data"],
        dataFAQ: dataFAQ["data"],
      },
    };
  }

  return {
    notFound: true,
  };
}
