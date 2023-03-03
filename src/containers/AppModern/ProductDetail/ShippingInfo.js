import { Tab } from "@headlessui/react";
import Box from "common/components/Box";
import React from "react";
import FastDelivery, { Back, Refresh } from "./FastDelivery";

const ShippingInfo = () => {
  return (
    <Tab.Panel className="tabPanel">
      <Box className="wrapperShipping">
        <Box className="shippingDetail">
          <FastDelivery />
          <Box>
            <span className="titleShipping">Fast delivery</span>
            <p className="descShipping">
              Your package will arrive in 3-5 business days at your pick up
              location or in the comfort of your home.
            </p>
          </Box>
        </Box>
        <Box className="shippingDetail">
          <Refresh />
          <Box>
            <span className="titleShipping">Simple exchanges</span>
            <p className="descShipping">
              Is the fit not quite right? No worries - we&apos;ll exchange your
              product for a new one.
            </p>
          </Box>
        </Box>
        <Box className="shippingDetail">
          <Back />
          <Box>
            <span className="titleShipping">Easy returns</span>
            <p className="descShipping">
              Just return your product and we&apos;ll refund your money. No
              questions asked – we&apos;ll do our best to make sure your return
              is hassle-free.
            </p>
          </Box>
        </Box>
      </Box>
    </Tab.Panel>
  );
};
export default ShippingInfo;
