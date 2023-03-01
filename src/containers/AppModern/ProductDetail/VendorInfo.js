import Box from "common/components/Box";
import React from "react";
import Icon from "react-icons-kit";
import { ic_star_rate } from "react-icons-kit/md/ic_star_rate";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 0px;
  grid-gap: 5px;
`;

const VendorInfo = () => {
  return (
    <Box className="wrapper-infoVendor">
      <Box className="wrapper-infoVendor2">
        <Box className="headerVendor">
          <h4 className="title">All Print Providers</h4>
        </Box>
        <Box className="wrapper-vendor">
          <Box className="info-vendor">
            <Grid className="info-head">
              <Box className="info-head-left">
                <h5 className="info-head-left-title">Vendor Name</h5>
                <Box className="iflt-star">
                  <h6 className="iflt-star-title">
                    <span className="star-icon">
                      <Icon icon={ic_star_rate} size={20} />
                    </span>
                    7.5
                  </h6>
                  <Box className="underlined" />
                </Box>
              </Box>
              <Box className="info-head-right">
                <Box className="btn-more-details">
                  <button className="cont-btn">More details</button>
                </Box>
                <Box className="cont-start-design">
                  <a href="/" className="href-btn-design">
                    <Box className="con-btn-design">
                      <button className="btn-start-design">
                        {" "}
                        Start Design
                      </button>
                    </Box>
                  </a>
                </Box>
              </Box>
            </Grid>
            <Box className="info-detail">
              <Box className="wrapper-location">
                <Box className="catalog-title">Location</Box>
                <Box className="location-detail">
                  <p className="country-name">Name country</p>
                  <Box className="country-flag">
                    <Box className="flag-icon">Flag</Box>
                  </Box>
                </Box>
              </Box>
              <Box className="wrapper-price">
                <Box className="catalog-title">Price</Box>
                <Box className="price-detail">
                  <p>From USD 15.57</p>
                  <Box className="cont-price-detail">
                    <p className="desc-price">
                      From USD 11.99 with Printify Premium
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box className="wrapper-shipping">
                <Box className="catalog-title">Shipping</Box>
                <Box className="shipping-detail">
                  <p>From USD 6.09</p>
                </Box>
              </Box>
              <Box className="wrapper-production-time">
                <Box className="catalog-title">Avg. production time</Box>
                <p className="production-time-detail">2.9 business days</p>
              </Box>
              <Box className="wrapper-print-area">
                <Box className="catalog-title">Print areas * qty</Box>
                <p className="print-area-detail">Front side, back side</p>
              </Box>
              <Box className="wrapper-size">
                <Box className="catalog-title">Size * qty</Box>
                <p className="size-detail">A-z</p>
              </Box>
              <Box className="wrapper-color">
                <Box className="catalog-title">Color * qty</Box>
                <p className="color-detail">A-z</p>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default VendorInfo;
