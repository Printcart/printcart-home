import React from "react";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Link from "next/link";
import Designtool from "../Designtool";
import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 50px 0px;
  grid-gap: 5px;
  align-items: center;
  padding: 0px 0px 16px;
  margin-left: 10px;
  margin-right: 10px;
`;
const BoxVendor = styled(Box)`
  display: block;
  border: 1px solid #e3e4e5;
  border-radius: 3px;
  background-color: #f7f7f7;
`;
const BoxVendorHeader = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 16px;
  position: relative;
  flex: 0 0 auto;
  width: auto;
  max-width: none;
  padding-left: 10px;
  padding-right: 10px;
`;
const HeadingVendor = styled(Heading)`
  display: inline;
  font-size: 1.75rem;
  text-transform: capitalize;
`;
const BoxIcon = styled(Box)`
  position: relative;
`;
const WrapIcon = styled(Box)`
  display: inline-flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 0 0.25rem 0.25rem;
  margin-left: 0.5rem;
  border-radius: 3px;
  background-color: #403568;
  color: #fff;
  cursor: pointer;
`;
const ContainerIcon = styled.span`
  display: flex;
  align-items: center;
  color: inherit;
  font-size: 0.875em;
  margin-right: 0.125rem;
  margin-bottom: 0.125rem;
`;
const BoxHeaderRight = styled(Box)`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
  min-height: 1px;
  flex-basis: 0;
  flex-grow: 1;
`;
const BoxButton = styled(Box)`
  margin-top: 16px;
  display: inline-block;
`;
const BtnMoreDetail = styled.button`
  padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
  height: 40px;
  > a {
    color: #17262b;
  }
  background-color: #fff;
  border-color: #c4c7c8;
  width: 100%;
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  text-align: center;
  border-radius: 3px;
  font-size: 1em;
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
    > a {
      color: #424dc6;
    }
  }
`;
const ContainerDesign = styled(Box)`
  margin-left: 1rem;
  margin-top: 16px;
`;
const ButtonDesign = styled.button`
  padding: calc(0.5rem - 1px) calc(1.5rem - 1px);
  height: 40px;
  color: #fff;
  background-color: #424dc6;
  width: 100%;
  display: inline-block;
  position: relative;
  border: 1px solid transparent;
  text-align: center;
  border-radius: 3px;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: 0.15s;
  vertical-align: top;
  line-height: 1.5rem;
  font-family: inherit;
  white-space: nowrap;
  outline: none;
`;
const ContainerVendor = styled(Box)`
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-template-columns: repeat(4, 1fr);
  display: grid;
  grid-gap: 24px;
  gap: 24px;
  padding: 16px 19px;
  border-top: 1px solid #e3e4e5;
  overflow: hidden;
`;
const HeadingTitle = styled(Heading)`
  white-space: nowrap;
  color: #686f71;
  font-size: 0.875em;
`;
const PricePrintcart = styled.p`
  color: #424dc6;
  font-size: 0.875em;
  line-height: 1.25rem;
  font-weight: 400;
`;
const ContainerBox = styled(Box)`
  margin-bottom: 1.5rem;
  margin-left: 17px;
  margin-right: 17px;
  @media only screen and (max-width: 1440px) {
    margin-left: 25px;
    margin-right: 25px;
  }
  @media only screen and (max-width: 1366px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
const SingleColumn = styled(Box)`
  & p {
    margin: 0px;
  }
`;
const VendorInfo = (props) => {
  const { data: product } = props;
  const data = product[0] || {};
  const getVariants = data?.variants?.map((item) => item?.title);
  const getSize = data?.collection?.metadata?.size;
  const showSize = getSize?.split(",");
  const printAreas = data?.collection?.metadata?.printAreas;
  const showPrint = printAreas?.split(",");

  return (
    <>
      <ContainerBox>
        <Box>
          <BoxVendor>
            <Grid>
              <BoxVendorHeader>
                <HeadingVendor
                  content={data?.vendor?.store_name}
                  lineHeight="2rem"
                  fontWeight="700"
                  mb="0"
                />
              </BoxVendorHeader>
              <BoxHeaderRight>
                <BoxButton>
                  <BtnMoreDetail>
                    <Link href={`${data?.vendor?.shop_url ?? "#"}`}>
                      <a
                        target={`${data?.vendor?.shop_url ? "_blank" : ""}`}
                        title="Visit Store"
                      >
                        Visit Store{" "}
                      </a>
                    </Link>
                  </BtnMoreDetail>
                </BoxButton>
                <ContainerDesign>
                  <>
                    {data?.printcart_product_uuid &&
                      data?.vendor?.api_token && (
                        <Designtool
                          productId={data.printcart_product_uuid}
                          apiKeyVendor={data.vendor.api_token}
                        />
                      )}
                  </>
                </ContainerDesign>
              </BoxHeaderRight>
            </Grid>
            <ContainerVendor>
              <SingleColumn>
                <HeadingTitle
                  content="Location"
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <Box>
                  <p>{data?.origin_country}</p>
                  {/* <Box>
                    <Box>Flag</Box>
                  </Box> */}
                </Box>
              </SingleColumn>
              {data?.collection?.metadata?.priceBase && (
                <>
                  <SingleColumn>
                    <HeadingTitle
                      content="Price"
                      mb="8px"
                      lineHeight="1.25rem"
                      fontWeight="400"
                    />
                    <Box>
                      <p>{data.collection.metadata.priceBase}</p>
                      <Box>
                        <PricePrintcart>
                          {data.collection.metadata.pricePrintcart
                            ? data.collection.metadata.pricePrintcart
                            : ""}
                        </PricePrintcart>
                      </Box>
                    </Box>
                  </SingleColumn>
                </>
              )}
              {data?.collection?.metadata?.shipping && (
                <>
                  <SingleColumn>
                    <HeadingTitle
                      content="Shipping"
                      mb="8px"
                      lineHeight="1.25rem"
                      fontWeight="400"
                    />
                    <Box>
                      <p>{data?.collection?.metadata?.shipping}</p>
                    </Box>
                  </SingleColumn>
                </>
              )}
              {data?.collection?.metadata?.productionTime && (
                <>
                  <SingleColumn>
                    <HeadingTitle
                      content="Avg.production"
                      mb="8px"
                      lineHeight="1.25rem"
                      fontWeight="400"
                    />
                    <p>{data?.collection?.metadata?.productionTime}</p>
                  </SingleColumn>
                </>
              )}
              <SingleColumn>
                <HeadingTitle
                  content={`Print Areas * ${showPrint?.length || 0}`}
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <p>{showPrint?.join(", ") || "Updating..."}</p>
              </SingleColumn>
              <SingleColumn>
                <HeadingTitle
                  content={`Size * ${showSize?.length || 0}`}
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />

                {showSize && showSize?.length === 1 ? (
                  <p className="size-detail">{`${showSize[0]} `}</p>
                ) : showSize?.length > 1 ? (
                  <p className="size-detail">{`${showSize[0]} - ${
                    showSize[showSize?.length - 1]
                  }`}</p>
                ) : (
                  <p>Updating... </p>
                )}
              </SingleColumn>
              <SingleColumn>
                <HeadingTitle
                  content={`Color * ${getVariants?.length || "0"}`}
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <p>{getVariants?.join(", ") || "Updating..."}</p>
              </SingleColumn>
            </ContainerVendor>
          </BoxVendor>
        </Box>
      </ContainerBox>
    </>
  );
};
export default VendorInfo;
