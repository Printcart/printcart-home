import Box from "common/components/Box";
import Link from "next/link";
import { Breadcrumb } from "../ServiceDetail/TitlePath";
import React from "react";

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
        {currentCat &&
          currentCat.map((item) => (
            <React.Fragment key={item?.id}>
              {" - "}
              <Link
                prefetch={false}
                href={
                  item.products
                    ? `/collection/${item.handle}`
                    : `/product/${item.handle}`
                }
              >
                <a className="text">{item.title}</a>
              </Link>
            </React.Fragment>
          ))}
        {/* {currentCat?.name_subcat ? (
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
        )} */}
      </Box>
    </Breadcrumb>
  );
};
export default TitlePathMed;
