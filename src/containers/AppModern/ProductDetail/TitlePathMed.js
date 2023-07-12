import Box from "common/components/Box";
import Link from "next/link";
import { Breadcrumb } from "../ServiceDetail/TitlePath";

const TitlePathMed = (props) => {
  const { currentCat } = props;
  return (
    <Breadcrumb>
      <Box className="container-text">
        <Link href="/">
          <a className="text">Printcart</a>
        </Link>
        {" - "}
        <Link href="/catalog">
          <a className="text">Catalog</a>
        </Link>
        {/* {currentCat?.collection ? (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={`/collection/${currentCat.collection.id}`}
            >
              <a className="text">{currentCat.collection.title}</a>
            </Link>
          </>
        ) : (
          ""
        )} */}
        {currentCat ? (
          <>
            {" - "}
            <Link
              prefetch={false}
              href={
                currentCat.products
                  ? `/collection/${currentCat.id}`
                  : `/product/${currentCat.id}`
              }
            >
              <a className="text">{currentCat.title}</a>
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
              href={`/product/${currentCat.alias_cat}/${currentCat.alias_subcat}`}
            >
              <a className="text">{currentCat.name_subcat}</a>
            </Link>
          </>
        ) : (
          ""
        )}
      </Box>
    </Breadcrumb>
  );
};
export default TitlePathMed;
