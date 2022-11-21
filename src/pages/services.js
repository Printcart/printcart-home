import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Banner from "containers/AppModern/Banner";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import InfoServices from "../containers/AppModern/InfoServices";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import React from "react";

const Services = (props) => {
  const { serviceList, total, servicesCategory } = props;

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
            servicesCategory={servicesCategory}
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
  const limit = `&pagination[pageSize]=100`;
  const filProjectCat = `&fields[0]=project_cat`;
  const serAgency = `&filters[$and][0][service_agency][$contains]=568427`;
  console.log(time);

  const serviceList = await fetch(
    `${process.env.STRAPI_2_API_URL}services?populate=image` + limit + time
  ).then((res) => res.json());
  const servicesCategory = await fetch(
    `${process.env.STRAPI_2_API_URL}services?pagination[pageSize]=100` +
      filProjectCat +
      serAgency
  ).then((res) => res.json());

  if (serviceList.data.length > 0) {
    return {
      props: {
        serviceList: serviceList["data"],
        total: serviceList["meta"],
        servicesCategory: servicesCategory["data"],
      },
    };
  }

  return {
    notFound: true,
  };
}
