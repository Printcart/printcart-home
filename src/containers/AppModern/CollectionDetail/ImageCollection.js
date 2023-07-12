import Box from "common/components/Box";
import Image from "common/components/Image";
import React from "react";
import styled from "styled-components";
const BoxOnleft = styled(Box)`
  display: flex;
  row-gap: 2rem;
  flex-direction: column;
  width: 100%;
`;
const WrapImage = styled(Box)`
  align-items: flex-start;
  display: flex;
  position: relative;
`;
const CollectionImage = styled(Image)`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const WrapBigImage = styled(Box)`
  margin-left: 4rem;
  margin-right: 4rem;
  max-width: calc(432px + 2 * 1rem);
  position: relative;
  width: 100%;
  min-height: 1px;
  row-gap: 1rem;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
`;
const BoxImage = styled(Box)`
  position: relative;
  padding-top: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
`;
const ImageCollection = (props) => {
  const { image } = props;
  return (
    <BoxOnleft>
      <WrapImage>
        <Box>
          <button className="btnchange">
            <span>
              <CollectionImage src={image} alt="Thumbnail" />
            </span>
          </button>
        </Box>
        <WrapBigImage>
          <BoxImage>
            <span>
              <CollectionImage src={image} alt="Product Image" />
            </span>
          </BoxImage>
        </WrapBigImage>
      </WrapImage>
    </BoxOnleft>
  );
};
export default ImageCollection;
