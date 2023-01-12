import { SectionHeader } from "containers/AppModern/appModern.style";
import SectionWrapper from "containers/AppModern/Features/features.style";
import React from "react";
import Icon from "react-icons-kit";
import Container from "../../../common/components/UI/Container";
import HeaderPOD from "./productspod.style";

const ProductsPOD = (props) => {
  const { getProducts } = props;
  return (
    <SectionWrapper id="features">
      <HeaderPOD>
        <h1 className="titleSlogan">Product</h1>
      </HeaderPOD>
      <Container></Container>
    </SectionWrapper>
  );
};

export default ProductsPOD;
