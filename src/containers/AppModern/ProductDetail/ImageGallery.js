import Box from "common/components/Box";
import Image from "common/components/Image";
import { useRef } from "react";
import styled from "styled-components";

const WrappImage = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 60%;
  max-width: 60%;
`;
const Container = styled(Box)`
  align-items: flex-start;
  display: flex;
  position: relative;
`;
const ThumbnailImage = styled(Box)`
  display: flex;
  row-gap: 1rem;
  flex-direction: column;
  top: 5rem;
  position: sticky;
`;
const ButtonChange = styled.button`
  border-width: 1px;
  width: 3rem;
  height: 3.5rem;
  position: relative;
  cursor: pointer;
`;
const ThumbnailItems = styled(Image)`
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
const MainImage = styled(Box)`
  margin-left: 2rem;
  margin-right: 2rem;
  max-width: calc(432px + 2 * 1rem);
  position: relative;
  width: 100%;
  min-height: 1px;
  row-gap: 1rem;
  flex-direction: column;
  flex: 1 1 0%;
  display: flex;
`;
const WrapBigImage = styled(Box)`
  position: relative;
  padding-top: 100%;
  background-color: #f7f7f7;
  overflow: hidden;
`;
const ImageBig = styled(Image)`
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
    <WrappImage>
      <Container>
        <ThumbnailImage>
          {product?.product?.images?.map((image, index) => (
            <ButtonChange key={index} onClick={() => handleScrollTo(image.id)}>
              <span>
                <ThumbnailItems src={image.url} alt="Thumbnail" />
              </span>
            </ButtonChange>
          ))}
        </ThumbnailImage>
        <MainImage>
          <WrapBigImage
          // ref={(image) => imageRefs.current.push(image)}
          // key={index}
          // id={image.id}
          >
            <span>
              <ImageBig
                src={product?.product?.images[0]?.url}
                alt="Image Product"
              />
            </span>
          </WrapBigImage>
        </MainImage>
      </Container>
    </WrappImage>
  );
};
export default ImageGallery;
