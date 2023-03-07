import Box from "common/components/Box";
import React, { useRef } from "react";

const ImageGallery = (props) => {
  const { product } = props;
  const imageRefs = useRef(null);
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };
  return (
    <Box className="contenLeft">
      <Box className="wrappImage">
        <Box className="wrapperChild">
          {product?.product?.images?.map((image, index) => (
            <button
              key={index}
              className="btnchange"
              onClick={() => handleScrollTo(image.id)}
            >
              <span className="spanImage">
                <img className="imageProduct" src={image.url} alt="Thumbnail" />
              </span>
            </button>
          ))}
        </Box>
        <Box className="wrappbig">
          {product?.product?.images?.map((image, index) => (
            <Box
              ref={(image) => imageRefs.current.push(image)}
              key={index}
              className="contImage"
              id={image.id}
            >
              <span className="spanImage">
                <img
                  className="imageProductBig"
                  src={image.url}
                  alt="Thumbnail"
                />
              </span>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default ImageGallery;
