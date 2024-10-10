import React, { useState } from "react";
import Box from "common/components/Box";
import Link from "next/link";

const ServiceCategory = (props) => {
  const { dataNew, choice} = props;
  const [qty, setQty] = useState(18);

  const handleShowMore = () => {
    setQty((e) => e + 18);
  };
  const handleShowLess = () => {
    setQty(18);
  };
  console.log(choice);
  return (
    
    <Box className="containerServices">
      <Link href={`/services`} className="btncategory">
        All
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
              className={
                choice === items.attributes.alias ? "choice" : "btncategory"
              }
            >
              {items?.attributes.name}
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
