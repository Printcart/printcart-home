import Box from "common/components/Box";
import Link from "next/link";
import { Breadcrumb } from "../ServiceDetail/TitlePath";

const BlogPath = ({ postData }) => {
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/">
          <a className="textTitle">Printcart</a>
        </Link>
        {" - "}
        <Link href="/tutorials">
          <a className="textTitle">Tutorials</a>
        </Link>
        {postData?.attributes?.title && (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={`/tutorial/${postData?.attributes?.alias}`}
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
