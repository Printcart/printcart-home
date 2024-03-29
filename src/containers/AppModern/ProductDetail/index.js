import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Link from "next/link";
import styled from "styled-components";
import InfoCollection from "../CollectionDetail/InfoCollection";
import VendorInfo from "../CollectionDetail/VendorInfo";
import {
  CardItems,
  GridFilter,
  PByVendor,
  PTitle,
  WrapContent,
  WrapImage,
  WrapperProduct
} from "../ProductsPOD/productspod.style";
import WrapperServices from "../ServiceDetail/WrapperService";
import { ContentWrapper } from "../appModern.style";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import TitlePathMed from "./TitlePathMed";

export const WrappInfo = styled(Box)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: 17px;
  margin-right: 17px;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  @media only screen and (max-width: 1440px) {
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
  @media only screen and (max-width: 1366px) {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 3.5rem;
    margin-bottom: 3.5rem;
  }
`;
export const BoxRelated = styled(Box)`
  margin: 3.5rem 1rem;
  @media only screen and (max-width: 1440px) {
    margin-left: 17px;
    margin-right: 17px;
  }
  @media only screen and (max-width: 1366px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;

const ProductDetail = (props) => {
  const { product, productsRelated } = props;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={product} />
        <Container>
          <WrappInfo>
            <ImageGallery product={product} />
            <ProductInfo product={product} />
          </WrappInfo>
          <VendorInfo data={product} />
          <InfoCollection collection={product[0]?.collection} />
          {/**RELATED PRODUCTS */}
          <BoxRelated>
            <Heading mb="0px" content="You May Also Like" />
            <WrapperProduct>
              <GridFilter>
                {productsRelated.map(
                  (items, index) =>
                    index < 4 && (
                      <CardItems key={items?.id}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${items?.handle}`}>
                              <a>
                                <img
                                  style={{
                                    position: "absolute",
                                    width: "100%",
                                    height: "100%",
                                    top: "0",
                                    left: "0",
                                    backgroundColor: "#f7f7f7",
                                    objectFit: "contain",
                                    borderTopLeftRadius: "5px",
                                    borderTopRightRadius: "5px"
                                  }}
                                  src={items?.thumbnail || ""}
                                />
                              </a>
                            </Link>
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${items?.handle}`}>
                              <a title={`View to ${items?.title}`}>
                                <PTitle>{items?.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>
                              By {items?.vendor?.store_name}
                            </PByVendor>
                            {/* <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice> */}
                            {/* <BoxDesc>
                              {items.description && (
                                <ReactMarkdown>
                                  {items.description}
                                </ReactMarkdown>
                              )}
                            </BoxDesc> */}
                          </WrapContent>
                        </Box>
                      </CardItems>
                    )
                )}
              </GridFilter>
            </WrapperProduct>
          </BoxRelated>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default ProductDetail;
