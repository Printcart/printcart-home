import Box from "common/components/Box";
import Card from "common/components/Card";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ContentWrapper, SectionHeader } from "../appModern.style";
import { GridServices } from "../InfoServices/GridServices";
import InfoCollection from "./InfoCollection";
import TitlePathMed from "../ProductDetail/TitlePathMed";
import VendorInfo from "./VendorInfo";
import WrapperServices from "../ServiceDetail/WrapperService";
import ImageCollection from "./ImageCollection";
import React from "react";
import Heading from "common/components/Heading";
import CheckBox from "common/components/Checkbox";

const filter = [
  {
    name: "USA"
  },
  {
    name: "CANADA"
  },
  {
    name: "UNITED KINGDOM"
  },
  {
    name: "EUROPE"
  }
];
const BoxCus = styled(Box)`
  align-items: flex-start;
  flex-direction: row;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 1440px;
  padding-left: 2rem;
  padding-right: 2rem;
`;
const ProductInfo = styled(Box)`
  max-width: 400px;
  padding-top: 0px;
  padding-bottom: 0px;
  top: 10rem;
  position: sticky;
  row-gap: 3rem;
  flex-direction: column;
  width: 100%;
  display: flex;
`;
const ContainerProduct = styled(Box)`
  row-gap: 0.5rem;
  flex-direction: column;
  display: flex;
`;
const HeadingProduct = styled(Heading)`
  font-size: 2rem;
  margin: 0;
`;
const DescProduct = styled.p`
  font-size: 100%;
  font-weight: 400;
  line-height: 1.5rem;
  margin: 0;
`;
const ContainerVendor = styled(Box)`
  margin-top: 3.5rem;
  display: block;
`;
const CardItems = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover {
    box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
    transform: translate(0, -7px);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
const WrappProduc = styled(Box)`
  margin-bottom: 2rem;
`;
const BoxHeader = styled(Box)`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0;
  padding-right: 0;
`;
const Sortby = styled.span`
  display: block;
  padding-right: 0.5rem;
  font-size: 18px;
`;
const BoxSelect = styled(Box)`
  height: 48px;
  position: relative;
  display: block;
  border-radius: 5px;

  outline: none;
`;
const Select = styled.select`
  width: 100%;
  height: 48px;
  background: white;
  padding-left: 5px;
  font-size: 18px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
const BoxSortby = styled(Box)`
  display: inline-flex;
  align-items: baseline;
`;
const GridProducts = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
`;
const WrapperFilter = styled(Box)`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 25%;
  max-width: 25%;
`;
const WrapperProduct = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 00 75%;
  max-width: 75%;
`;

const BoxFilter = styled(Box)`
  margin-top: 15px;
  display: block;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #e3e4e5;
  box-sizing: inherit;
`;
const TitleFilter = styled(Box)`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  cursor: pointer;
`;
const TextTitle = styled(Box)`
  color: #17262b;
  display: flex;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5rem;
`;
const StatusTitle = styled(Box)`
  margin-left: 1rem;
  flex-grow: 100;
`;
const Status = styled.small`
  border: 1px solid #248e4c;
  background-color: #e2f7e3;
  color: #1f6b45;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.125rem 0.5rem;
  border-radius: 3px;
  font-size: 0.875em;
  line-height: 1.25rem;
`;
const ContentFilter = styled(Box)`
  margin-top: 0px;
`;
const WapperContent = styled(Box)`
  padding: 5px 10px 10px;
`;
const ContainerContent = styled(Box)`
  margin-top: 5px;
`;
const Boxfield = styled(Box)`
  display: flex;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.25rem;
  margin: -0.25rem;
`;
const BoxName = styled(Box)`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
`;
const Input = styled.input`
  display: none;
  outline: none;
`;
const CheckBoxFilter = styled(CheckBox)`
  margin-top: 20px;
  label {
    cursor: pointer;
  }
  span {
    color: #17262b !important;
    font-size: 1em !important;
    line-height: 1.5rem !important;
    font-weight: 400 !important;
  }
`;
const GridFilter = styled(GridServices)`
  margin-top: calc(1rem * -1);
  margin-bottom: calc(1rem * -1);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: calc(1rem * -1);
  margin-right: calc(1rem * -1);
`;

const WrapImage = styled(Box)`
  position: relative;
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
  text-align: center;
`;
const WrappContent = styled(Box)`
  padding: 16px 16px 8px;
`;
const PTitle = styled.p`
  margin: 0;
  max-height: 48px;
  overflow: hidden;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #17262b;
`;
const PByVendor = styled.p`
  margin: 0;
  color: #757c7e;
  font-size: 0.875em;
  line-height: 1.25rem;
  font-weight: 400;
`;
const VendorPrice = styled(Box)`
  margin: 8px 0 0;
`;
const PPrice = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.5rem;
  color: #17262b;
`;
const PDiscount = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.5rem;
  color: #29ab51;
`;
const CollectionDetail = (props) => {
  const { collection } = props;
  const title = collection?.title;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={collection} />
        <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">
                {title && `Products in the ${title} Category`}
              </h1>
            </Container>
          </Box>
        </SectionHeader>
        <Container>
          {/* <BoxCus>
            <ImageCollection image={collection.metadata?.image1} />
            <ProductInfo>
              <ContainerProduct>
                {collection && (
                  <Link href={`/collection/${collection?.id}`}>
                    <a>{collection.title}</a>
                  </Link>
                )}
                <HeadingProduct
                  content={collection?.title}
                  fontWeight="400"
                  lineHeight="36px"
                />
                <DescProduct>
                  {collection?.metadata?.short_description}
                </DescProduct>
              </ContainerProduct> */}
          {/*Product info - shipping */}
          {/**** */}
          {/* </ProductInfo>
          </BoxCus> */}
          {/* <ContainerVendor>
            <VendorInfo />
          </ContainerVendor>
          <Box>
            <InfoCollection collection={collection} />
          </Box> */}
          <WrappProduc>
            <BoxHeader>
              <Heading content={title} lineHeight="2.5rem" fontWeight="600" />
              {/* <BoxSortby>
                <Sortby>Sort By</Sortby>
                <BoxSelect>
                  <Select>
                    <option value="" hidden>
                      Latest
                    </option>
                    <option value="1">Lowest price</option>
                    <option value="2">Hightest price</option>
                  </Select>
                </BoxSelect>
              </BoxSortby> */}
            </BoxHeader>
            <Box>{collection.metadata.short_description}</Box>
            <GridProducts>
              <WrapperFilter>
                <BoxFilter>
                  <Box>
                    <TitleFilter>
                      <TextTitle>
                        Filter by Vendor
                        <StatusTitle>
                          <Status>New</Status>
                        </StatusTitle>
                        <icon></icon>
                      </TextTitle>
                    </TitleFilter>
                    <ContentFilter>
                      <WapperContent>
                        <ContainerContent>
                          {filter.map((item, index) => (
                            <Boxfield key={index}>
                              <Label>
                                <BoxName>
                                  <Input type="checkbox" />
                                  <CheckBoxFilter labelText={item.name} />
                                </BoxName>
                              </Label>
                            </Boxfield>
                          ))}
                        </ContainerContent>
                      </WapperContent>
                    </ContentFilter>
                  </Box>
                </BoxFilter>
              </WrapperFilter>
              {collection.products.length > 0 && (
                <WrapperProduct>
                  <GridFilter>
                    {collection.products.map(
                      (item, index) =>
                        item.status === "published" && (
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
                              </WrapImage>
                              <WrappContent>
                                <Link href={`/product/${item?.id}`}>
                                  <a title={`View to ${item.title}`}>
                                    <PTitle>{item.title}</PTitle>
                                  </a>
                                </Link>
                                <PByVendor>By [Vendor_Name]. qty</PByVendor>
                                <VendorPrice>
                                  <PPrice>From USD 9.38</PPrice>
                                  <PDiscount>
                                    From USD 5.92 with Printcart
                                  </PDiscount>
                                </VendorPrice>
                                <Box className="contPricesRelated">
                                  {item?.variants && (
                                    <Box className="pricesRelated">
                                      € {item?.variants[0]?.prices[0]?.amount}
                                    </Box>
                                  )}
                                </Box>
                                <Box className="text">
                                  <Box>
                                    {item.description && (
                                      <ReactMarkdown>
                                        {item.description}
                                      </ReactMarkdown>
                                    )}
                                  </Box>
                                </Box>
                                <Box>
                                  <Box className="tag-info">
                                    {item.tag && (
                                      <strong>Tags: {item.tags}</strong>
                                    )}
                                  </Box>
                                  <Box className="collection">
                                    {item.collection && (
                                      <strong>
                                        Collection:{" "}
                                        {item.collection.title || item?.title}
                                      </strong>
                                    )}
                                  </Box>
                                </Box>
                              </WrappContent>
                            </Box>
                          </CardItems>
                        )
                    )}
                  </GridFilter>
                </WrapperProduct>
              )}
            </GridProducts>
          </WrappProduc>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
