import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import styled from "styled-components";

const WrapperInfo = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 40%;
  max-width: 40%;
`;
const ProductHeading = styled(Heading)`
  font-size: 2em;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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
const ProductInfo = (props) => {
  const { product } = props;
  return (
    <>
      <WrapperInfo>
        <Box>
          {product?.collection && (
            <Link href={`/collection/${product?.collection?.id}`}>
              <a>{product?.collection.title}</a>
            </Link>
          )}
          <ProductHeading content={product?.title} lineHeight="2.5rem" />
          <PDescription>{ReactHtmlParser(product?.description)}</PDescription>
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
      </WrapperInfo>
    </>
  );
};
export default ProductInfo;
