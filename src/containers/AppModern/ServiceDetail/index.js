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
import Icon from "react-icons-kit";
import { Modal } from "@redq/reuse-modal";

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
                          <Icon icon={ic_zoom_out_map} />
                          Full Screen
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
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box>
                        <img className="image" src={iSrc} alt="Logo service" />
                      </Box>
                    </Modal>
                  </Box>
                  {/* End iMAGE */}
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
