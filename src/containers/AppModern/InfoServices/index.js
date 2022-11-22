import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Pagination from "common/components/Pagination";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
import Link from "next/link";
import { useRouter } from "next/router";
import { element } from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "styled-components";
import { SectionHeader } from "../appModern.style";
import CheckBoxServices from "./CheckBox";
import SectionWrapperServices, {
  ContainerServices,
  GridServices,
} from "./GridServices";
import ServicesList from "./ServicesList";

const InfoServices = (props) => {
  const { serviceList, total, servicesCategory, dataNew } = props;
  const router = useRouter();
  const query = router.query;

  const page = total.pagination.total / 40;
  let start = -1;
  let end = 40;
  if (query.page) {
    start = (query.page - 1) * end - 1;
    end = query.page * end;
  }

  return (
    <ThemeProvider theme={theme}>
      <>
        <ResetCSS />
        <SectionWrapperServices>
          <SectionHeader>
            <Fade up>
              {/* <Heading as="h1" content="BPO Services Marketplace" /> */}
              <h1
                style={{
                  color: "#5c5c5c",
                  fontSize: "36px",
                  fontWeight: "500",
                  lineHeight: "36px",
                  textAlign: "center",
                }}
                className="titleSlogan"
              >
                BPO Services Marketplace
              </h1>
              <p
                style={{
                  color: "#5c5c5c",
                  fontSize: "18px",
                  lineHeight: "24px",
                  textAlign: "center",
                  margin: "20px 0 50px",
                }}
              >
                For trusted agency and freelancer
              </p>
            </Fade>
          </SectionHeader>
          <ContainerServices>
            <Fade up>
              <Box className="containerServices">
                <Link href={`/services`}>
                  <a className="btncategory">All</a>
                </Link>
                {servicesCategory.length > 0 && <Box className="space" />}
                {dataNew.map((items, index) => (
                  <Link
                    key={index}
                    href={`/services/${items.attributes.alias}`}
                  >
                    <a className="btncategory">{items?.attributes.name}</a>
                  </Link>
                ))}
              </Box>
            </Fade>
          </ContainerServices>
          <GridServices>
            {serviceList.map(
              (item, index) =>
                index > start &&
                index < end && (
                  <ServicesList key={index} serviceList={item} total={total} />
                )
            )}
            <Pagination page={page} />
          </GridServices>
        </SectionWrapperServices>
      </>
    </ThemeProvider>
  );
};
export default InfoServices;
