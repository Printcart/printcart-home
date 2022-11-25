import Box from "common/components/Box";
import React from "react";
import { GridServices } from "./GridServices";
import ServicesList from "./ServicesList";

const ServicesOther = (props) => {
  const { serviceRealted } = props;
  return (
    <Box className="container-related">
      <h1 className="title-related">Other Related Services</h1>
      <GridServices>
        {serviceRealted.map((items, index) => (
          <ServicesList key={index} serviceList={items} />
        ))}
      </GridServices>
    </Box>
  );
};
export default ServicesOther;
