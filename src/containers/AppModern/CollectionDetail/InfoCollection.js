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

const parramtable = [
  {
    size: "XS",
    valuewith: "17.72",
    valuelength: "27.17"
  },
  {
    size: "S",
    valuewith: "18.90",
    valuelength: "28.35"
  },
  {
    size: "M",
    valuewith: "20.08",
    valuelength: "29.53"
  },
  {
    size: "L",
    valuewith: "21.26",
    valuelength: "30.71"
  },
  {
    size: "XL",
    valuewith: "22.44",
    valuelength: "31.89"
  },
  {
    size: "2XL",
    valuewith: "23.62",
    valuelength: "33.07"
  }
];
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
const BoxFeatureContainer = styled(Box)`
  padding-top: 40px;
  padding-bottom: 40px;
  display: block;
  border-bottom: 1px solid #e3e4e5;
`;
const BoxWrapper = styled(Box)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const BoxTitle = styled(Box)`
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
const BoxAbout = styled(Box)`
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
  margin-bottom: calc(1rem * -2);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-left: calc(1rem * -1);
  margin-right: calc(1rem * -1);
  padding: 0px;
`;
const DescWrapp = styled(Box)`
  margin-bottom: calc(1rem * 2);
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
  margin-left: calc(8px * -1);
  margin-right: calc(8px * -1);
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
const InfoCollection = (props) => {
  const { collection } = props;
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
    <React.Fragment>
      {collection?.metadata?.about && (
        <BoxFeatureContainer>
          <BoxWrapper>
            <BoxTitle>
              <h2>About</h2>
            </BoxTitle>
            <BoxAbout>
              <p>{collection?.metadata?.about}</p>
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
      <BoxFeatureContainer>
        <BoxWrapper>
          <BoxTitle>
            <h2>Size guide</h2>
          </BoxTitle>
          <BoxWrapContent>
            <p>All measurements in the table refer to product dimensions.</p>
            <Box>
              <Box>
                <TableHeader>
                  <p>Imperial</p>
                </TableHeader>
                <Box>
                  <Box>
                    <Table>
                      <thead>
                        <tr>
                          <th>
                            <div />
                          </th>
                          {parramtable.map((item, index) => (
                            <th className="align-top" key={index}>
                              <div className="cover-content">
                                <div className="content-one">{item.size}</div>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <React.Fragment>
                          <tr>
                            <td className="pcTitle">Width,in</td>
                            {parramtable.map((items, index) => (
                              <td className="value" key={index}>
                                {items.valuewith}
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td className="pcTitle">Length,in</td>
                            {parramtable.map((items, index) => (
                              <td className="value" key={index}>
                                {items.valuelength}
                              </td>
                            ))}
                          </tr>
                        </React.Fragment>
                      </tbody>
                    </Table>
                  </Box>
                </Box>
              </Box>
            </Box>
          </BoxWrapContent>
        </BoxWrapper>
      </BoxFeatureContainer>
    </React.Fragment>
  );
};
export default InfoCollection;
