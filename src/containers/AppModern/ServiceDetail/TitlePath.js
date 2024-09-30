import React from "react";
import Box from "common/components/Box";
import Link from "next/link";
import styled from "styled-components";

export const Breadcrumb = styled.div`
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
    max-width: 1160px;
    margin: 0 auto;
    @media only screen and (max-width: 1400px) {
      margin-left: 125px;
    }
    @media only screen and (max-width: 1200px) {
      margin-left: 125px;
    }
  }
`;

const TitlePath = (props) => {
  const { currentCat, data } = props;

  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/" className="text">
          Printcart
        </Link>
        {" - "}
        <Link href="/services" className="text">
          Services Listing
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
              className="text"
            >
              {currentCat.name_cat || currentCat.title}
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
              className="text"
            >
              {currentCat.name_subcat}
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
              className="text"
            >
              {currentCat.name_sub}
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
