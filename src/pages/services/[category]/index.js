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
    dataSubCat,
    currentCat,
    dataFAQ,
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>
            {currentCat &&
              `Services for the ${currentCat.name_cat} category on Printcart`}
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
  const alias = query.category;
  const urlStrapi = `${process.env.STRAPI_API_URL}`;
  const urlData2 = `${process.env.STRAPI_2_API_URL}services`;

  // Create URL with necessary params
  const params = new URLSearchParams({
    populate: "image",
    "filters[project_cat][$containsi]": query.category,
    "filters[$and][0][service_agency][$contains]": "568427", // Adjust as necessary
    "sort": "createdAt:DESC",
    "pagination[pageSize]": "10", // Ensure this aligns with your pagination needs
  });

  const categoryRes = await fetch(
    `${urlStrapi}project-categories?sort=updatedAt:DESC&filters[$and][0][alias][$eq]=${alias}`
  );

  const categoryData = await categoryRes.json();

  if (categoryData.data.length > 0) {
    const currentCat = {
      name_cat: categoryData.data[0].attributes.name,
      alias_cat: categoryData.data[0].attributes.alias,
    };

    const fetchListService = fetch(`${urlData2}?${params.toString()}`);
    const fetchServiceRealted = fetch(
      `${urlData2}?filters[project_cat][$notContainsi]=${currentCat.name_cat}&pagination[limit]=9&sort=createdAt:DESC&filters[$and][0][service_agency][$contains]=568427`
    );
    const fetchSubCat = fetch(
      `${urlStrapi}project-categories?populate=parent.parent&filters[parent][alias][$eq]=${alias}&sort=service_count:DESC&pagination[pageSize]=10`
    );
    const fetchFAQ = fetch(
      `${urlStrapi}faqs?filters[$and][0][project_cat][$contains]="20956"`
    );

    const [listServicesRes, servicesRealtedRes, dataSubCatRes, dataFAQRes] = await Promise.all([
      fetchListService,
      fetchServiceRealted,
      fetchSubCat,
      fetchFAQ,
    ]);

    const [listServices, servicesRealted, dataSubCat, dataFAQ] = await Promise.all([
      listServicesRes.json(),
      servicesRealtedRes.json(),
      dataSubCatRes.json(),
      dataFAQRes.json(),
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

