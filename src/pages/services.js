import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import InfoServices from "../containers/AppModern/InfoServices";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper
} from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";

const Services = (props) => {
  const { serviceList, total, dataCategory, dataFAQ } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Services</title>
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
            <InfoServices
              serviceList={serviceList}
              total={total}
              dataNew={dataCategory}
              dataFAQ={dataFAQ}
            />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export default Services;
export async function getStaticProps() {
  const time = `&time=${Date.now()}`;
  const limit = `&pagination[pageSize]=100`;
  const filProjectCat = `&fields[0]=project_cat`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const user = `&populate=users_permissions_user.avatar`;

  // Fetch services to get project categories
  const res = await fetch(
    `${process.env.STRAPI_2_API_URL}services?pagination[pageSize]=100${filProjectCat}${filAgency}`
  );
  const result = await res.json();

  // Extract and merge project categories
  const mergeArray = result.data.map((items) =>
    items.attributes.project_cat.map((item) => item)
  );
  const delDuplicate = mergeArray.flat();

  const valueData = delDuplicate.map((item) => item.value);
  const mergeValue = valueData.join("&filters[id]="); // Create mergeValue here

  // Now you can use mergeValue for the fetchCategoryUrl
  const fetchServicesUrl = `${process.env.STRAPI_2_API_URL}services?populate=image${user}${limit}${time}${filAgency}`;
  const fetchCategoryUrl = `${process.env.STRAPI_API_URL}project-categories?pagination[pageSize]=100&filters[id]=${mergeValue}`;
  const fetchFAQUrl = `${process.env.STRAPI_API_URL}faqs?filters[$and][0][project_cat][$contains]="20956"`;


  try {
    const [promiseServices, promiseCategory, promiseFAQ] = await Promise.all([
      fetch(fetchServicesUrl),
      fetch(fetchCategoryUrl),
      fetch(fetchFAQUrl),
    ]);

    const [dataServices, dataCategory, dataFAQ] = await Promise.all([
      promiseServices.json(),
      promiseCategory.json(),
      promiseFAQ.json(),
    ]);

    if (dataServices.data.length > 0) {
      return {
        props: {
          serviceList: dataServices["data"],
          total: dataServices["meta"],
          dataCategory: dataCategory["data"],
          dataFAQ: dataFAQ["data"],
        },
      };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true, // or return a fallback state
    };
  }
}
