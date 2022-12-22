import Box from "common/components/Box";
import Container from "common/components/UI/Container";
import React from "react";
import StepworkWrapper from "../StepWork/stepwork.style";
import ContainerUO from "./userobject.style";
import { StepProject } from "./userobject.style";

const userObject = [
  {
    title: 1,
    desc: "Outsource your Ecommerce Business with a Know-How Tech Team Supported by a Smart Management Tool",
  },
  {
    title: 2,
    desc: "Manage your Store Development project from small front-end tasks to full project development in Agile Approach",
  },
  {
    title: 3,
    desc: "Develop and deploy any Complex eCommerce Marketplace or integrate CRM, ERP system to your platform business",
  },
];
const UserObject = () => {
  return (
    <ContainerUO>
      <Box className="container">
        <h2 className="titleuser">
          Our Ecommerce Service is for all ecommerce partners that wants to
        </h2>
        <StepworkWrapper>
          {userObject.map((items, index) => (
            <StepProject key={index}>
              <h2>{items.title}</h2>
              <p>{items.desc}</p>
            </StepProject>
          ))}
        </StepworkWrapper>
      </Box>
    </ContainerUO>
  );
};
export default UserObject;
