import Box from "common/components/Box";
import Button from "common/components/Button";
import Card from "common/components/Card";
import Heading from "common/components/Heading";
import SectionWrapper from "containers/AppModern/Features/features.style";
import Link from "next/link";
import styled from "styled-components";
import Container from "../../../common/components/UI/Container";
import { GridServices } from "../InfoServices/GridServices";
import Banner from "./Banner";
import TagsFilter from "./TagsFilter";
import {
  ContainerPP,
  HeaderBox,
  TitleBox,
  TitleHead
} from "./productspod.style";

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
  border-radius: 6px;
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
const HeadingCatalog = styled(Heading)`
  font-size: 2rem;
`;

const ContainerProducts = styled(Box)`
  display: block;
  position: relative;
  min-height: 402px;
  @media (min-width: 1168px) {
    min-height: 416px;
  }
  @media (min-width: 960px) {
    min-height: 380px;
  }
  @media (min-width: 840px) {
    min-height: 418px;
  }
`;
const ContentProducts = styled(Box)`
  position: relative;
  display: block;
  min-height: 54px;
`;
const GridProducts = styled(Box)`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overscroll-behavior-x: contain;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  list-style: none;
  scroll-behavior: smooth;
  align-items: flex-start;
`;

export const BoxDesc = styled(Box)`
  height: 90px;
  font-size: 16px;
  color: #5c5c5c;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

const ProductsPOD = (props) => {
  const { getProducts, ecoFilter, aopFilter, neckFilter } = props;
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
  return (
    <>
      <SectionWrapper id="features">
        <Container>
          <Banner />
          {/* <HeadingCatalog
            content="Printcart's Product Catalog"
            mb="3rem"
            lineHeight="3.5rem"
          /> */}
          {/* <ExploreProducts /> */}
          <TagsFilter
            dataFilter={getProducts}
            status="New"
            title="New Products"
          />
          <TagsFilter
            dataFilter={ecoFilter}
            status="Eco-friendly"
            title="Eco-friendly"
          />
          <TagsFilter dataFilter={aopFilter} title="AOP Clothing" />
          <TagsFilter dataFilter={neckFilter} title="Neck Labels" />
          <ContainerPP>
            <WrappProvider>
              <WrappBox>
                {/* <ProviderHeading
                  lineHeight="1.2"
                  fontWeight="700"
                  content="Print Provider"
                /> */}
                <PDescription>
                  Bridge the Gap Between Selling and Production
                </PDescription>
                <Box className="btnSee">
                  <ButtonProvider title="Create POD Printer store" />
                </Box>
              </WrappBox>
            </WrappProvider>
          </ContainerPP>
          {/* {result && (
            <HeaderBox>
              <TitleBox>
                <TitleHead>Collections</TitleHead>
              </TitleBox>
            </HeaderBox>
          )}
          <GridServices>
            {result.map((items, index) => (
              <CardCus key={index}>
                <Link href={`/collection/${items?.id}`}>
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
                          width: "40%"
                        }}
                        alt={items?.title}
                      />
                    </BoxCus>
                  </a>
                </Link>
              </CardCus>
            ))}
          </GridServices> */}
        </Container>
      </SectionWrapper>
    </>
  );
};
export default ProductsPOD;
