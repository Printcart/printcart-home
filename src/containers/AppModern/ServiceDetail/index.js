import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import GlobalStyle, { ContentWrapper } from "../appModern.style";
import ServicesList from "../InfoServices/ServicesList";
import Reviews from "../Review";
import UserObject from "../UserObject";
import ServiceIntro from "./ServiceIntro";
import SupportDetail from "./SupportDetail";
import TitlePath from "./TitlePath";
import WrapperServices, {
  ContainerServicesDT,
  GridServicesDT,
  GridServicesRelated,
} from "./WrapperService";

const ServiceDetail = (props) => {
  const { character, related, service_id, fetchAlias } = props;
  const title = character.name ?? character.title;
  const data = {
    name: "service",
    alias: "services",
  };

  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePath character={title} data={data} />
        <Box className="banner" />
        <Container>
          <Box className="contentMain">
            <ContainerServicesDT>
              <GridServicesDT>
                {/* Start Box Left */}
                <ServiceIntro character={character} />
                {/* Start Box Right */}
                <SupportDetail character={character} fetchAlias={fetchAlias} />
                <UserObject />
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
        </Container>
        <Reviews />
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ServiceDetail;
