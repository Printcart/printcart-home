import React from "react";
import SectionWrapper from "../Features/features.style";
import Container from "common/components/UI/Container";
import Heading from "common/components/Heading";

const BlogPage = () => {
  return (
    <React.Fragment>
      <SectionWrapper id="features">
        <Container>
          <Heading content="Blog" />
        </Container>
      </SectionWrapper>
    </React.Fragment>
  );
};
export default BlogPage;
