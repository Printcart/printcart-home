import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import React from "react";
import { ContentWrapper } from "../appModern.style";
import TitlePath from "../ServiceDetail/TitlePath";
import WrapperServices from "../ServiceDetail/WrapperService";
import Link from "next/link";
import Button from "common/components/Button";
import { Tab } from "@headlessui/react";
import ProductInfo from "./ProductInfo";
import ShippingInfo from "./ShippingInfo";

const ProductDetail = (props) => {
  const { product } = props;
  const tabs = [
    {
      title: "Product Infomation",
      component: <ProductInfo product={product} />,
    },
    {
      title: "Shipping & Returns",
      component: <ShippingInfo />,
    },
  ];
  console.log(product);
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePath currentCat={product.product} />
        <Container>
          <Box className="contProduct">
            <Box className="contenLeft">
              <Box className="wrappImage">
                <Box className="wrappchild">
                  {product?.product?.images?.map((image, index) => (
                    <button
                      key={index}
                      className="btnchange"
                      onClick={() => handleScrollTo()}
                    >
                      <img
                        className="imageProduct"
                        src={image.url}
                        alt="Thumbnail"
                      />
                    </button>
                  ))}
                </Box>
                <Box className="wrappbig">
                  {product?.product?.images?.map((image, index) => (
                    <Box key={index} className="contImage">
                      <img
                        className="imageProductBig"
                        src={image.url}
                        alt="Thumbnail"
                      />
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contentRight">
              <Box className="product-info">
                <Box className="info-child">
                  <Box>
                    <Box className="info-main">
                      {product?.product?.collection && (
                        <Link href="/">
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
                      {product?.product?.variants?.length > 1 && (
                        <Box className="selectSize">
                          {product.product.options.map((option, index) => (
                            <Box className="cont-size" key={index}>
                              <span className="title-size"> Select Size</span>
                              <Box className="valueSize">
                                {option.values.map((value, index) => (
                                  <button key={index} className="btnvalue">
                                    {value.value}
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
                            € {product?.product?.variants[0]?.prices[0]?.amount}
                          </Box>
                        )}
                      </Box>
                      <Button
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#111827",
                        }}
                        title="ADD TO CART"
                      />
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
          <Box className="container-related-products"></Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ProductDetail;
