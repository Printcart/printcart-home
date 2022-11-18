import ResetCSS from "common/assets/css/style";
import Pagination from "common/components/Pagination";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
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
  const { serviceList, total, servicesCategory } = props;

  const uniqueValue = [];
  const unique = servicesCategory.filter((element) => {
    const isDuplicate = uniqueValue.includes(element.value);
    if (!isDuplicate) {
      uniqueValue.push(element.value);
      return true;
    }
    return false;
  });
  console.log(unique);
  // console.log(servicesCategory);
  // const array = [
  //   { id: 1, name: "1john" },
  //   { id: 1, name: "jossshn" },
  //   { id: 1, name: "john" },
  //   { id: 2, name: "john" },
  //   { id: 3, name: "josshn" },
  //   { id: 2, name: "john" },
  //   { id: 4, name: "john" },
  //   { id: 5, name: "john" },
  //   { id: 3, name: "john" },
  // ];
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
              <div className="">
                <span>All category </span>
                {servicesCategory.map((items, index) => (
                  <React.Fragment key={index}>
                    {items.attributes.project_cat.map((item, index) => (
                      <CheckBoxServices
                        p={4}
                        key={index}
                        labelText={item.label}
                      />
                    ))}
                  </React.Fragment>
                ))}
              </div>
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
