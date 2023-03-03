import { Tab } from "@headlessui/react";
import Box from "common/components/Box";
import Card from "common/components/Card";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ContentWrapper } from "../appModern.style";
import { GridServices } from "../InfoServices/GridServices";
import WrapperServices from "../ServiceDetail/WrapperService";
import ImageGallery from "./ImageGallery";
import InfoCollection from "./InfoCollection";
import ProductInfo from "./ProductInfo";
import ShippingInfo from "./ShippingInfo";
import TitlePathMed from "./TitlePathMed";
import VendorInfo from "./VendorInfo";

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
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={product.product} />
        <Container>
          <Box className="contProduct">
            <ImageGallery product={product} />
            <Box className="contentRight">
              <Box className="product-info">
                <Box className="info-child">
                  <Box>
                    <Box className="info-main">
                      {product?.product?.collection && (
                        <Link
                          href={`/collection/${product?.product?.collection?.id}`}
                        >
                          <a className="linktitle">
                            {product?.product?.collection.title}
                          </a>
                        </Link>
                      )}
                      <h3 className="titleProduct">
                        {product?.product?.title}
                      </h3>
                      <p className="descProduct">
                        {product?.product?.description}
                      </p>
                      {/**Select Size */}
                      {product?.product?.variants?.length > 0 && (
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
                        {product?.product?.variants && (
                          <Box className="pricesDetail">
                            €{" "}
                            {(
                              product?.product?.variants[0]?.prices[0]?.amount /
                              100
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
              <Box className="contProPri">
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
              </Box>
              {/**** */}
            </Box>
          </Box>
          <Box className="cont-vendor">
            <VendorInfo />
          </Box>
          <Box className="info-collection">
            <InfoCollection />
          </Box>
          {/**RELATED PRODUCTS */}
          <Box className="container-related-products">
            <Box>
              <h2 className="titleRelated">Related Products</h2>
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
