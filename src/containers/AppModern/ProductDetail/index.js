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
  PDiscount,
  PPrice,
  PTitle,
  VendorPrice,
  WrapContent,
  WrapImage,
  WrapperProduct
} from "../ProductsPOD/productspod.style";
import WrapperServices from "../ServiceDetail/WrapperService";
import { ContentWrapper } from "../appModern.style";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import ProductParam from "./ProductParam";
import ShippingInfo from "./ShippingInfo";
import TitlePathMed from "./TitlePathMed";

const WrappInfo = styled(Box)`
  align-items: center;
  padding-top: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
  margin-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 3.5rem;
`;
const RelatedHeading = styled(Heading)`
  margin-top: 0px;
`;
const BoxRelated = styled(Box)`
  margin: 2rem 0;
`;

const ProductDetail = (props) => {
  const { product, productsRelated } = props;

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

  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={product} />
        <Container>
          <WrappInfo>
            <ImageGallery product={product} />
            <ProductInfo product={product} />
          </WrappInfo>
          <VendorInfo />
          <InfoCollection collection={product?.collection} />
          {/**RELATED PRODUCTS */}
          <BoxRelated>
            <RelatedHeading mb="0px" content="You May Also Like" />
            <WrapperProduct>
              <GridFilter>
                {productsRelated.map(
                  (items, index) =>
                    index < 4 && (
                      <CardItems key={index}>
                        <Box>
                          <WrapImage>
                            <Link href={`/product/${items?.id}`}>
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
                                  src={items?.thumbnail}
                                />
                              </a>
                            </Link>
                          </WrapImage>
                          <WrapContent>
                            <Link href={`/product/${items?.id}`}>
                              <a title={`View to ${items.title}`}>
                                <PTitle>{items.title}</PTitle>
                              </a>
                            </Link>
                            <PByVendor>By [Vendor_Name]. qty</PByVendor>
                            <VendorPrice>
                              <PPrice>From USD 9.38</PPrice>
                              <PDiscount>
                                From USD 5.92 with Printcart
                              </PDiscount>
                            </VendorPrice>
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
