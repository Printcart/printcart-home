import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import React from "react";
import { ContentWrapper } from "../appModern.style";
import TitlePath from "../ServiceDetail/TitlePath";
import WrapperServices from "../ServiceDetail/WrapperService";
import Link from "next/link";

const ProductDetail = (props) => {
  const { product } = props;
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
                          <a className="linktitle">{product?.product?.collection.title}</a>
                        </Link>
                      )}
                      <h3 className="titleProduct">
                        {product?.product?.title}
                      </h3>
                      <p className="descProduct">
                        {product?.product?.description}
                      </p>
                      {product.product.variants.length > 1 && (
                        <Box className="selectSize">
                          {product.product.options.map((option) => (
                            <Box className="cont-size">
                              <span className="title-size"> Select Size</span>
                              <Box className="valueSize">
                                {option.values.map((value) => (
                                  <button className="btnvalue">
                                    {value.value}
                                  </button>
                                ))}
                              </Box>
                            </Box>
                          ))}
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ProductDetail;
