import React from "react";
import { Breadcrumb } from "../ServiceDetail/TitlePath";
import Box from "common/components/Box";
import Link from "next/link";
import Container from "common/components/UI/Container";
import styled from "styled-components";

const Wrap = styled(Box)`
  padding: 0px 30px;
`;
const BlogPath = ({ postData }) => {
  return (
    <Breadcrumb>
      <Container>
        <Box className="container-text">
          <Wrap>
            <Link href="/">
              <a className="textTitle">Printcart</a>
            </Link>
            {" - "}
            <Link href="/tutorial">
              <a className="textTitle">Tutorial</a>
            </Link>
            {postData?.attributes?.title && (
              <>
                {" - "}
                <Link
                  prefetch={false}
                  href={`/blog/${postData?.attributes?.alias}`}
                >
                  <a className="textTitle">{postData?.attributes?.title}</a>
                </Link>
              </>
            )}
          </Wrap>
        </Box>
      </Container>
    </Breadcrumb>
  );
};

export default BlogPath;
