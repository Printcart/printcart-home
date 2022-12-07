import Box from "common/components/Box";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

const ServiceIntro = (props) => {
  const { character } = props;
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
  return (
    <Box className="boxLeft">
      <h1 className="title">{character.title}</h1>
      <Box className="boxInfo">
        <img
          alt="Avatar"
          src={
            character?.users_permissions_user?.data?.attributes?.avatar?.data
              ?.attributes?.url ?? "/avatar-default.png"
          }
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50px",
          }}
        />
        <p>
          created by{" "}
          <Link prefetch={false} href={character.url ?? "/"}>
            <a>
              {character?.users_permissions_user?.data?.attributes?.name ??
                "Printcart"}
            </a>
          </Link>
          , a part of Corporate Printcart
        </p>
      </Box>
      {/* Image */}
      <Box className="container-image">
        <Box className="boxImage">
          {/* <button
            className="btnFull"
            onClick={() => {
              handleOpen(character);
            }}
          >
            <Box>
              <Icon icon={ic_zoom_out_map} /> Full Screen
            </Box>
          </button> */}
          <img
            width="100%"
            height={450}
            src={
              character.image.data?.length > 0
                ? `${character.image.data[0].attributes.url}`
                : ""
            }
            alt="Logo service"
            onClick={() => {
              handleOpen(character);
            }}
          />
        </Box>
      </Box>
      {/* End iMAGE */}
      {/* Description */}
      <Box className="ItemCard">
        <Box>
          <h2 className="titleDes">About This Service</h2>
          <Box className="description">
            <ReactMarkdown>{character.description}</ReactMarkdown>
          </Box>
        </Box>
      </Box>
      {/* End Description */}
    </Box>
  );
};
export default ServiceIntro;
