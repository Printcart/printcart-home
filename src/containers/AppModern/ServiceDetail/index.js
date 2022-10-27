import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Button from "common/components/Button";
import Link from "next/link";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import GlobalStyle from "../appModern.style";
import TitlePath from "./TitlePath";
import WrapperServices, {
  ContainerServicesDT,
  GridServicesDT,
} from "./WrapperService";
import { ic_zoom_out_map } from "react-icons-kit/md/ic_zoom_out_map";
import { ic_close_outline } from "react-icons-kit/md/ic_close_outline";
import Icon from "react-icons-kit";
import Modal from "common/components/Modal";

const ServiceDetail = (props) => {
  const { character, related } = props;
  const [iSrc, setSrc] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setSrc(character.image.data[0].attributes.url);
  };

  const handleClose = () => {
    setOpen(false);
    setSrc("");
  };
  const data = {
    name: "service",
    alias: "services",
  };

  return (
    <>
      <ResetCSS />
      <GlobalStyle />
      <WrapperServices>
        <Box id="wrapper-modal">
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
                    {/* Image */}
                    <Box>
                      <Box className="boxImage">
                        <button
                          className="btnFull"
                          disableTouchRipple
                          onClick={() => {
                            handleOpen(character);
                          }}
                        >
                          <Box>
                            <Icon icon={ic_zoom_out_map} /> Full Screen
                          </Box>
                        </button>
                        <img
                          width="100%"
                          height={450}
                          src={`${character.image.data[0].attributes.url}`}
                          alt="Logo service"
                          onClick={() => {
                            handleOpen(character);
                          }}
                        />
                      </Box>
                      <Modal show={open} onClose={handleClose} Image={iSrc}>
                        <Box className="boxModal">
                          <button className="boxClose" onClick={handleClose}>
                            <Icon icon={ic_close_outline} />
                          </button>
                        </Box>
                      </Modal>
                    </Box>
                    {/* End iMAGE */}
                    {/* Description */}
                    <Box className="ItemCard">
                      <Box></Box>
                    </Box>
                  </Box>
                </GridServicesDT>
              </ContainerServicesDT>
            </Box>
          </Box>
        </Box>
      </WrapperServices>
    </>
  );
};
export default ServiceDetail;
