import CareImage1 from "common/assets/image/icon-care1.svg";
import CareImage2 from "common/assets/image/icon-care2.svg";
import CareImage3 from "common/assets/image/icon-care3.svg";
import CareImage4 from "common/assets/image/icon-care4.svg";
import CareImage5 from "common/assets/image/icon-care5.svg";
import Box from "common/components/Box";
import { Table } from "common/components/Table/styleTable";
import React from "react";

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
const InfoCollection = (props) => {
  const { collection } = props;
  const features = [
    {
      media: `${collection.metadata?.icon1 ?? ""}`,
      title: `${collection?.metadata?.feature1 ?? ""}`,
      description: `${collection?.metadata?.featureDesc1 ?? ""}`
    },
    {
      media: `${collection.metadata?.icon2 ?? ""}`,
      title: `${collection?.metadata?.feature2 ?? ""}`,
      description: `${collection?.metadata?.featureDesc2 ?? ""}`
    },
    {
      media: `${collection.metadata?.icon3 ?? ""}`,
      title: `${collection?.metadata?.feature3 ?? ""}`,
      description: `${collection?.metadata?.featureDesc3 ?? ""}`
    },
    {
      media: `${collection.metadata?.icon4 ?? ""}`,
      title: `${collection?.metadata?.feature4 ?? ""}`,
      description: `${collection?.metadata?.featureDesc4 ?? ""}`
    }
  ];
  return (
    <React.Fragment>
      <Box className="container-features">
        <Box className="wrapper-feature">
          <Box className="feature-title">
            <h2>About</h2>
          </Box>
          <Box className="about-desc">
            <p>{collection.metadata?.about}</p>
          </Box>
        </Box>
      </Box>
      <Box className="container-features">
        <Box className="wrapper-feature">
          <Box className="feature-title">
            <h2>Key features</h2>
          </Box>
          <Box className="wrapper-content">
            <Box className="key-features-desc">
              {features.map((item, index) => (
                <Box className="wrapper-desc" key={index}>
                  <img
                    src={item?.media}
                    style={{ display: item.media ? "block" : "none" }}
                    alt="Key features.1"
                    className="img-feature"
                  />
                  <p className="desc-title">{item?.title}</p>
                  <p className="desc-detail">{item?.description}</p>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container-features">
        <Box className="wrapper-feature">
          <Box className="feature-title">
            <h2>Care instructions</h2>
          </Box>
          <Box className="wrapper-content">
            <Box className="care-icons">
              {iconCare.map((items, index) => (
                <Box className="icon-image" key={index}>
                  <img src={items.image} alt="Icon Care" />
                </Box>
              ))}
            </Box>
            <Box className="care-desc">
              <p>{collection.metadata?.careinstructions}</p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="container-features">
        <Box className="wrapper-feature">
          <Box className="feature-title">
            <h2>Size guide</h2>
          </Box>
          <Box className="wrapper-content">
            <p>All measurements in the table refer to product dimensions.</p>
            <Box className="container-table">
              <Box className="wrapper-table">
                <Box className="table-header">
                  <p>Imperial</p>
                </Box>
                <Box className="table-content">
                  <Box className="content-detail">
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
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
export default InfoCollection;
