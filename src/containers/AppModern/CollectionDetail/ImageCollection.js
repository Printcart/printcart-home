import Box from "common/components/Box";
import React from "react";
import styled from "styled-components";
const BoxCus = styled(Box)`
  position: relative;
  box-sizing: border-box;
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  max-width: 58%;
  with: 100%;
`;
const ImageCollection = (props) => {
  const { image } = props;
  return (
    <Box className="contenLeft">
      <Box className="wrappImage">
        <Box className="wrapperChild">
          <button className="btnchange">
            <span className="spanImage">
              <img className="imageProduct" src={image} alt="Thumbnail" />
            </span>
          </button>
        </Box>
        <Box className="wrappbig">
          <Box className="contImage">
            <span className="spanImage">
              <img className="imageProductBig" src={image} alt="Thumbnail" />
            </span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ImageCollection;
