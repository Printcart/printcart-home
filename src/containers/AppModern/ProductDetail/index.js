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
import ProductParam from "./ProductParam";
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
      component: <ProductParam product={product} />
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
    margin-left: 1rem;
    margin-right: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  `;
  const RelatedHeading = styled(Heading)`
    margin-top: 1rem;
  `;
  const BoxRelated = styled(Box)`
    margin-bottom: 1.5rem;
  `;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={product.product} />
        <Container>
          <GridProduct>
            <ImageGallery product={product} />
            <ProductInfo product={product} />
          </GridProduct>
          <VendorInfo />
          <InfoCollection collection={product?.product?.collection} />
          {/**RELATED PRODUCTS */}
          <BoxRelated>
            <RelatedHeading content="Related Products" />
            <GridServices>
              {products.map(
                (items, index) =>
                  index < 3 && (
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
                              <ReactMarkdown>{items.description}</ReactMarkdown>
                            )}
                          </Box>
                          <Box>
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
          </BoxRelated>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ProductDetail;
