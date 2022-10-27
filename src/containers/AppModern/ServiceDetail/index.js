import ResetCSS from "common/assets/css/style";
import Box from "common/components/Box";
import Button from "common/components/Button";
import Modal from "common/components/Modal";
import Link from "next/link";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import Icon from "react-icons-kit";
import { ic_close_outline } from "react-icons-kit/md/ic_close_outline";
import { ic_date_range_outline } from "react-icons-kit/md/ic_date_range_outline";
import { ic_groups_outline } from "react-icons-kit/md/ic_groups_outline";
import { ic_star_rate_outline } from "react-icons-kit/md/ic_star_rate_outline";
import { ic_work_outline } from "react-icons-kit/md/ic_work_outline";
import { ic_zoom_out_map } from "react-icons-kit/md/ic_zoom_out_map";
import Fade from "react-reveal/Fade";
import GlobalStyle from "../appModern.style";
import { NewDate } from "../InfoServices/ServicesList";
import TitlePath from "./TitlePath";
import WrapperServices, {
  ContainerServicesDT,
  GridServicesDT,
} from "./WrapperService";

const ServiceDetail = (props) => {
  const { character, related, service_id } = props;
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
                  {/* Start Box Left */}
                  <Box className="boxLeft">
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
                    <Box className="container-image">
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
                      <Box>
                        <h2 className="titleDes">About This Service</h2>
                        <Box className="description">
                          {ReactHtmlParser(character.description)}
                        </Box>
                      </Box>
                    </Box>
                    {/* End Description */}
                  </Box>
                  {/* End Box */}
                  {/* ********************************************** */}
                  {/* Start Box Right */}
                  <Box className="boxRight">
                    <Box className="ItemCard">
                      <Box>
                        <h2 className="sumReviews">Printcart Support</h2>
                        <Box className="containerReviews">
                          {/* Service Added */}
                          <Box className="infoReview">
                            <Icon icon={ic_date_range_outline} />
                            <Box className="contentReview">
                              <h4>Service Added</h4>
                              <span>{NewDate(character.createdAt)}</span>
                            </Box>
                          </Box>
                          {/*number of team */}
                          <Box className="infoReview">
                            <Icon icon={ic_groups_outline} />
                            <Box className="contentReview">
                              <h4> Number Of Team</h4>
                              <span>10 Team Member</span>
                            </Box>
                          </Box>
                          {/* Processed tasks */}
                          <Box className="infoReview">
                            <Icon icon={ic_star_rate_outline} />
                            <Box className="contentReview">
                              <h4>Processed Tasks</h4>
                              <span>284 Tasks</span>
                            </Box>
                          </Box>
                          {/* Processing tasks */}
                          <Box className="infoReview">
                            <Icon icon={ic_work_outline} />
                            <Box className="contentReview">
                              <h4>Processing Tasks</h4>
                              <span>220 Tasks</span>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      {/* Button Request */}
                      <Button
                        style={{ borderRadius: "5px" }}
                        className="buttonRequest"
                        title="Request Support"
                      />
                    </Box>
                  </Box>
                  {/* End Box */}
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
