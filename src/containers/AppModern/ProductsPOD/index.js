import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import SectionWrapper from "containers/AppModern/Features/features.style";
import ReactMarkdown from "react-markdown";
import Container from "../../../common/components/UI/Container";
import { GridServices } from "../InfoServices/GridServices";
import Banner from "./Banner";
import HeaderPOD, { ContainerPP } from "./productspod.style";

const ProductsPOD = (props) => {
  const { getProducts } = props;

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
              <Box>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                  }}
                  src={item?.thumbnail}
                />
                <Box className="content">
                  <h3 className="title-medusa">{item.title}</h3>
                  <Box className="text">
                    {item.description && (
                      <ReactMarkdown>{item.description}</ReactMarkdown>
                    )}
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
      </Container>
    </SectionWrapper>
  );
};

export default ProductsPOD;
