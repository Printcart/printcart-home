import Box from "common/components/Box";
import Button from "common/components/Button";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import React from "react";
import styled from "styled-components";
import ExploreImage from "../../../common/assets/image/princart-blog.png";

const ExploreContainer = styled(Box)`
  justify-content: center;
  margin-bottom: 2.5rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: calc(-5rem);
  margin-right: calc(-5rem);
`;
const ContentBox = styled(Box)`
  padding-left: 5rem;
  padding-right: 5rem;
  position: relative;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
  flex-basis: 0;
  flex-grow: 1;
`;
const ExploreSection = styled.section`
  position: relative;
  display: flex;
  align-items: flex-end;
  @media only screen and (min-width: 960px) {
    min-height: 346px;
  }
  max-width: 1168px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3px;
`;
const ImageElement = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  background-color: #f7f7f7;
`;
const DescBox = styled(Box)`
  position: relative;
  @media only screen and (min-width: 960px) {
    padding: 2rem;
    width: 50%;
  }
  @media only screen and (min-width: 600px) {
    padding: 1.5rem;
    width: 60%;
  }
`;
const DescHeading = styled(Heading)`
  font-size: 1.5em;
  line-height: 2.5rem;
  color: #fff;
  @media only screen and (min-width: 600px) {
    width: 60%;
  }
`;
const ExploreButtonBox = styled(Box)`
  display: inline-block;
  @media only screen and (min-width: 960px) {
    margin-top: 1rem;
  }
`;
const ExploreButton = styled(Button)`
  padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
  height: 40px;
  color: #17262b;
  background-color: #fff;
  border-color: #c4c7c8;
  width: 100%;
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  text-align: center;
  border-radius: 3px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: 0.15s;
  vertical-align: top;
  line-height: 1.5rem;
  font-family: inherit;
  white-space: nowrap;
  outline: none;
  &:hover {
    color: #424dc6;
  }
`;

const ExploreProducts = () => {
  return (
    <Box>
      <ExploreContainer>
        <ContentBox>
          <ExploreSection>
            <ImageElement src={ExploreImage?.src} alt="Explore Image" />
            <DescBox>
              <Box>
                <DescHeading
                  content="Explore Printcart's best selling products"
                  fontWeight="700"
                />
              </Box>
              <ExploreButtonBox>
                <ExploreButton title="Explore Now" />
              </ExploreButtonBox>
            </DescBox>
          </ExploreSection>
        </ContentBox>
      </ExploreContainer>
    </Box>
  );
};

export default ExploreProducts;
