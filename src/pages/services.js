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
import React, { useState } from "react";
import axios from "axios";

const Services = (props) => {
  const { serviceList, total, servicesCategory } = props;
  const [dataCat, setDataCat] = useState([]);
  const uniqueValue = [];
  const mergearray = uniqueValue.concat(
    servicesCategory.map((items) =>
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
  const valueData = data.map((items) => items.value);
  const mergeValue = valueData.join("&filters[id]=");

  React.useEffect(() => {
    axios
      .get(
        `https://strapi4.cloodo.com/api/project-categories?pagination[pageSize]=100&filters[id]=${mergeValue}`
      )
      .then((res) => {
        const todoItems = res.data.data;
        setDataCat(todoItems);
      });
  }, data);

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
            servicesCategory={data}
            dataNew={dataCat}
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
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;

  const serviceList = await fetch(
    `${process.env.STRAPI_2_API_URL}services?populate=image` +
      limit +
      time +
      filAgency
  ).then((res) => res.json());
  const servicesCategory = await fetch(
    `${process.env.STRAPI_2_API_URL}services?pagination[pageSize]=100` +
      filProjectCat +
      filAgency
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
