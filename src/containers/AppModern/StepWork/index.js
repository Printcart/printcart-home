import Box from "common/components/Box";
import React from "react";
import StepworkWrapper from "./stepwork.style";
import StepFirst from "common/assets/image/appModern/step1.svg";
import StepSecond from "common/assets/image/appModern/step2.svg";
import StepLast from "common/assets/image/appModern/step3.svg";
import Image from "next/image";

const stepwork = {
  items: [
    {
      id: 1,
      logo: StepFirst,
      alt: "Step First",
      title: "Create Custome Request",
      desc: "Chose a pre-defined ecommerce tasks or send custom development request for your ecommerce business.",
    },
    {
      id: 2,
      logo: StepSecond,
      alt: "Step Second",
      title: "Work with Assistant",
      desc: "Coordinating with our project assistant to accomplish the store development as your expectation.",
    },
    {
      id: 3,
      logo: StepLast,
      alt: "Step Last",
      title: "Upsale Your Business",
      desc: "Facilitating weekly ecommerce tasks to further improve your sales & marketing and reduce operation cost.",
    },
  ],
};

const StepWork = () => {
  return (
    <StepworkWrapper>
      {stepwork.items.map((item, index) => (
        <Box key={index} className="container">
          <Box>
            <Image src={item.logo} alt={item.alt} />
          </Box>
          <h2 className="titleStep">{item.title}</h2>
          <p>{item.desc}</p>
        </Box>
      ))}
    </StepworkWrapper>
  );
};
export default StepWork;
