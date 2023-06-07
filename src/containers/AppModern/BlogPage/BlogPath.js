import React from "react";
import { Breadcrumb } from "../ServiceDetail/TitlePath";
import Box from "common/components/Box";
import Link from "next/link";

const BlogPath = ({ postData }) => {
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/">
          <a className="textTitle">Printcart</a>
        </Link>
        {" - "}
        <Link href="/blog">
          <a className="textTitle">Blog</a>
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
      </Box>
    </Breadcrumb>
  );
};

export default BlogPath;
