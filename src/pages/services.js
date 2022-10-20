import React from "react";
import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Banner from "containers/AppModern/Banner";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import InfoServices from "../containers/AppModern/InfoServices";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";

const Services = (props) => {
  const { serviceList, total } = props;
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Printcart | Services</title>
        </Head>
        {/* end of head */}

        <ResetCSS />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <Banner />
          <InfoServices serviceList={serviceList} total={total} />
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default Services;
export async function getStaticProps() {
  const time = `&time=${Date.now()}`;
  const limit = `&pagination[pageSize]=100`;

  const serviceList = await fetch(
    `${process.env.STRAPI_2_API_URL}services?populate=image` + limit + time
  ).then((res) => res.json());

  if (serviceList.data.length > 0) {
    return {
      props: {
        serviceList: serviceList["data"],
        total: serviceList["meta"],
      },
    };
  }

  return {
    notFound: true,
  };
}
