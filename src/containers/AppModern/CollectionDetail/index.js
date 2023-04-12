import Box from "common/components/Box";
import Card from "common/components/Card";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ContentWrapper } from "../appModern.style";
import { GridServices } from "../InfoServices/GridServices";
import InfoCollection from "./InfoCollection";
import TitlePathMed from "../ProductDetail/TitlePathMed";
import VendorInfo from "./VendorInfo";
import WrapperServices from "../ServiceDetail/WrapperService";
import ImageCollection from "./ImageCollection";
import React from "react";
import Heading from "common/components/Heading";

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
const CollectionDetail = (props) => {
  const { collection } = props;
  const title = collection?.title;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={collection} />
        {/* <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">
                {title && `Products of ${title} Category`}
              </h1>
            </Container>
          </Box>
        </SectionHeader> */}
        <Container>
          <BoxCus>
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
              </ContainerProduct>
              {/*Product info - shipping */}
              {/**** */}
            </ProductInfo>
          </BoxCus>
          <ContainerVendor>
            <VendorInfo />
          </ContainerVendor>
          <Box>
            <InfoCollection collection={collection} />
          </Box>
          <Box>
            {collection.products.length > 0 && (
              <React.Fragment>
                <h2>You may also like</h2>
                <GridServices>
                  {collection.products.map(
                    (item, index) =>
                      item.status === "published" && (
                        <CardItems key={index}>
                          <Box>
                            <Link href={`/product/${item?.id}`}>
                              <a>
                                <img
                                  style={{
                                    width: "100%",
                                    height: "300px",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={item?.thumbnail}
                                />
                              </a>
                            </Link>
                            <Box className="content">
                              <Link href={`/product/${item?.id}`}>
                                <a title={`View to ${item.title}`}>
                                  <h3 className="title-medusa">{item.title}</h3>
                                </a>
                              </Link>
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
                            </Box>
                          </Box>
                        </CardItems>
                      )
                  )}
                </GridServices>
              </React.Fragment>
            )}
          </Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
