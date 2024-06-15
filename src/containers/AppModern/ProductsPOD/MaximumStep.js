import React from "react";
import { Container, CardContainer } from "./productspod.style";
import MaximumStepCard from "./MaximumStepCard";

import designImage from "../../../common/assets/image/design.jpg";
import sellingImage from "../../../common/assets/image/selling.jpg";
import processingImage from "../../../common/assets/image/processing.jpg";
import profitImage from "../../../common/assets/image/profit.jpg";

const MaximumStep = () => {
  return (
    <Container>
      <h2>Maximum your Profit</h2>
      <p style={{ marginTop: "-4px", marginBottom: "50px", maxWidth: "500px", textAlign: "center" }}>
        With Printcart, achieving maximum profit is not just a goal—it's a
        reality. Join a community of creative entrepreneurs and start turning
        your ideas into revenue today.
      </p>
      <CardContainer>
        <MaximumStepCard
          stepNumber={1}
          title="Design and Create"
          src={designImage}
          alt="Design and Create"
          text="Use Printcart's tools to customize and design your products with graphics, text, and images."
        />
        <MaximumStepCard
          stepNumber={2}
          title="List and Sell"
          src={sellingImage}
          alt="List and Sell"
          text="Add your customized products to your online store or Printcart's marketplace, setting prices and descriptions."
        />
        <MaximumStepCard
          stepNumber={3}
          title="Order Processing"
          src={processingImage}
          alt="Order Processing"
          text="When a customer places an order, Printcart handles production, quality control, packaging, and shipping."
        />
        <MaximumStepCard
          stepNumber={4}
          title="Profit and Growth"
          src={profitImage}
          alt="Profit and Growth"
          text="Receive your profits from each sale and use analytics to refine your business strategy and expand your product offerings."
        />
      </CardContainer>
    </Container>
  );
};

export default MaximumStep;
