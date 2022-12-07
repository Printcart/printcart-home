import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import InfoServices from "../containers/AppModern/InfoServices";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";

const Services = (props) => {
  const { serviceList, total, dataCategory } = props;
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
          <InfoServices
            serviceList={serviceList}
            total={total}
            dataNew={dataCategory}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default Services;
export async function getStaticProps() {
  const time = `&time=${Date.now()}`;
  const uniqueValue = [];
  const limit = `&pagination[pageSize]=100`;
  const filProjectCat = `&fields[0]=project_cat`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  const user = `&populate=users_permissions_user.avatar`;

  const servicesCategory = await fetch(`${process.env.STRAPI_2_API_URL}services?pagination[pageSize]=100` + filProjectCat + filAgency).then((res) => res.json());

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

  const fetchCategory = fetch(`${process.env.STRAPI_API_URL}project-categories?pagination[pageSize]=100&filters[id]=${mergeValue}`);
  const fetchServices = fetch(`${process.env.STRAPI_2_API_URL}services?populate=image` + user + limit + time + filAgency);
  
  const [promiseCategory, promiseServices] = await Promise.all([fetchServices,fetchCategory]);
  const [dataServices, dataCategory] = await Promise.all([promiseCategory.json(),promiseServices.json()]);

  if (dataServices.data.length > 0) {
    return {
      props: {
        serviceList: dataServices["data"],
        total: dataServices["meta"],
        dataCategory: dataCategory["data"],
      },
      revalidate: 1,
    };
  }
}
