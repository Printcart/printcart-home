import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import SectionWrapper from "containers/AppModern/Features/features.style";
import Link from "next/link";
import styled from "styled-components";
import Container from "../../../common/components/UI/Container";
import { GridServices } from "../InfoServices/GridServices";
import Banner from "./Banner";
import { ContainerPP } from "./productspod.style";

const CardCus = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover h2 {
    color: #424dc6;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
const BoxCus = styled(Box)`
  height: 168px;
  align-items: flex-start;
  padding: 24px 144px 24px 24px;
  position: relative;
  display: flex;
  text-decoration: none;
  background-color: #f7f7f7;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
`;
const HeadingCollecion = styled(Heading)`
  position: relative;
  width: 100%;
  color: #17262b;
  z-index: 10;
  font-weight: 700;
  line-height: 2.5rem;
  font-size: 1.75rem;
`;
const TitleHead = styled.h4`
  margin: 0;
  font-size: 2em;
  line-height: 2rem;
  font-weight: 700;
`;
const ButtonProvider = styled(Button)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  border-radius: 25px;
  font-weight: 400;
  height: 3rem;
  min-width: 3rem;
  font-size: 1.125rem;
  background: #4299e1;
  color: #fff;
  &:hover {
    background: #2b6cb0;
  }
`;
const WrappProvider = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.48), transparent);
`;
const WrappBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  max-width: 42rem;
`;
const ProviderHeading = styled(Heading)`
  color: #fff;
  font-size: 2.25rem;
`;
const PDescription = styled.p`
  margin: 1.5rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  font-size: 1rem;
`;
const HeadingCatalog = styled(Heading)`
  font-size: 2rem;
`;
const ContainerBox = styled(Box)`
  margin-bottom: 3.5rem;
  display: block;
  margin-top: 28px;
`;
const HeaderBox = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
const TitleBox = styled(Box)`
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 960px) {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 50%;
    margin-left: 25%;
    text-align: center;
  }
`;
const RedirectAll = styled(Box)`
  text-align: right;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 960px) {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 25%;
    max-width: 25%;
  }
`;
const TagA = styled.a`
  cursor: pointer;
  text-decoration: none;
  outline: none;
  &:hover {
    color: #0013e7;
    text-decoration: underline;
  }
`;
const SpanLink = styled.span`
  cursor: pointer;
  color: #424dc6;
  transition: color 0.15s ease;
  text-decoration: none;
  outline: none;
  &:hover {
    color: #0013e7;
    text-decoration: underline;
  }
`;

const ContainerProducts = styled(Box)`
  display: block;
  position: relative;
  min-height: 402px;
  @media (min-width: 1168px) {
    min-height: 416px;
  }
  @media (min-width: 960px) {
    min-height: 380px;
  }
  @media (min-width: 840px) {
    min-height: 418px;
  }
`;
const ContentProducts = styled(Box)`
  position: relative;
  display: block;
  min-height: 54px;
`;
const GridProducts = styled(Box)`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  scroll-behavior: smooth;
  align-items: flex-start;
`;
export const WrapContent = styled(Box)`
  padding: 16px 16px 16px;
`;
export const PTitle = styled.p`
  margin: 0;
  height: 24px;
  max-height: 48px;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #17262b;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
export const PByVendor = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #757c7e;
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 400;
`;
export const VendorPrice = styled(Box)`
  margin: 8px 0 0;
`;
export const PPrice = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.25rem;
  color: #17262b;
`;
export const PDiscount = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.25rem;
  color: #29ab51;
`;
export const BoxDesc = styled(Box)`
  height: 90px;
  font-size: 16px;
  color: #5c5c5c;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;
export const WrapImage = styled(Box)`
  position: relative;
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
  text-align: center;
`;
export const CardItems = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover {
    background-color: #f7f7f7;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
export const WrapperProduct = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  max-width: 100%;
`;
export const GridFilter = styled(GridServices)`
  margin: 0px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  > div {
    width: calc(100% / 4 - 34px);
    margin: 30px 17px 10px;

    @media only screen and (max-width: 1400px) {
      width: calc(100% / 4 - 34px);
    }
    @media only screen and (max-width: 1200px) {
      width: calc(100% / 3 - 34px);
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 767px) {
      width: calc(100% / 2 - 34px);
    }
    @media only screen and (max-width: 594px) {
      width: calc(100% / 1 - 34px);
    }
  }
`;
const BoxLabel = styled(Box)`
  position: absolute;
  z-index: 1;
  top: 16px;
  left: 16px;
`;
const SmallNew = styled.small`
  border: 1px solid #2b6ca3;
  background-color: #e1eff9;
  color: #1e5180;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
`;
const SmallEco = styled.small`
  border: 1px solid #248e4c;
  background-color: #e2f7e3;
  color: #1f6b45;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.1rem 0.5rem;
  border-radius: 3px;
`;
const ProductsPOD = (props) => {
  const { getProducts, ecoFilter, aopFilter, neckFilter } = props;
  const getCollection = getProducts.map((item) => item.collection);
  const filterValues = getCollection.filter(Boolean);
  const map = new Map();
  const result = [];
  for (const item of filterValues) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      result.push(item);
    }
  }
  return (
    <>
      <SectionWrapper id="features">
        <Container>
          <Banner />
          {/* <HeadingCatalog
            content="Printcart's Product Catalog"
            mb="3rem"
            lineHeight="3.5rem"
          /> */}
          {/* <ExploreProducts /> */}
          <ContainerBox>
            <HeaderBox>
              <TitleBox>
                <TitleHead>New Products</TitleHead>
              </TitleBox>
              {/* <RedirectAll>
                <Box>
                  <TagA href="/catalog/#">
                    <SpanLink>
                      See all New Products
                      <Icon icon={ic_keyboard_arrow_right} />
                    </SpanLink>
                  </TagA>
                </Box>
              </RedirectAll> */}
            </HeaderBox>
            {/* <HeaderPOD></HeaderPOD> */}
            <WrapperProduct>
              <GridFilter>
                {getProducts.map(
                  (item, index) =>
                    index < 4 && (
                      <CardItems key={index}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${item?.id}`}>
                              <a>
                                <img
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={item?.thumbnail}
                                />
                              </a>
                            </Link>
                            <BoxLabel>
                              <SmallNew>New</SmallNew>
                            </BoxLabel>
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${item?.id}`}>
                              <a title={`View to ${item.title}`}>
                                <PTitle>{item.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>By {item?.vendor?.store_name}</PByVendor>
                            <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice>
                          </WrapContent>
                        </Box>
                      </CardItems>
                    )
                )}
              </GridFilter>
            </WrapperProduct>
          </ContainerBox>
          <ContainerBox>
            <HeaderBox>
              <TitleBox>
                <TitleHead>Eco-friendly</TitleHead>
              </TitleBox>
              {/* <RedirectAll>
                <Box>
                  <TagA href="/catalog/#">
                    <SpanLink>
                      See all Eco-friendly
                      <Icon icon={ic_keyboard_arrow_right} />
                    </SpanLink>
                  </TagA>
                </Box>
              </RedirectAll> */}
            </HeaderBox>
            {/* <HeaderPOD></HeaderPOD> */}
            <WrapperProduct>
              <GridFilter>
                {ecoFilter.map(
                  (item, index) =>
                    index < 4 && (
                      <CardItems key={index}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${item?.id}`}>
                              <a>
                                <img
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={item?.thumbnail ?? "favicon.png"}
                                />
                              </a>
                            </Link>
                            <BoxLabel>
                              <SmallEco>Eco-friendly</SmallEco>
                            </BoxLabel>
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${item?.id}`}>
                              <a title={`View to ${item.title}`}>
                                <PTitle>{item.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>By {item?.vendor?.store_name}</PByVendor>
                            <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice>
                          </WrapContent>
                        </Box>
                      </CardItems>
                    )
                )}
              </GridFilter>
            </WrapperProduct>
          </ContainerBox>
          <ContainerBox>
            <HeaderBox>
              <TitleBox>
                <TitleHead>AOP Clothing</TitleHead>
              </TitleBox>
              {/* <RedirectAll>
                <Box>
                  <TagA href="/catalog/#">
                    <SpanLink>
                      See all AOP Clothing
                      <Icon icon={ic_keyboard_arrow_right} />
                    </SpanLink>
                  </TagA>
                </Box>
              </RedirectAll> */}
            </HeaderBox>
            {/* <HeaderPOD></HeaderPOD> */}
            <WrapperProduct>
              <GridFilter>
                {aopFilter.map(
                  (item, index) =>
                    index < 4 && (
                      <CardItems key={index}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${item?.id}`}>
                              <a>
                                <img
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={item?.thumbnail ?? "favicon.png"}
                                />
                              </a>
                            </Link>
                            {/* <BoxLabel>
                              <SmallEco>Eco-friendly</SmallEco>
                            </BoxLabel> */}
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${item?.id}`}>
                              <a title={`View to ${item.title}`}>
                                <PTitle>{item.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>By {item?.vendor?.store_name}</PByVendor>
                            <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice>
                          </WrapContent>
                        </Box>
                      </CardItems>
                    )
                )}
              </GridFilter>
            </WrapperProduct>
          </ContainerBox>
          <ContainerBox>
            <HeaderBox>
              <TitleBox>
                <TitleHead>Neck Labels</TitleHead>
              </TitleBox>
              {/* <RedirectAll>
                <Box>
                  <TagA href="/catalog/#">
                    <SpanLink>
                      See all Eco-friendly
                      <Icon icon={ic_keyboard_arrow_right} />
                    </SpanLink>
                  </TagA>
                </Box>
              </RedirectAll> */}
            </HeaderBox>
            {/* <HeaderPOD></HeaderPOD> */}
            <WrapperProduct>
              <GridFilter>
                {neckFilter.map(
                  (item, index) =>
                    index < 4 && (
                      <CardItems key={index}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${item?.id}`}>
                              <a>
                                <img
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={item?.thumbnail ?? "favicon.png"}
                                />
                              </a>
                            </Link>
                            {/* <BoxLabel>
                              <SmallEco>Neck labels</SmallEco>
                            </BoxLabel> */}
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${item?.id}`}>
                              <a title={`View to ${item.title}`}>
                                <PTitle>{item.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>By {item?.vendor?.store_name}</PByVendor>
                            <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice>
                          </WrapContent>
                        </Box>
                      </CardItems>
                    )
                )}
              </GridFilter>
            </WrapperProduct>
          </ContainerBox>
          <ContainerPP>
            <WrappProvider>
              <WrappBox>
                {/* <ProviderHeading
                  lineHeight="1.2"
                  fontWeight="700"
                  content="Print Provider"
                /> */}
                <PDescription>
                  Bridge the Gap Between Selling and Production
                </PDescription>
                <Box className="btnSee">
                  <ButtonProvider title="Create POD Printer store" />
                </Box>
              </WrappBox>
            </WrappProvider>
          </ContainerPP>
          {result && (
            <HeaderBox>
              <TitleBox>
                <TitleHead>Collections</TitleHead>
              </TitleBox>
            </HeaderBox>
          )}
          <GridServices>
            {result.map((items, index) => (
              <CardCus key={index}>
                <Link href={`/collection/${items?.id}`}>
                  <a title={`View to ${items?.title}`}>
                    <BoxCus>
                      <HeadingCollecion content={items?.title} />
                      <img
                        src={items.metadata.image1}
                        style={{
                          right: "0",
                          position: "absolute",
                          top: "0",
                          height: "100%",
                          width: "40%"
                        }}
                        alt={items?.title}
                      />
                    </BoxCus>
                  </a>
                </Link>
              </CardCus>
            ))}
          </GridServices>
        </Container>
      </SectionWrapper>
    </>
  );
};
export default ProductsPOD;
