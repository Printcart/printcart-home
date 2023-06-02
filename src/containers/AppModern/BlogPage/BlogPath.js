import React from "react";
import { Breadcrumb } from "../ServiceDetail/TitlePath";
import Box from "common/components/Box";
import Link from "next/link";

function BlogPath() {
  const currentCat = [];
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/">
          <a className="text">Printcart</a>
        </Link>
        {" - "}
        <Link href="/blog">
          <a className="text">Blog</a>
        </Link>
        {/* {currentCat && (
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
        )} */}
      </Box>
    </Breadcrumb>
  );
}

export default BlogPath;
