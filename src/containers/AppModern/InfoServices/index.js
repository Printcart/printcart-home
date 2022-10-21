import ResetCSS from "common/assets/css/style";
import { filterServices } from "common/data/AppModern";
import { theme } from "common/theme/appModern";
import Fade from "react-reveal/Fade";
import { ThemeProvider } from "styled-components";
import { SectionHeader } from "../appModern.style";
import CheckBoxServices from "./CheckBox";
import SectionWrapperServices, { ContainerServices } from "./GridServices";
import ServicesList from "./ServicesList";

const InfoServices = (props) => {
  const { serviceList, total } = props;

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
                {filterServices.map((item, index) => (
                  <CheckBoxServices
                    p={4}
                    key={index}
                    labelText={item.name}
                    background={item.color}
                  />
                ))}
              </div>
            </Fade>
          </ContainerServices>
          <ServicesList serviceList={serviceList} total={total} />
        </SectionWrapperServices>
      </>
    </ThemeProvider>
  );
};
export default InfoServices;
