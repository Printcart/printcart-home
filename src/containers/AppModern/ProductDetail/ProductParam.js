import { Tab } from "@headlessui/react";
import Box from "common/components/Box";
import React from "react";

const ProductParam = (props) => {
  const { product } = props;
  return (
    <Tab.Panel className="tabPanel">
      <Box className="wrapperProduct">
        <Box className="infoLeft">
          <Box>
            <span className="valuematerial">Material</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </Box>
          <Box>
            <span className="valuematerial">Country of origin</span>
            <p>{product.origin_country ? product.origin_country : "-"}</p>
          </Box>
          <Box>
            <span className="valuematerial">Type</span>
            <p>{product.type ? product.type.value : "-"}</p>
          </Box>
        </Box>
        <Box className="infoRight">
          <Box>
            <span className="valuematerial">Weight</span>
            <p>{product.weight ? `${product.weight} g` : "-"}</p>
          </Box>
          <Box>
            <span className="valuematerial">Dimensions</span>
            <p>
              {product.length && product.width && product.height
                ? `${product.length}L x ${product.width}W x ${product.height}H`
                : "-"}
            </p>
          </Box>
        </Box>
      </Box>
    </Tab.Panel>
  );
};
export default ProductParam;
