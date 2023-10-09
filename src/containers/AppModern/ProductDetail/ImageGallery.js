import Box from "common/components/Box";
import Image from "common/components/Image";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const WrappImage = styled(Box)`
  position: relative;
  max-width: fit-content;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 60%;
  max-width: 60%;
`;
const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
const ThumbnailImage = styled(Box)`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
`;
const ThumbnailCarousel = styled(Box)`
  height: 424px;
  position: relative;
  display: block;
  min-height: 54px;
`;

const ListItems = styled("div")`
  flex-direction: column;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  overscroll-behavior-y: contain;
  height: 100%;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  scroll-behavior: smooth;
  align-items: flex-start;
`;
const ThumbnailItem = styled(Box)`
  flex: 0 0 20%;
  height: 20%;
  min-width: 0;
  width: calc(64px + 8px);
  padding: -4px 0;
  display: block;
  overflow: hidden;
  scroll-snap-align: start;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
`;
const ThumbnailItemInner = styled(Box)`
  height: 100%;
  padding-top: 0;
  border-radius: 3px;
  background-color: #f7f7f7;
  cursor: pointer;
  position: relative;
  display: block;
  overflow: hidden;
  &.active {
    border: 3px solid #424dc6;
  }
`;

const ButtonChange = styled.button`
  border-width: 1px;
  width: 3rem;
  height: 3.5rem;
  position: relative;
  cursor: pointer;
`;

const ButtonChangeArrow = styled.button`
  &:hover {
    background-color: #f1efef;
    border-color: #c4c7c8;
    transition: 0.7s;
    border-radius: 20%;
  }
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  position: relative;
  cursor: pointer;
  margin: auto;
`;
const ThumbnailImages = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  width: 100%;
`;
const ImageWrap = styled(Box)`
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
  display: none;
  padding-top: 100%;
  overflow: hidden;
  &.active {
    display: block;
  }
`;
const ImageBig = styled(Image)`
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  background-color: #f7f7f7;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const NavbarImage = (props) => {
  const { product, setIndexImage, indexImage } = props;
  return (
    <>
      {product.map(
        (item) =>
          item?.images?.map((image, index) => (
            <React.Fragment key={index}>
              <ThumbnailItem>
                <ThumbnailItemInner
                  className={`item ${index === indexImage ? "active" : ""}`}
                >
                  <picture onClick={() => setIndexImage(index)}>
                    <ThumbnailImages src={image?.url || ""} alt="Thumbnail" />
                  </picture>
                </ThumbnailItemInner>
              </ThumbnailItem>
            </React.Fragment>
          )) || ""
      )}
    </>
  );
};

const MainImage = (props) => {
  const { product, indexImage } = props;
  return (
    <>
      <ImageBig src={product[0]?.thumbnail} alt="Thumbnail" />
      {product.map(
        (item) =>
          item?.images?.map((image, index) => (
            <React.Fragment key={index}>
              <WrapBigImage
                className={`item ${index === indexImage ? "active" : ""}`}
              >
                <ImageBig src={image?.url || ""} alt="Image Product" />
              </WrapBigImage>
            </React.Fragment>
          )) || ""
      )}
    </>
  );
};

const ImageGallery = (props) => {
  const { product } = props;
  const [indexImage, setIndexImage] = useState(0);

  const refListItems = React.useRef(null);

  //Make scroll to Top in thumbnail
  const scrollUp = () => {
    if (refListItems.current) {
      const listHeight = refListItems.current.offsetHeight;
      const remainingScroll = refListItems.current.scrollTop;

      if (remainingScroll === 0) {
        // Scroll to bottom when clicking at the minimum size
        const scrollHeight = refListItems.current.scrollHeight;
        refListItems.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      } else {
        animateScroll(refListItems.current, remainingScroll - listHeight);
      }
    }
  };

  //Make scroll to Down in thumbnail
  const scrollDown = () => {
    if (refListItems.current) {
      const listHeight = refListItems.current.offsetHeight;
      const remainingScroll =
        refListItems.current.scrollHeight -
        refListItems.current.scrollTop -
        listHeight;

      if (remainingScroll === 0) {
        // Scroll to top when clicking at the maximum size
        refListItems.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        animateScroll(
          refListItems.current,
          refListItems.current.scrollTop + listHeight
        );
      }
    }
  };

  //Create smooth slider scroll animation
  const animateScroll = (element, targetScrollPosition) => {
    const startScrollPosition = element.scrollTop;
    const distance = targetScrollPosition - startScrollPosition;
    const duration = 10;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeOutCubic(progress);
      const scrollTop = startScrollPosition + distance * easing;

      element.scrollTop = scrollTop;

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  //Create easing function
  const easeOutCubic = (progress) => {
    return 1 - Math.pow(1 - progress, 3);
  };

  return (
    <>
      <WrappImage>
        <Container>
          <ThumbnailImage>
            <ButtonChangeArrow onClick={scrollUp}>
              <IoIosArrowUp size={"1.2rem"} />
            </ButtonChangeArrow>
            <ThumbnailCarousel>
              <ListItems ref={refListItems}>
                <NavbarImage
                  product={product}
                  setIndexImage={setIndexImage}
                  indexImage={indexImage}
                />
              </ListItems>
            </ThumbnailCarousel>
            <ButtonChangeArrow onClick={scrollDown}>
              <IoIosArrowDown size={"1.2rem"} />
            </ButtonChangeArrow>
          </ThumbnailImage>
          <ImageWrap>
            <MainImage product={product} indexImage={indexImage} />
          </ImageWrap>
        </Container>
      </WrappImage>
    </>
  );
};
export default ImageGallery;