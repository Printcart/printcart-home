import { Tab } from "@headlessui/react";
import Box from "common/components/Box";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ContentWrapper } from "../appModern.style";
import InfoCollection from "../CollectionDetail/InfoCollection";
import VendorInfo from "../CollectionDetail/VendorInfo";
import { GridServices } from "../InfoServices/GridServices";
import WrapperServices from "../ServiceDetail/WrapperService";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import ShippingInfo from "./ShippingInfo";
import TitlePathMed from "./TitlePathMed";

const ProductDetail = (props) => {
  const { product, products } = props;
  // const val = product?.product?.options.map((option) =>
  //   option?.values?.map((value) => value.value)
  // );
  // const valueSize = [...new Set(val[0])];
  // for (let i = 0; i < valueSize.length; i++) {}
  // const valueColor = [...new Set(val[1])];
  const tabs = [
    {
      title: "Product Infomation",
      component: <ProductInfo product={product} />
    },
    {
      title: "Shipping & Returns",
      component: <ShippingInfo />
    }
  ];
  const GridProduct = styled.div`
    align-items: center;
    padding-top: 0;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(1rem * -1);
    margin-right: calc(1rem * -1);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `;
  const BoxRight = styled(Box)`
    position: relative;
    width: 100%;
    box-sizing: border-box;
    flex: 0 0 40%;
    max-width: 40%;
  `;
  const ProductHeading = styled(Heading)`
    font-size: 2em;
  `;
  const PDescription = styled.p`
    margin-top: 0px;
    color: #444;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  `;
  const RelatedHeading = styled(Heading)`
    margin-top: 1rem;
  `;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={product.product} />
        <Container>
          <GridProduct>
            <ImageGallery product={product} />
            <BoxRight>
              <Box>
                {product?.product?.collection && (
                  <Link
                    href={`/collection/${product?.product?.collection?.id}`}
                  >
                    <a>{product?.product?.collection.title}</a>
                  </Link>
                )}
                <ProductHeading
                  content={product?.product?.title}
                  lineHeight="2.5rem"
                />
                <PDescription>{product?.product?.description}</PDescription>
                {/**Select Size */}
                {/* {product?.product?.variants?.length > 0 && (
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
                      )} */}
                {/**PRICE */}
                {/* <Box className="contPrices">
                        {product?.product?.variants && (
                          <Box className="pricesDetail">
                            €{" "}
                            {(
                              product?.product?.variants[0]?.prices[0]?.amount /
                              100
                            ).toFixed(2)}
                          </Box>
                        )}
                      </Box> */}
                {/* <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#111827"
                        }}
                        title="ADD TO CART"
                      /> */}
              </Box>
              {/*Product info - shipping */}
              {/* <Box className="contProPri">
                <Tab.Group>
                  <Tab.List className="tabList">
                    {tabs.map((item, index) => (
                      <Tab
                        key={index}
                        className={({ selected }) =>
                          selected ? "tabChecked" : "tabDefault"
                        }
                      >
                        {item.title}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    {tabs.map((item, index) => (
                      <Box key={index}>{item.component}</Box>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Box> */}
              {/**** */}
            </BoxRight>
          </GridProduct>
          <Box>
            <VendorInfo />
          </Box>
          <Box>
            <InfoCollection collection={product?.product?.collection} />
          </Box>
          {/**RELATED PRODUCTS */}
          <Box>
            <Box>
              <RelatedHeading content="Related Products" />
              <GridServices>
                {products.map(
                  (items, index) =>
                    index > 0 &&
                    index < 4 && (
                      <Card className="cardItem" key={index}>
                        <Box>
                          <Link href={`/product/${items?.id}`}>
                            <a>
                              <img
                                style={{
                                  width: "100%",
                                  height: "300px",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px"
                                }}
                                src={items?.thumbnail}
                              />
                            </a>
                          </Link>
                          <Box className="content">
                            <Link href={`/product/${items?.id}`}>
                              <a title={`View to ${items.title}`}>
                                <h3 className="title-medusa">{items.title}</h3>
                              </a>
                            </Link>
                            <Box className="contPricesRelated">
                              {items?.variants && (
                                <Box className="pricesRelated">
                                  €{" "}
                                  {(
                                    items?.variants[0]?.prices[0]?.amount / 100
                                  ).toFixed(2)}
                                </Box>
                              )}
                            </Box>
                            <Box className="text">
                              {items.description && (
                                <ReactMarkdown>
                                  {items.description}
                                </ReactMarkdown>
                              )}
                            </Box>
                            <Box>
                              <Box className="tag-info">
                                {items.tag && (
                                  <strong>Tags: {items.tags}</strong>
                                )}
                              </Box>
                              <Box className="collection">
                                {items.collection && (
                                  <strong>
                                    Collection: {items.collection.title}
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
          </Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ProductDetail;
