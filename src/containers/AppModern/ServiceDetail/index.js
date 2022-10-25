import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import GlobalStyle from "../appModern.style";
import TitlePath from "./TitlePath";
import WrapperServices, {
  ContainerServicesDT,
  GridServicesDT,
} from "./WrapperService";

const ServiceDetail = (props) => {
  const { character, related } = props;
  console.log(character);
  const data = {
    name: "service",
    alias: "services",
  };

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <WrapperServices>
        <Fade up>
          <TitlePath character={character} data={data} />
        </Fade>
        <Box className="banner" />
        <Box className="contentMain">
          <Box className="container">
            <ContainerServicesDT>
              <GridServicesDT>
                <Box>
                  <h1 className="title">{character.title}</h1>
                  <Box className="boxInfo">
                    <img
                      alt="Avatar"
                      src={character.avatar ?? "/avatar-default.png"}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50px",
                      }}
                    />
                    <p>
                      created by{" "}
                      <Link prefetch={false} href={character.url ?? "/"}>
                        <a>{character.name ?? "Printcart"}</a>
                      </Link>
                      , a part of Corporate Printcart
                    </p>
                  </Box>
                </Box>
              </GridServicesDT>
            </ContainerServicesDT>
          </Box>
        </Box>
      </WrapperServices>
    </>
  );
};
export default ServiceDetail;
