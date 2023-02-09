import Box from "common/components/Box";
import Card from "common/components/Card";
import Container from "common/components/UI/Container";
import React from "react";
import Banner from "../Banner";
import SectionWrapper from "../Features/features.style";
import { GridServices } from "../InfoServices/GridServices";
import HeaderPOD from "../ProductsPOD/productspod.style";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ContentWrapper, SectionHeader } from "../appModern.style";
import TitlePathMed from "../ProductDetail/TitlePathMed";
import WrapperServices from "../ServiceDetail/WrapperService";

const CollectionDetail = (props) => {
  const { collection } = props;
  const title = collection?.title;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={collection} />
        <SectionHeader>
          <Box className="containerSlogan">
            <Container>
              <h1 className="titleSlogan">
                {title && `Products of ${title} Category`}
              </h1>
            </Container>
          </Box>
        </SectionHeader>
        <Container>
          {/* <Banner />
        <HeaderPOD>
          <h1 className="titleSlogan">Product</h1>
        </HeaderPOD> */}
          <Box className="wrapperPOC">
            <GridServices>
              {collection.products.map((item, index) => (
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
                            <ReactMarkdown>{item.description}</ReactMarkdown>
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
                              Collection: {item.collection.title || item?.title}
                            </strong>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Card>
              ))}
            </GridServices>
          </Box>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
