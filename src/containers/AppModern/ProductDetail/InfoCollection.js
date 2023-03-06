import Box from "common/components/Box";
import React from "react";
import KeyFeatures1 from "../../../common/assets/image/icon1-key-feature.svg";
import CareImage1 from "common/assets/image/icon-care1.svg";
import { Table } from "common/components/Table/styleTable";

const keyfeatures = [
  {
    media: `${KeyFeatures1?.src}`,
    title: "Feature title.1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat dictum odio at semper. Suspendisse vulputate euismod nibh, in tristique libero suscipit vitae."
  },
  {
    media: `${KeyFeatures1?.src}`,
    title: "Feature title.1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat dictum odio at semper. Suspendisse vulputate euismod nibh, in tristique libero suscipit vitae."
  },
  {
    media: `${KeyFeatures1?.src}`,
    title: "Feature title.1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat dictum odio at semper. Suspendisse vulputate euismod nibh, in tristique libero suscipit vitae."
  }
];
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
const InfoCollection = () => {
  return (
    <>
      <Box className="container-features">
        <Box className="wrapper-feature">
          <Box className="feature-title">
            <h2>About</h2>
          </Box>
          <Box className="about-desc">
            <p>
              The AS Colour Unisex Barnard tank top is the tank for you. Make it
              your own by customizing it to fit it’s cool cut off sleeve look.
              It features low and raw (unsewn) armholes that are perfect for the
              gym. It is a regular fit sleeveless tank tee made from 100% combed
              cotton.
              <br />
              *AS Colour is an Ethical Fashion brand
            </p>
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
              {keyfeatures.map((item, index) => (
                <Box className="wrapper-desc" key={index}>
                  <img
                    src={item?.media}
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
              <Box className="icon-image">
                <img src={CareImage1?.src} alt="Care Image 1" />
              </Box>
              <Box className="icon-image">
                <img src={CareImage1?.src} alt="Care Image 1" />
              </Box>
              <Box className="icon-image">
                <img src={CareImage1?.src} alt="Care Image 1" />
              </Box>
              <Box className="icon-image">
                <img src={CareImage1?.src} alt="Care Image 1" />
              </Box>
              <Box className="icon-image">
                <img src={CareImage1?.src} alt="Care Image 1" />
              </Box>
            </Box>
            <Box className="care-desc">
              <p>
                Machine wash: warm (max 40C or 105F); Non-chlorine: bleach as
                needed; Tumble dry: medium; Iron, steam or dry: low heat; Do not
                dryclean.
              </p>
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
    </>
  );
};
export default InfoCollection;
