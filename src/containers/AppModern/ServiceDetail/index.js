import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import GlobalStyle from "../appModern.style";
import ServicesList from "../InfoServices/ServicesList";
import ServiceIntro from "./ServiceIntro";
import SupportDetail from "./SupportDetail";
import TitlePath from "./TitlePath";
import WrapperServices, {
  ContainerServicesDT,
  GridServicesDT,
  GridServicesRelated,
} from "./WrapperService";

const ServiceDetail = (props) => {
  const { character, related, service_id } = props;

  const data = {
    name: "service",
    alias: "services",
  };

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <WrapperServices>
        <TitlePath character={character} data={data} />
        <Box className="banner" />
        <Box className="contentMain">
          <Box className="container">
            <ContainerServicesDT>
              <GridServicesDT>
                {/* Start Box Left */}
                <ServiceIntro character={character} />
                {/* Start Box Right */}
                <SupportDetail character={character} />
              </GridServicesDT>
              {/* RELATED SERVICES */}
              {related.length > 0 && (
                <Box className="ItemCardRelated">
                  <Box>
                    <h2 className="titlerelated">Other Services</h2>
                    <GridServicesRelated>
                      {related.map(
                        (service, index) =>
                          index < 4 && (
                            <ServicesList
                              key={service.id}
                              serviceList={service}
                            />
                          )
                      )}
                    </GridServicesRelated>
                  </Box>
                </Box>
              )}
            </ContainerServicesDT>
          </Box>
        </Box>
      </WrapperServices>
    </>
  );
};
export default ServiceDetail;
