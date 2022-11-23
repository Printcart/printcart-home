import React from "react";
import Link from "next/link";
import Box from "common/components/Box";
import Icon from "react-icons-kit";
import { ic_home_outline } from "react-icons-kit/md/ic_home_outline";

const Breadcrumb = (props) => {
  const { characters } = props;
  console.log(characters);
  return (
    <Box className="mainbred">
      <Box className="breadcome">
        <Link href="/">
          <a className="text">
            <Icon icon={ic_home_outline} />
            Printcart
          </a>
        </Link>
        -
        <Link href="/services">
          <a className="text">Services Listing</a>
        </Link>
        {characters ? (
          <>
            -{" "}
            <Link href={`/services/${characters.attributes.alias}`}>
              <a className="text">{characters.attributes.name}</a>
            </Link>
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
export default Breadcrumb;
