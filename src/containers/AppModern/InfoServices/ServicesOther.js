import Box from "common/components/Box";
import React from "react";
import styled from "styled-components";
import { GridServices } from "./GridServices";
import ServicesList from "./ServicesList";

const TitleOther = styled.h1`
  font-weight: 500;
  color: #5c5c5c;
  margin: 0 40px;
  padding-top: 20px;
`;
const ServicesOther = (props) => {
  const { serviceRealted } = props;
  return (
    <Box className="container-related">
      {serviceRealted.length > 0 && (
        <>
          <TitleOther>Other Related Services</TitleOther>
          <GridServices>
            {serviceRealted.map((items, index) => (
              <ServicesList key={index} serviceList={items} />
            ))}
          </GridServices>
        </>
      )}
    </Box>
  );
};
export default ServicesOther;
