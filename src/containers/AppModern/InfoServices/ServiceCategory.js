import React, { useState } from "react";
import Box from "common/components/Box";
import Link from "next/link";

const ServiceCategory = (props) => {
  const { dataNew, choice } = props;
  const [qty, setQty] = useState(18);

  const handleShowMore = () => {
    setQty((e) => e + 18);
  };
  const handleShowLess = () => {
    setQty(18);
  };
  return (
    <Box className="containerServices">
      <Link href={`/services`}>
        <a className="btncategory">All</a>
      </Link>
      {dataNew.length > 0 && <Box className="space">{""}</Box>}
      {dataNew.map(
        (items, index) =>
          index < qty && (
            <Link
              key={index}
              href={
                `/services/` +
                (items.attributes.parent?.data.attributes.parent?.data
                  ? items.attributes.parent.data.attributes.parent.data
                      .attributes.alias + "/"
                  : "") +
                (items.attributes.parent?.data
                  ? items.attributes.parent.data.attributes.alias + "/"
                  : "") +
                items.attributes.alias
              }
            >
              <a
                className={
                  choice === items.attributes.alias ? "choice" : "btncategory"
                }
              >
                {items?.attributes.name}
              </a>
            </Link>
          )
      )}
      {dataNew.length > 18 && (
        <>
          {dataNew.length > qty ? (
            <button className="btnShow" onClick={() => handleShowMore()}>
              Show more
            </button>
          ) : (
            <button className="btnShow" onClick={() => handleShowLess()}>
              Show Less
            </button>
          )}
        </>
      )}
    </Box>
  );
};
export default ServiceCategory;
