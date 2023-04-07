import Box from "common/components/Box";
import Card from "common/components/Card";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ContentWrapper } from "../appModern.style";
import { GridServices } from "../InfoServices/GridServices";
import InfoCollection from "../ProductDetail/InfoCollection";
import TitlePathMed from "../ProductDetail/TitlePathMed";
import VendorInfo from "../ProductDetail/VendorInfo";
import WrapperServices from "../ServiceDetail/WrapperService";
import ImageCollection from "./ImageCollection";

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
            <Box className="contentRight">
              <Box className="product-info">
                <Box className="info-child">
                  <Box>
                    <Box className="info-main">
                      {collection && (
                        <Link href={`/collection/${collection?.id}`}>
                          <a className="linktitle">{collection.title}</a>
                        </Link>
                      )}
                      <h3 className="titleProduct">{collection?.title}</h3>
                      <p className="descProduct">
                        {collection?.metadata?.short_description}
                      </p>
                      {/**Select Size */}
                      {collection?.variants?.length > 0 && (
                        <Box className="selectSize">
                          {product.product.options.map((option, index) => (
                            <Box className="cont-size" key={index}>
                              <span className="title-size">
                                {" "}
                                Select {option?.title}
                              </span>
                              <Box className="valueSize">
                                {option?.values?.map((value, index) => (
                                  <button key={index} className="btnvalue">
                                    {value?.value}
                                  </button>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      )}
                      {/**PRICE */}
                      <Box className="contPrices">
                        {collection?.variants && (
                          <Box className="pricesDetail">
                            €{" "}
                            {(
                              collection?.variants[0]?.prices[0]?.amount / 100
                            ).toFixed(2)}
                          </Box>
                        )}
                      </Box>
                      {/* <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#111827"
                        }}
                        title="ADD TO CART"
                      /> */}
                    </Box>
                  </Box>
                </Box>
              </Box>
              {/*Product info - shipping */}
              {/**** */}
            </Box>
          </BoxCus>
          <Box className="cont-vendor">
            <VendorInfo />
          </Box>
          <Box className="info-collection">
            <InfoCollection collection={collection} />
          </Box>

          <Box className="wrapperPOC">
            <h2>You may also like</h2>
            <GridServices>
              {collection.products.map(
                (item, index) =>
                  item.status === "published" && (
                    <Card className="cardItem" key={index}>
                      <Box className="cardItem-child">
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
                              {item.tag && <strong>Tags: {item.tags}</strong>}
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
                    </Card>
                  )
              )}
            </GridServices>
          </Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
