import ResetCSS from "common/assets/css/style";
import { theme } from "common/theme/appModern";
import Navbar from "containers/AppModern/Navbar";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
// import PricingPolicy from 'containers/AppModern/PricingPolicy';
// import TeamPortfolio from 'containers/AppModern/TeamPortfoilo';
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Footer from "containers/AppModern/Footer";
import React, { useState } from "react";
import axios from "axios";
import InfoServices from "containers/AppModern/InfoServices";

const ServicesCategory = (props) => {
  const { total, listService, servicesCategory, characters, choice } = props;
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
  }, []);
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
            serviceList={listService}
            total={total}
            dataNew={dataCat}
            characters={characters}
            choice={choice}
          />
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};
export default ServicesCategory;

export async function getStaticProps({ params }) {
  const alias = params.category;
  const filProjectCat = `&fields[0]=project_cat`;
  const filAgency = `&filters[$and][0][service_agency][$contains]=568427`;

  const results = await fetch(
    `${process.env.STRAPI_API_URL}project-categories?sort=updatedAt:DESC&filters[$and][0][alias][$eq]=${alias}`
  ).then((res) => res.json());
  if (results.data.length > 0) {
    const name_cat = results.data[0].attributes.name;
    const listService = await fetch(
      `${process.env.STRAPI_2_API_URL}services?populate=image&populate=users_permissions_user.avatar&filters[project_cat][$containsi]=${name_cat}&filters[$and][0][service_agency][$contains]=568427&sort=createdAt:DESC`
    ).then((res) => res.json());
    const servicesCategory = await fetch(
      `${process.env.STRAPI_2_API_URL}services?pagination[pageSize]=100` +
        filProjectCat +
        filAgency
    ).then((res) => res.json());

    return {
      props: {
        characters: results.data[0],
        listService: listService.data,
        total: listService["meta"],
        servicesCategory: servicesCategory["data"],
        choice: alias,
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
    `${process.env.STRAPI_API_URL}project-categories?filters[parent][alias][$null]=true&pagination[limit]=1`
  ).then((res) => res.json());
  if (characters.data) {
    return {
      paths: characters.data.map((_item) => ({
        params: {
          category: _item.attributes.alias,
        },
      })),
      fallback: "blocking",
    };
  }
}
