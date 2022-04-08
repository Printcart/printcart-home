import React from "react";
import Fade from "react-reveal/Fade";
import { Icon } from "react-icons-kit";
import { playCircle } from "react-icons-kit/fa/playCircle";
import { openModal, closeModal } from "@redq/reuse-modal";
import Text from "common/components/Text";
import Image from "common/components/Image";
import NextImage from "common/components/NextImage";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Rating from "common/components/Rating";
import Container from "common/components/UI/Container";
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from "./banner.style";

import { client } from "common/data/AppModern";

import bannerImg from "common/assets/image/appModern/dashboard-printcart.png";
import videoBanner1 from "common/assets/image/appModern/printcart-video-1.png";
import videoBanner2 from "common/assets/image/appModern/printcart-video-2.png";
import circleBorder from "common/assets/image/appModern/shape.svg";
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const ModalContent = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/-IQCCE_JJsA"
      frameBorder="0"
    />
  </VideoWrapper>
);
const ModalContent2 = () => (
  <VideoWrapper>
    <iframe
      title="Video"
      src="https://www.youtube.com/embed/Pm3tVMvqvIU"
      frameBorder="0"
    />
  </VideoWrapper>
);
const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  const handleVideoModal2 = () => {
    openModal({
      config: {
        className: "video-modal",
        disableDragging: true,
        default: {
          width: "auto",
          height: "auto",
          x: 0,
          y: 0,
        },
      },
      component: ModalContent2,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading as="h1" content="Start receiving custom printing order" />
          </Fade>
          <Fade up delay={200}>
            <Text content="Printcart includes modules that will help you to both promote your print business and sell your design and print services online." />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <a href="https://dashboard.printcart.com/signup?get-started=true" target="_blank" rel="nofollow">
                <Button className="primary" title="Start Now" />
              </a>
              <a href="https://dev01.netbaseteam.com/designtool/" target="_blank" rel="nofollow">
              <Button
                className="text"
                variant="textButton"
                // icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Design Tool Demo"
              />
              </a>
            </ButtonGroup>
          </Fade>
          <VideoGroup>
            <NextImage
              src={videoBanner1}
              onClick={handleVideoModal}
              alt="Microsoft"
            />
            <NextImage
              src={videoBanner2}
              onClick={handleVideoModal2}
              alt="Microsoft"
            />
          </VideoGroup>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <Text content="Technology Platform:" />
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image?.src}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder?.src}
        alt="Bottom Circle"
      />
    </BannerWrapper>
  );
};

export default Banner;
