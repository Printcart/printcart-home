import Box from "common/components/Box";
import ListGrid from "common/components/ListGrid";
import React from "react";
import { Grid } from "swiper";
import { GridServices } from "../InfoServices/GridServices";
import { GridServicesDT } from "../ServiceDetail/WrapperService";
import ContainerReview, { ContainerChild, GridReviews } from "./review.style";

const logoReviews = [
  {
    path: "https://cmsmart.net/images/brand/Clutch.png",
    alt: "Clutch",
  },
  {
    path: "https://cmsmart.net/images/brand/GoodFirm.png",
    alt: "Good Firm",
  },
  {
    path: "https://cmsmart.net/images/brand/TrustPilot.png",
    alt: "TrustPilot",
  },
  {
    path: "https://cmsmart.net/images/brand/ReviewIo.png",
    alt: "ReviewIo",
  },
  {
    path: "https://cmsmart.net/images/brand/Facebook.png",
    alt: "Facebook",
  },
  {
    path: "https://cmsmart.net/images/brand/crowdreviews.png",
    alt: "crowdreviews",
  },
];
const Reviews = () => {
  return (
    <ContainerReview>
      <ContainerChild>
        <h2 className="title">WE ARE IN LOVE WITH CLIENT</h2>
        <p className="desc">
          Recently, we discovered how client loving working with us by their 5
          star recommedation
        </p>
        <GridReviews>
          {logoReviews.map((items, index) => (
            <Box key={index} >
              <img src={items.path} alt={items.alt} className="image" />
            </Box>
          ))}
        </GridReviews>
      </ContainerChild>
    </ContainerReview>
  );
};
export default Reviews;
