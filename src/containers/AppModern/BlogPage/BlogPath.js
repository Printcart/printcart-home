import Box from "common/components/Box";
import Link from "next/link";
import { Breadcrumb } from "../ServiceDetail/TitlePath";

const BlogPath = ({ postData }) => {
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/" className="textTitle">
          Printcart
        </Link>
        {" - "}
        <Link href="/tutorials" className="textTitle">
          Tutorials
        </Link>
        {postData?.attributes?.title && (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={`/tutorial/${postData?.attributes?.alias}`}
              className="textTitle"
            >
              {postData?.attributes?.title}
            </Link>
          </>
        )}
      </Box>
    </Breadcrumb>
  );
};

export default BlogPath;
