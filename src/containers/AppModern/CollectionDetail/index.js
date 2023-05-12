import Box from "common/components/Box";
import Card from "common/components/Card";
import CheckBox from "common/components/Checkbox";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { ContentWrapper, SectionHeader } from "../appModern.style";
import { GridServices } from "../InfoServices/GridServices";
import TitlePathMed from "../ProductDetail/TitlePathMed";
import WrapperServices from "../ServiceDetail/WrapperService";

const filter = [
  {
    name: "USA"
  },
  {
    name: "CANADA"
  },
  {
    name: "UNITED KINGDOM"
  },
  {
    name: "EUROPE"
  }
];
const CardItems = styled(Card)`
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgb(0 0 50 / 25%);
  &:hover {
    box-shadow: 5px 10px 10px 2px rgb(0 0 50 / 25%);
    transform: translate(0, -7px);
    transition: box-shadow 0.3s ease-out, transform 0.3s ease-out;
  }
  @media only screen and (max-width: 480px) {
    padding: 25px 25px 30px;
  }
`;
const WrappProduc = styled(Box)`
  margin-bottom: 2rem;
`;
const BoxHeader = styled(Box)`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 0;
  padding-right: 0;
`;
const GridProducts = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 0;
`;
const WrapperFilter = styled(Box)`
  padding-left: 1rem;
  padding-right: 1rem;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 0 0 25%;
  max-width: 25%;
`;
const WrapperProduct = styled(Box)`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  flex: 00 75%;
  max-width: 75%;
`;

const BoxFilter = styled(Box)`
  margin-top: 15px;
  display: block;
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: #e3e4e5;
  box-sizing: inherit;
`;
const TitleFilter = styled(Box)`
  padding-left: 0;
  padding-right: 0;
  display: flex;
  cursor: pointer;
`;
const TextTitle = styled(Box)`
  color: #17262b;
  display: flex;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.5rem;
`;
const StatusTitle = styled(Box)`
  margin-left: 1rem;
  flex-grow: 100;
`;
const Status = styled.small`
  border: 1px solid #248e4c;
  background-color: #e2f7e3;
  color: #1f6b45;
  display: inline-flex;
  align-items: center;
  height: 24px;
  padding: 0.125rem 0.5rem;
  border-radius: 3px;
  font-size: 0.875em;
  line-height: 1.25rem;
`;
const ContentFilter = styled(Box)`
  margin-top: 0px;
`;
const WapperContent = styled(Box)`
  padding: 5px 10px 10px;
`;
const ContainerContent = styled(Box)`
  margin-top: 5px;
`;
const Boxfield = styled(Box)`
  display: flex;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 3px;
  padding: 0.25rem;
  margin: -0.25rem;
`;
const BoxName = styled(Box)`
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
`;
const Input = styled.input`
  display: none;
  outline: none;
`;
const CheckBoxFilter = styled(CheckBox)`
  margin-top: 20px;
  label {
    cursor: pointer;
  }
  span {
    color: #17262b !important;
    font-size: 1em !important;
    line-height: 1.5rem !important;
    font-weight: 400 !important;
  }
`;
const GridFilter = styled(GridServices)`
  margin-top: calc(-1rem);
  margin-bottom: calc(-1rem);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: calc(-1rem);
  margin-right: calc(-1rem);
`;

const WrapImage = styled(Box)`
  position: relative;
  display: block;
  overflow: hidden;
  padding-bottom: 100%;
  text-align: center;
`;
const WrappContent = styled(Box)`
  padding: 16px 16px 8px;
`;
const PTitle = styled.p`
  margin: 0;
  max-height: 48px;
  overflow: hidden;
  font-size: 1.25em;
  line-height: 1.5rem;
  color: #17262b;
`;
const PByVendor = styled.p`
  margin: 0;
  color: #757c7e;
  font-size: 0.875em;
  line-height: 1.25rem;
  font-weight: 400;
`;
const VendorPrice = styled(Box)`
  margin: 8px 0 0;
`;
const PPrice = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.5rem;
  color: #17262b;
`;
const PDiscount = styled.p`
  font-size: 1em;
  margin: 0;
  line-height: 1.5rem;
  color: #29ab51;
`;
const BoxDesc = styled(Box)`
  height: 90px;
  font-size: 17px;
  color: #5c5c5c;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;
const BoxSlogan = styled(Box)`
  padding: 48px 0;
  background-color: #002e47;
`;
const TitleHeading = styled(Heading)`
  color: #ddd !important;
  font-size: 32px !important;
  margin: 40px !important;
`;
const CollectionDetail = (props) => {
  const { collection } = props;
  const title = collection?.title;
  return (
    <ContentWrapper>
      <WrapperServices>
        <TitlePathMed currentCat={collection} />
        <SectionHeader>
          <BoxSlogan>
            <Container>
              <TitleHeading
                lineHeight="36px"
                mb="27px"
                fontWeight="500"
                textAlign="center"
                content={title && `Products in the ${title} Category`}
              />
            </Container>
          </BoxSlogan>
        </SectionHeader>
        <Container>
          <WrappProduc>
            <BoxHeader>
              <Heading content={title} lineHeight="2.5rem" fontWeight="600" />
            </BoxHeader>
            {collection?.metadata?.short_description}
            <GridProducts>
              <WrapperFilter>
                <BoxFilter>
                  <Box>
                    <TitleFilter>
                      <TextTitle>
                        Filter by Vendor
                        <StatusTitle>
                          <Status>New</Status>
                        </StatusTitle>
                      </TextTitle>
                    </TitleFilter>
                    <ContentFilter>
                      <WapperContent>
                        <ContainerContent>
                          {filter.map((item, index) => (
                            <Boxfield key={index}>
                              <Label>
                                <BoxName>
                                  <CheckBoxFilter labelText={item.name} />
                                </BoxName>
                              </Label>
                            </Boxfield>
                          ))}
                        </ContainerContent>
                      </WapperContent>
                    </ContentFilter>
                  </Box>
                </BoxFilter>
              </WrapperFilter>
              {collection?.products?.length > 0 && (
                <WrapperProduct>
                  <GridFilter>
                    {collection?.products.map(
                      (item, index) =>
                        item.status === "published" && (
                          <CardItems key={index}>
                            <Box>
                              <WrapImage>
                                <Link href={`/product/${item?.id}`}>
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
                                      src={item?.thumbnail}
                                    />
                                  </a>
                                </Link>
                              </WrapImage>
                              <WrappContent>
                                <Link href={`/product/${item?.id}`}>
                                  <a title={`View to ${item.title}`}>
                                    <PTitle>{item.title}</PTitle>
                                  </a>
                                </Link>
                                <PByVendor>By [Vendor_Name]. qty</PByVendor>
                                <VendorPrice>
                                  <PPrice>From USD 9.38</PPrice>
                                  <PDiscount>
                                    From USD 5.92 with Printcart
                                  </PDiscount>
                                </VendorPrice>
                                <BoxDesc>
                                  {item.description && (
                                    <ReactMarkdown>
                                      {item.description}
                                    </ReactMarkdown>
                                  )}
                                </BoxDesc>
                              </WrappContent>
                            </Box>
                          </CardItems>
                        )
                    )}
                  </GridFilter>
                </WrapperProduct>
              )}
            </GridProducts>
          </WrappProduc>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
