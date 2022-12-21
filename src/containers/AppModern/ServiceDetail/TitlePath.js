import React from "react";
import Box from "common/components/Box";
import Link from "next/link";
import styled from "styled-components";

const Breadcrumb = styled.div`
  margin-top: 0;
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

  .container-text {
    max-width: 1168px;
    margin: 0 auto;
    @media only screen and (max-width: 1400px) {
      margin-left: 100px;
    }
    @media only screen and (max-width: 1200px) {
      margin-left: 100px;
    }
  }
`;
const TitlePath = (props) => {
  const { currentCat, data } = props;

  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/">
          <a className="text">Printcart</a>
        </Link>
        {" - "}
        <Link href="/services">
          <a className="text">Services Listing</a>
        </Link>
        {currentCat ? (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={
                currentCat.alias_cat
                  ? `/services/${currentCat.alias_cat}`
                  : `/service/${currentCat.alias}`
              }
            >
              <a className="text">{currentCat.name_cat || currentCat.title}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {currentCat?.name_subcat ? (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={`/services/${currentCat.alias_cat}/${currentCat.alias_subcat}`}
            >
              <a className="text">{currentCat.name_subcat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
        {currentCat?.name_sub ? (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={`/services/${currentCat.alias_cat}/${currentCat.alias_subcat}/${currentCat.alias_sub}`}
            >
              <a className="text">{currentCat.name_sub}</a>
            </Link>
          </>
        ) : (
          ""
        )}
      </Box>
    </Breadcrumb>
  );
};
export default TitlePath;
