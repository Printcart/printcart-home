import CareImage1 from "common/assets/image/icon-care1.svg";
import CareImage2 from "common/assets/image/icon-care2.svg";
import CareImage3 from "common/assets/image/icon-care3.svg";
import CareImage4 from "common/assets/image/icon-care4.svg";
import CareImage5 from "common/assets/image/icon-care5.svg";
import Box from "common/components/Box";
import Heading from "common/components/Heading";
import Image from "common/components/Image";
import { Table } from "common/components/Table/styleTable";
import React from "react";
import styled from "styled-components";

const iconCare = [
  {
    image: CareImage1.src
  },
  {
    image: CareImage2.src
  },
  {
    image: CareImage3.src
  },
  {
    image: CareImage4.src
  },
  {
    image: CareImage5.src
  }
];
export const BoxFeatureContainer = styled(Box)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: block;
  border-bottom: 1px solid #e3e4e5;
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
`;
export const BoxAbout = styled(Box)`
  margin-top: 0;
  position: relative;
  width: 100%;
  flex: 0 0 66.6%;
  max-width: 66.6%;
`;
const BoxWrapContent = styled(Box)`
  margin-top: 0;
  position: relative;
  width: 100%;
  flex: 0 0 66.6%;
  max-width: 66.6%;
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
    color: #29ab51;
    border-bottom: 1px solid #d3d3d3;
    cursor: pointer;
  }
`;
const FeatureDesc = styled.p`
  color: #9fa4a5;
  font-size: 1em;
  line-height: 1.25rem;
  font-weight: 400;
`;

const AboutCollection = styled(Box)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: block;
  border-bottom: 1px solid #e3e4e5;
`;
const InfoCollection = (props) => {
  const { collection } = props;
  const formatSizeWidth = collection?.metadata?.widthSize;
  const widthSize = formatSizeWidth?.split(",");
  const formatSizeHeight = collection?.metadata?.heightSize;
  const heightSize = formatSizeHeight?.split(",");
  const formatSize = collection?.metadata?.size;
  const sizeNew = formatSize?.split(",");
  const features = [
    {
      media: `${collection?.metadata?.icon1 ?? ""}`,
      title: `${collection?.metadata?.feature1 ?? ""}`,
      description: `${collection?.metadata?.featureDesc1 ?? ""}`
    },
    {
      media: `${collection?.metadata?.icon2 ?? ""}`,
      title: `${collection?.metadata?.feature2 ?? ""}`,
      description: `${collection?.metadata?.featureDesc2 ?? ""}`
    },
    {
      media: `${collection?.metadata?.icon3 ?? ""}`,
      title: `${collection?.metadata?.feature3 ?? ""}`,
      description: `${collection?.metadata?.featureDesc3 ?? ""}`
    },
    {
      media: `${collection?.metadata?.icon4 ?? ""}`,
      title: `${collection?.metadata?.feature4 ?? ""}`,
      description: `${collection?.metadata?.featureDesc4 ?? ""}`
    }
  ];
  return (
    <>
      {collection?.metadata?.about && (
        <AboutCollection>
          <BoxWrapper>
            <BoxTitle>
              <h2>About</h2>
            </BoxTitle>
            <BoxAbout>
              <p>{collection?.metadata?.about}</p>
            </BoxAbout>
          </BoxWrapper>
        </AboutCollection>
      )}
      {collection?.metadata?.short_description && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h2>Description</h2>
            </BoxTitle>
            <BoxAbout>
              <p>{collection?.metadata?.short_description}</p>
            </BoxAbout>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
      {collection?.metadata?.feature1 && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h2>Key features</h2>
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
              <h2>Care instructions</h2>
            </BoxTitle>
            <BoxWrapContent>
              <CareIcon>
                {iconCare.map((items, index) => (
                  <IconImage key={index}>
                    <Image src={items.image} alt="Icon Care" />
                  </IconImage>
                ))}
              </CareIcon>
              <Box>
                <p>{collection?.metadata?.careinstructions}</p>
              </Box>
            </BoxWrapContent>
          </BoxWrapper>
        </BoxFeatureContainer>
      )}
      {collection?.metadata?.widthSize &&
        collection?.metadata?.heightSize &&
        collection?.metadata?.size && (
          <BoxFeatureContainer>
            <BoxWrapper>
              <BoxTitle>
                <h2>Size guide</h2>
              </BoxTitle>
              <BoxWrapContent>
                <p>
                  All measurements in the table refer to product dimensions.
                </p>
                <TableHeader>
                  <p>Imperial</p>
                </TableHeader>
                <Table>
                  <thead>
                    <tr>
                      <th></th>
                      {sizeNew.map((item, index) => (
                        <th className="align-top" key={index}>
                          <div className="cover-content">
                            <div className="content-one">{item}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <React.Fragment>
                      <tr>
                        <td className="pcTitle">Width,in</td>
                        {widthSize.map((items, index) => (
                          <td className="value" key={index}>
                            {items}
                          </td>
                        ))}
                      </tr>
                      <tr>
                        <td className="pcTitle">Length,in</td>
                        {heightSize.map((items, index) => (
                          <td className="value" key={index}>
                            {items}
                          </td>
                        ))}
                      </tr>
                    </React.Fragment>
                  </tbody>
                </Table>
              </BoxWrapContent>
            </BoxWrapper>
          </BoxFeatureContainer>
        )}
    </>
  );
};
export default InfoCollection;
