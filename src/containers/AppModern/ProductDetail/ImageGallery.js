import Box from "common/components/Box";
import Image from "common/components/Image";
import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useMediaQuery } from "react-responsive";
const WrappImage = styled(Box)`
  position: relative;
  max-width: fit-content;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 60%;
  max-width: 60%;
  @media (max-width: 768px) {
    flex: 1 0 100%;
    max-width: 100%;
  }
`;
const Container = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: stretch;
  }
`;
const ThumbnailImage = styled(Box)`
  position: relative;
  box-sizing: border-box;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
  @media (max-width: 768px) {
  }
`;
const ThumbnailCarousel = styled(Box)`
  height: 424px;
  position: relative;
  display: block;
  min-height: 54px;

  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    diplay: flex;
    scroll-behavior: smooth;
  }
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

  @media (max-width: 768px) {
    flex-direction: row;
    overflow-x: scroll;
  }
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
  @media (max-width: 768px) {
    height: 100%;
    flex: 0 0 calc(100% / 3);
  }
  @media (max-width: 600px) {
    height: 100%;
    flex: 0 0 50%;
  }
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
  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ButtonChange = styled.button`
  border-width: 1px;
  width: 3rem;
  height: 3.5rem;
  position: relative;
  cursor: pointer;
`;

const ButtonChangeArrowUp = styled.button`
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
  @media (max-width: 768px) {
    position: absolute;
    transform: translateY(-50%) rotate(-90deg);
    border-radius: 20%;
    top: 50%;
    left: 0;
    z-index: 1;
    background-color: #fff;
  }
`;

const ButtonChangeArrowDown = styled.button`
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
  @media (max-width: 768px) {
    position: absolute;
    transform: translateY(-50%) rotate(-90deg);
    border-radius: 20%;
    top: 50%;
    right: 0;
    z-index: 1;
    background-color: #fff;
  }
`;
const ThumbnailImages = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  width: 100%;
  @media (max-width: 768px) {
    height: auto;
  }
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
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const WrapBigImage = styled(Box)`
  position: relative;
  display: none;
  padding-top: 100%;
  overflow: hidden;
  &.active {
    display: block;
  }
  @media (max-width: 768px) {
    padding-top: 0%;
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
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarImage = (props) => {
  const { images, setIndexImage, indexImage, refListItems } = props;

  return (
    <ThumbnailCarousel>
      <ListItems ref={refListItems}>
        {images.map((image, index) => (
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
        ))}
      </ListItems>
    </ThumbnailCarousel>
  );
};

const MainImage = (props) => {
  const { images, indexImage } = props;

  return (
    <>
      {images.map((image, index) => (
        <React.Fragment key={index}>
          <WrapBigImage
            className={`item ${index === indexImage ? "active" : ""}`}
          >
            <ImageBig src={image?.url || ""} alt="Image Product" />
          </WrapBigImage>
        </React.Fragment>
      ))}
    </>
  );
};

const ImageGallery = (props) => {
  const { product } = props;

  const refListItems = React.useRef(null);

  const [indexImage, setIndexImage] = useState(0);

  const images = product[0]?.images || [];

  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const showArrows =
    product && product.length > 0 && images?.length > 5 ? true : isMobile && product && product.length > 0 && images?.length > 2;

  const easeOutCubic = (progress) => {
    return 1 - Math.pow(1 - progress, 3);
  };

  const scrollUp = () => {
    if (refListItems?.current) {
      const listHeight = refListItems?.current.offsetHeight;
      const remainingScroll = refListItems?.current.scrollTop;

      if (remainingScroll === 0) {
        const scrollHeight = refListItems?.current.scrollHeight;
        refListItems?.current.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      } else {
        animateScroll(refListItems?.current, remainingScroll - listHeight);
      }
    }
  };

  const scrollDown = () => {
    if (refListItems?.current) {
      const listHeight = refListItems?.current.offsetHeight;
      const remainingScroll =
        refListItems?.current.scrollHeight -
        refListItems?.current.scrollTop -
        listHeight;

      if (remainingScroll === 0) {
        refListItems?.current.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        animateScroll(
          refListItems?.current,
          refListItems?.current.scrollTop + listHeight
        );
      }
    }
  };

  const scrollLeft = () => {
    if (refListItems?.current) {
      if (refListItems.current.scrollLeft === 0) {
        const scrollWidth = refListItems?.current.scrollWidth;
        refListItems?.current.scrollTo({
          left: scrollWidth,
          behavior: "smooth",
        });
      } else {
        animateScrollMobile(
          refListItems.current,
          refListItems.current.scrollLeft - refListItems.current.offsetWidth
        );
      }
    }
  };

  const scrollRight = () => {
    if (refListItems?.current) {
      const listWidth = refListItems?.current.offsetWidth;
      const remainingScroll = refListItems?.current.scrollWidth - listWidth;
      if (refListItems.current.scrollLeft === remainingScroll) {
        refListItems?.current.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        animateScrollMobile(
          refListItems.current,
          refListItems.current.scrollLeft + refListItems.current.offsetWidth
        );
      }
    }
  };

  const animateScroll = (element, targetScrollPosition) => {
    const startScrollPosition = element?.scrollTop || 0;
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

  const animateScrollMobile = (element, targetScrollPosition) => {
    const startScrollPosition = element?.scrollLeft || 0;
    const distance = targetScrollPosition - startScrollPosition;
    const duration = 10;
    const startTime = performance.now();

    const scrollStep = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easing = easeOutCubic(progress);
      const scrollLeft = startScrollPosition + distance * easing;

      element.scrollLeft = scrollLeft;

      if (elapsed < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };
  return (
    <>
      <WrappImage>
        <Container>
          <ThumbnailImage>
            {showArrows &&
              (isMobile ? (
                <ButtonChangeArrowUp onClick={scrollLeft}>
                  <IoIosArrowUp size={"1.2rem"} />
                </ButtonChangeArrowUp>
              ) : (
                <ButtonChangeArrowUp onClick={scrollUp}>
                  <IoIosArrowUp size={"1.2rem"} />
                </ButtonChangeArrowUp>
              ))}
            <NavbarImage
              images={images}
              setIndexImage={setIndexImage}
              indexImage={indexImage}
              refListItems={refListItems}
            />
            {showArrows &&
              (isMobile ? (
                <ButtonChangeArrowDown onClick={scrollRight}>
                  <IoIosArrowDown size={"1.2rem"} />
                </ButtonChangeArrowDown>
              ) : (
                <ButtonChangeArrowDown onClick={scrollDown}>
                  <IoIosArrowDown size={"1.2rem"} />
                </ButtonChangeArrowDown>
              ))}
          </ThumbnailImage>
          <ImageWrap>
            <MainImage images={images} indexImage={indexImage} />
          </ImageWrap>
        </Container>
      </WrappImage>
    </>
  );
};
export default ImageGallery;
