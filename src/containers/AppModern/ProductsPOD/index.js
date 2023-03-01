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

const ProductsPOD = (props) => {
  const { getProducts, collections } = props;
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
                        {(item?.variants[0]?.prices[0]?.amount / 100).toFixed(2)}
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
        <ContainerServices>
          <HeaderPOD>
            <h1 className="titleSlogan">Collections</h1>
          </HeaderPOD>
          <Box className="contCollection">
            {collections?.collections?.map(
              (items, index) =>
                items?.products?.length > 0 && (
                  <Link key={index} href={`collection/${items?.id}`}>
                    <a
                      title={`View to ${items?.handle}`}
                      className="btncatalog"
                    >
                      <Box className="titleName">{items?.title}</Box>
                    </a>
                  </Link>
                )
            )}
          </Box>
        </ContainerServices>
      </Container>
    </SectionWrapper>
  );
};

export default ProductsPOD;
