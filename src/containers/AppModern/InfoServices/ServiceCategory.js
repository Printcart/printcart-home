import React, { useState } from "react";
import Box from "common/components/Box";
import Link from "next/link";

const ServiceCategory = (props) => {
  const { dataNew, choice } = props;
  const [qty, setQty] = useState(18);
  const [show, setShow] = useState(true);

  const handleMore = () => {
    setQty((e) => e + 18);
    if (qty > dataNew.length || qty === 100) {
      setShow(false);
    }
  };
  const handleLess = () => {
    setQty((e) => e - qty + 18);
    if (qty === 18) {
      setShow(true);
    }
  };
  return (
    <Box className="containerServices">
      <Link href={`/services`}>
        <a className="btncategory">All</a>
      </Link>
      {dataNew.length > 0 && <Box className="space" />}
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
      {dataNew.length >= 18 && (
        <>
          {qty < dataNew.length && show === true ? (
            <button className="btnShow" onClick={() => handleMore()}>
              Show more
            </button>
          ) : (
            <button className="btnShow" onClick={() => handleLess()}>
              Show Less
            </button>
          )}
        </>
      )}
    </Box>
  );
};
export default ServiceCategory;
