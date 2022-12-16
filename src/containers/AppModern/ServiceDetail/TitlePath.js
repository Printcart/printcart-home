import React from "react";
import Box from "common/components/Box";
import Link from "next/link";
import styled from "styled-components";

const TitlePath = (props) => {
  const { character, data } = props;
  const Breadcrumb = styled.div`
    margin-top: 38px;
    padding: 10px 0;
    background-color: #f5f5f5;
    & a,
    & span {
      font-size: 16px;
      color: #5c5c5c;
      text-transform: capitalize;
    }
    & a:hover {
      color: #2d58af;
    }
    @media only screen and (max-width: 1400px) {
      margin-top: 27px;
    }
    @media only screen and (max-width: 1200px) {
      margin-top: 25px;
    }
    .container-text {
      max-width: 1024px;
      margin: 0 auto;
      @media only screen and (max-width: 1400px) {
        margin-left: 60px;
      }
      @media only screen and (max-width: 1200px) {
        margin-left: 60px;
      }
    }
  `;
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link prefetch={false} href="/">
          <a>Printcart</a>
        </Link>{" "}
        -{" "}
        <Link prefetch={false} href={`/${data.alias}`}>
          <a>{data.name} Listing</a>
        </Link>{" "}
        {character && <span>{`- ${character}`}</span>}
      </Box>
    </Breadcrumb>
  );
};
export default TitlePath;
