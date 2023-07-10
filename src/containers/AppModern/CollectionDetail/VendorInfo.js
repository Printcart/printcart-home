import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Link from "next/link";
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
const DescProce = styled.p`
  color: #29ab51;
  font-size: 0.875em;
  line-height: 1.25rem;
  font-weight: 400;
`;
const ContainerBox = styled(Box)`
  margin-bottom: 1.5rem;
`;
const BoxStyleText = styled(Box)`
  text-align: center;
`;
const VendorInfo = (props) => {
  const { data } = props;
  const getVariants = data?.variants?.map((item) => item?.title);
  const getSize = data?.collection?.metadata?.size;
  const showSize = getSize?.split(",");

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
                  <a target="_blank" href="https://dashboard.printcart.com/">
                    <Box>
                      <ButtonDesign>Start Selling</ButtonDesign>
                    </Box>
                  </a>
                </ContainerDesign>
              </BoxHeaderRight>
            </Grid>
            <ContainerVendor>
              <Box>
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
              </Box>
              {/* <Box>
                <HeadingTitle
                  content="Price"
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <Box>
                  <p>From USD 15.57</p>
                  <Box>
                    <DescProce>From USD 11.99 with Printify Premium</DescProce>
                  </Box>
                </Box>
              </Box> */}
              {/* <Box>
                <HeadingTitle
                  content="Shipping"
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <Box>
                  <p>From USD 6.09</p>
                </Box>
              </Box> */}
              {/* <Box>
                <HeadingTitle
                  content="Avg.production"
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <p>2.9 business days</p>
              </Box> */}
              <Box>
                <HeadingTitle
                  content="Print Areas * 2"
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <p>Front side, back side</p>
              </Box>
              <Box>
                <HeadingTitle
                  content={`Size * ${showSize?.length || "0"}`}
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
                  "Updating"
                )}
              </Box>
              <Box>
                <HeadingTitle
                  content={`Color * ${getVariants?.length || "0"}`}
                  mb="8px"
                  lineHeight="1.25rem"
                  fontWeight="400"
                />
                <p>{getVariants?.join(", ") || "Updating"}</p>
              </Box>
            </ContainerVendor>
          </BoxVendor>
        </Box>
      </ContainerBox>
    </>
  );
};
export default VendorInfo;
