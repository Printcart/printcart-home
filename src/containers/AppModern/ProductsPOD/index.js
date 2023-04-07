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
  padding-right: 168px;
  align-items: flex-start;
  padding: 24px 144px 24px 24px;
  position: relative;
  display: flex;
  text-decoration: none;
  background-color: #f7f7f7;
  border-radius: 6px;
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
const ProductsPOD = (props) => {
  const { getProducts, collections } = props;
  const imageCollection = [
    {
      url: "https://i.imgur.com/qQhxOYm.png",
      name: "Kid's Clothing"
    },
    {
      url: "https://i.imgur.com/YT0XzEY.png",
      name: "Women's Clothing"
    },
    {
      url: "https://i.imgur.com/BQJ1quD.jpg",
      name: "Men's Clothing"
    }
  ];
  return (
    <SectionWrapper id="features">
      <Container>
        <Banner />
        <HeaderPOD>
          <h1 className="titleSlogan">Product</h1>
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
                        <strong>Collection: {item.collection.title}</strong>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </GridServices>
        <ContainerPP>
          <Box className="container">
            <Box className="content-image">
              <Heading
                as="h2"
                lineHeight="1.2"
                fontWeight="700"
                content="Print Provider"
                className="heading"
              />
              <p className="desc">
                Printcart is the largest print on demand network
              </p>
              <Box className="btnSee">
                <Button title="See print providers" className="btn-seeprint" />
              </Box>
            </Box>
          </Box>
        </ContainerPP>
        <HeaderPOD>
          <h1 className="titleSlogan">Collections</h1>
        </HeaderPOD>
        <GridServices>
          {collections.map((items, index) => (
            <CardCus key={index}>
              <Box>
                <Box>
                  <Link href={`collection/${items?.id}`}>
                    <a title={`View to ${items?.title}`} className="btncatalog">
                      <BoxCus>
                        <HeadingCollecion content={items.title} />
                        <img
                          src={
                            imageCollection[parseInt(index % 3)]
                              ? imageCollection[parseInt(index % 3)]?.url
                              : imageCollection[0]?.url
                          }
                          style={{
                            right: "0",
                            position: "absolute",
                            top: "0",
                            height: "100%",
                            width: "auto"
                          }}
                          alt={
                            imageCollection[parseInt(index % 3)]
                              ? imageCollection[parseInt(index % 3)]?.name
                              : imageCollection[0]?.name
                          }
                        />
                      </BoxCus>
                    </a>
                  </Link>
                </Box>
              </Box>
            </CardCus>
          ))}
        </GridServices>
      </Container>
    </SectionWrapper>
  );
};

export default ProductsPOD;
