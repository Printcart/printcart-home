import CareImage1 from "common/assets/image/icon-care1.svg";
import CareImage2 from "common/assets/image/icon-care2.svg";
import CareImage3 from "common/assets/image/icon-care3.svg";
import CareImage4 from "common/assets/image/icon-care4.svg";
import CareImage5 from "common/assets/image/icon-care5.svg";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import { Table } from "common/components/Table/styleTable";
import styled from "styled-components";

const iconCare = [
  {
    image: CareImage1.src,
  },
  {
    image: CareImage2.src,
  },
  {
    image: CareImage3.src,
  },
  {
    image: CareImage4.src,
  },
  {
    image: CareImage5.src,
  },
];
export const BoxFeatureContainer = styled(Box)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: block;
  margin-left: 17px;
  margin-right: 17px;
  border-bottom: 1px solid #e3e4e5;
  @media only screen and (max-width: 1440px) {
    margin-left: 17px;
    margin-right: 17px;
  }
  @media only screen and (max-width: 1366px) {
    margin-left: 30px;
    margin-right: 30px;
  }
`;
export const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
export const BoxTitle = styled(Box)`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
  line-height: 2rem;
  position: relative;
  flex: 0 0 33.3%;
  max-width: 33.3%;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const BoxAbout = styled(Box)`
  margin-top: 0;
  position: relative;
  width: 100%;
  flex: 0 0 66.6%;
  max-width: 66.6%;
  @media only screen and (max-width: 768px) {
    flex: none;
    max-width: 100%;
  }
`;
const BoxWrapContent = styled(Box)`
  margin-top: 0;
  position: relative;
  width: 100%;
  flex: 0 0 66.6%;
  max-width: 66.6%;

  @media only screen and (max-width: 768px){
    max-width: 100%;
  }
`;
const DescFeature = styled(Box)`
  margin-bottom: -2rem;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 0px;
`;
const DescWrapp = styled(Box)`
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  flex: 0 0 50%;
  max-width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (max-width: 768px){
    margin-left:10px;
    flex: 2 0 50%;
    max-width: 100%;
  }
`;
const FeatureImage = styled(Image)`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
`;
const CareIcon = styled(Box)`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
  padding: 0px;
`;
const IconImage = styled(Box)`
  position: relative;
  flex: 0 0 auto;
  width: auto;
  padding-left: 8px;
  padding-right: 8px;
`;
const TableHeader = styled(Box)`
  p {
    color: #424dc6;
  }
`;
const FeatureDesc = styled.p`
  color: #9fa4a5;
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 400;
`;
const WrappTable = styled(Box)`
  display: block;
  margin-top: 16px;
  overflow-x: auto;
`;

const InfoCollection = (props) => {
  const { collection } = props;
  const formatSize = collection?.metadata?.size;
  const sizeNew = formatSize?.split(",");

  const formatSizeWidth = collection?.metadata?.widthSize;
  const widthSize = formatSizeWidth?.split(",");

  const formatSizeHeight = collection?.metadata?.heightSize;
  const heightSize = formatSizeHeight?.split(",");

  const formatDepthSize = collection?.metadata?.depthSize;
  const depthSize = formatDepthSize?.split(",");

  const formatCircumSize = collection?.metadata?.circum;
  const circum = formatCircumSize?.split(",");

  const formatBillHeight = collection?.metadata?.billLength;
  const billLength = formatBillHeight?.split(",");

  const formatCrownheight = collection?.metadata?.crownHeight;
  const crownHeight = formatCrownheight?.split(",");

  const formatEurSize = collection?.metadata?.eurSize;
  const eurSize = formatEurSize?.split(",");

  const formatUsSize = collection?.metadata?.usSize;
  const usSize = formatUsSize?.split(",");

  const formatInsoleLength = collection?.metadata?.insoleLength;
  const insoleLength = formatInsoleLength?.split(",");

  const formatBustSize = collection?.metadata?.bustSize;
  const bustSize = formatBustSize?.split(",");

  const formatWaistSize = collection?.metadata?.waistSize;
  const waistSize = formatWaistSize?.split(",");

  const formatHipSize = collection?.metadata?.hipSize;
  const hipSize = formatHipSize?.split(",");

  const features = [
    {
      media: `${collection?.metadata?.icon1 ?? ""}`,
      title: `${collection?.metadata?.feature1 ?? ""}`,
      description: `${collection?.metadata?.featureDesc1 ?? ""}`,
    },
    {
      media: `${collection?.metadata?.icon2 ?? ""}`,
      title: `${collection?.metadata?.feature2 ?? ""}`,
      description: `${collection?.metadata?.featureDesc2 ?? ""}`,
    },
    {
      media: `${collection?.metadata?.icon3 ?? ""}`,
      title: `${collection?.metadata?.feature3 ?? ""}`,
      description: `${collection?.metadata?.featureDesc3 ?? ""}`,
    },
    {
      media: `${collection?.metadata?.icon4 ?? ""}`,
      title: `${collection?.metadata?.feature4 ?? ""}`,
      description: `${collection?.metadata?.featureDesc4 ?? ""}`,
    },
  ];
  return (
    <>
      {collection?.metadata?.about && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h3>About</h3>
            </BoxTitle>
            <BoxAbout>
              <p>{collection?.metadata?.about}</p>
            </BoxAbout>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
      {/* {collection?.metadata?.short_description && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h3>Description</h3>
            </BoxTitle>
            <BoxAbout>
              <p>{collection?.metadata?.short_description}</p>
            </BoxAbout>
          </BoxWrapper>
        </BoxFeatureContainer>
      )} */}
      {collection?.metadata?.feature1 && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h3>Key features</h3>
            </BoxTitle>
            <BoxWrapContent>
              <DescFeature>
                {features.map((item, index) => (
                  <DescWrapp key={index}>
                    <FeatureImage
                      src={item?.media}
                      style={{ display: item.media ? "block" : "none" }}
                      alt="Key features.1"
                    />
                    <Heading
                      content={item?.title}
                      fontWeight="400"
                      mb="8px"
                      as="h3"
                    />
                    <FeatureDesc>{item?.description}</FeatureDesc>
                  </DescWrapp>
                ))}
              </DescFeature>
            </BoxWrapContent>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
      {collection?.metadata?.careinstructions && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h3>Care instructions</h3>
            </BoxTitle>
            <BoxWrapContent>
              {/* <CareIcon>
                {iconCare.map((items, index) => (
                  <IconImage key={index}>
                    <Image src={items.image} alt="Icon Care" />
                  </IconImage>
                ))}
              </CareIcon> */}
              <Box>
                <p>{collection?.metadata?.careinstructions}</p>
              </Box>
            </BoxWrapContent>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
      {collection?.metadata?.size && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h3>Size guide</h3>
            </BoxTitle>
            <BoxWrapContent>
              <p>All measurements in the table refer to product dimensions.</p>
              <TableHeader>
                <p>Metric</p>
              </TableHeader>
              <WrappTable>
                <Box>
                  <Table>
                    <thead>
                      <tr>
                        <th></th>
                        {sizeNew?.length > 1 ? (
                          sizeNew.map((item, index) => (
                            <th className="align-top" key={index}>
                              <div className="cover-content">
                                <div className="content-one">{item}</div>
                              </div>
                            </th>
                          ))
                        ) : (
                          <th
                            className="align-top"
                            colSpan={
                              eurSize?.length ||
                              usSize?.length ||
                              insoleLength?.length
                            }
                          >
                            <div className="cover-content">
                              <div className="content-one">{sizeNew}</div>
                            </div>
                          </th>
                        )}
                      </tr>
                    </thead>
                    <tbody>
                      {widthSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Width</td>
                          {widthSize.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {heightSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Length</td>
                          {heightSize.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {depthSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Depth</td>
                          {depthSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {circum?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Circumference</td>
                          {circum?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {billLength?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Bill length</td>
                          {billLength?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {crownHeight?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Crown height</td>
                          {crownHeight?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {eurSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">EUR Size</td>
                          {eurSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {usSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">US Size</td>
                          {usSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {insoleLength?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Insole Length</td>
                          {insoleLength?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {bustSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Bust</td>
                          {bustSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {waistSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Waist</td>
                          {waistSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                      {hipSize?.length > 0 && (
                        <tr>
                          <td className="pcTitle">Hip</td>
                          {hipSize?.map((items, index) => (
                            <td className="value" key={index}>
                              {items}
                            </td>
                          ))}
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </Box>
              </WrappTable>
            </BoxWrapContent>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
    </>
  );
};
export default InfoCollection;
