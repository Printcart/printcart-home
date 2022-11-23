import React from "react";
import Box from "common/components/Box";
import Link from "next/link";

const TitlePath = (props) => {
  const { character, data } = props;
  return (
    <Box className="breadcrumb">
      <Box className="container-text">
        <Link prefetch={false} href="/">
          <a>Printcart</a>
        </Link>{" "}
        -{" "}
        <Link prefetch={false} href={`/${data.alias}`}>
          <a>{data.name} Listing</a>
        </Link>{" "}
        - <span>{character.name ?? character.title}</span>
      </Box>
    </Box>
  );
};
export default TitlePath;
