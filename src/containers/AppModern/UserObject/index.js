import Box from "common/components/Box";
import React from "react";
import styled from "styled-components";
import StepworkWrapper from "../StepWork/stepwork.style";
import ContainerUO from "./userobject.style";

const StepProject = styled.div`
  padding-left: 25px;
  border-left: 4px solid #999;
  color: #999;
  font-weight: 600;
  & p {
    line-height: 25px;
    font-size: 20px;
  }
`;
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
        <h2 className="title">
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
