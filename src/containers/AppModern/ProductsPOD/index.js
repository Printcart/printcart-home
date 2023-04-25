import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import SectionWrapper from "containers/AppModern/Features/features.style";
import ReactMarkdown from "react-markdown";
import Container from "../../../common/components/UI/Container";
import { ContainerServices, GridServices } from "../InfoServices/GridServices";
import Banner from "./Banner";
import HeaderPOD, { ContainerPP } from "./productspod.style";
import Link from "next/link";
import styled from "styled-components";
import React from "react";

const CardCus = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover h2 {
    color: #424dc6;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
const BoxCus = styled(Box)`
  height: 168px;
  align-items: flex-start;
  padding: 24px 144px 24px 24px;
  position: relative;
  display: flex;
  text-decoration: none;
  background-color: #f7f7f7;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
`;
const HeadingCollecion = styled(Heading)`
  position: relative;
  width: 100%;
  color: #17262b;
  z-index: 10;
  font-weight: 700;
  line-height: 2.5rem;
  font-size: 1.75rem;
`;
const TitleHead = styled(Heading)`
  color: #5c5c5c;
  font-size: 32px;
`;
const ButtonProvider = styled(Button)`
  display: inline-block;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  border-radius: 25px;
  font-weight: 400;
  height: 3rem;
  min-width: 3rem;
  font-size: 1.125rem;
  background: #4299e1;
  color: #fff;
  &:hover {
    background: #2b6cb0;
  }
`;
const WrappProvider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.48), transparent);
`;
const WrappBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  max-width: 42rem;
`;
const ProviderHeading = styled(Heading)`
  color: #fff;
  font-size: 2.25rem;
`;
const PDescription = styled.p`
  margin: 1.5rem;
  color: #fff;
  font-weight: 700;
  line-height: 1.2;
  font-size: 1rem;
`;
const ProductsPOD = (props) => {
  const { getProducts, collections } = props;
  const getCollection = getProducts.map((item) => item.collection);
  const filterValues = getCollection.filter(Boolean);
  const map = new Map();
  const result = [];
  for (const item of filterValues) {
    if (!map.has(item.id)) {
      map.set(item.id, true);
      result.push(item);
    }
  }
  // const imageCollection = [
  //   {
  //     url: "https://i.imgur.com/qQhxOYm.png",
  //     name: "Kid's Clothing"
  //   },
  //   {
  //     url: "https://i.imgur.com/YT0XzEY.png",
  //     name: "Women's Clothing"
  //   },
  //   {
  //     url: "https://i.imgur.com/BQJ1quD.jpg",
  //     name: "Men's Clothing"
  //   }
  // ];
  return (
    <>
      <SectionWrapper id="features">
        <Container>
          <Box>
            <Banner />
          </Box>
          <HeaderPOD>
            <TitleHead
              fontWeight="500"
              textAlign="center"
              lineHeight="36px"
              content="Products"
            />
          </HeaderPOD>
          <GridServices>
            {getProducts.map((item, index) => (
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
                          €{" "}
                          {(item?.variants[0]?.prices[0]?.amount / 100).toFixed(
                            2
                          )}
                        </Box>
                      )}
                    </Box>
                    <Box className="text">
                      {item.description && (
                        <ReactMarkdown>{item.description}</ReactMarkdown>
                      )}
                    </Box>
                    {/* <Box className="tag-info">
                      {item.tag && <strong>Tags: {item.tags}</strong>}
                    </Box> */}
                    <Box className="collection">
                      {item.collection && (
                        <strong>Collection: {item.collection.title}</strong>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Card>
            ))}
          </GridServices>
          <ContainerPP>
            <WrappProvider>
              <WrappBox>
                <ProviderHeading
                  lineHeight="1.2"
                  fontWeight="700"
                  content="Print Provider"
                />
                <PDescription>
                  Printcart is the largest print on demand network
                </PDescription>
                <Box className="btnSee">
                  <ButtonProvider title="See print providers" />
                </Box>
              </WrappBox>
            </WrappProvider>
          </ContainerPP>
          <HeaderPOD>
            <TitleHead
              fontWeight="500"
              textAlign="center"
              lineHeight="36px"
              content="Collections"
            />
          </HeaderPOD>
          <GridServices>
            {result.map((items, index) => (
              <CardCus key={index}>
                <Link href={`collection/${items?.id}`}>
                  <a title={`View to ${items?.title}`}>
                    <BoxCus>
                      <HeadingCollecion content={items?.title} />
                      <img
                        src={items.metadata.image1}
                        style={{
                          right: "0",
                          position: "absolute",
                          top: "0",
                          height: "100%",
                          width: "auto"
                        }}
                        alt={items?.title}
                      />
                    </BoxCus>
                  </a>
                </Link>
              </CardCus>
            ))}
          </GridServices>
        </Container>
      </SectionWrapper>
    </>
  );
};
export default ProductsPOD;
