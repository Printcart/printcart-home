import Box from "common/components/Box";
import CheckBox from "common/components/Checkbox";
import Heading from "common/components/Heading";
import Container from "common/components/UI/Container";
import styled from "styled-components";
import WrapperServices from "../ServiceDetail/WrapperService";
import { ContentWrapper, SectionHeader } from "../appModern.style";
import VendorInfo from "./VendorInfo";

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
const WrapVendor = styled(Box)`
  margin-bottom: 3.5rem;
`;

const CollectionDetail = (props) => {
  const { collection, vendors, products } = props;
  const number = products.length - 1;
  const dataProduct = products[number];

  const dataVendor = Array.from(
    new Set(products.map((item) => item.vendor.id))
  ).map((id) => {
    return products.find((item) => item.vendor.id === id);
  });
  const title = collection?.title;

  return (
    <ContentWrapper>
      <WrapperServices>
        {/* <TitlePathMed currentCat={collection} /> */}
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
              <Heading
                content={title}
                lineHeight="2.5rem"
                fontWeight="600"
                as="h1"
                fontSize="2rem"
              />
            </BoxHeader>
            <Box>{collection?.metadata?.short_description}</Box>
            {/* {products && (
              <WrappInfo>
                <ImageGallery product={dataProduct} />
                <ProductInfo product={collection} />
              </WrappInfo>
            )} */}
            <WrapVendor>
              {dataVendor.map((item) => (
                <VendorInfo key={item.id} data={item} />
              ))}
            </WrapVendor>
          </WrappProduc>
        </Container>
      </WrapperServices>
    </ContentWrapper>
  );
};
export default CollectionDetail;
