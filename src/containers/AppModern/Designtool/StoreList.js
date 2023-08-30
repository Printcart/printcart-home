import Image from "next/image";
import React from "react";
import Loader from "./Loader";
import magentoLogo from "./logo/magento.svg";
import printcartLogo from "./logo/mini-logo.png";
import shopifyLogo from "./logo/shopify-icon.svg";
import wixLogo from "./logo/wix-icon.svg";
import woocommerceLogo from "./logo/woocommerce-plain.svg";
import { StyleLoadingWrap, StyleStore, StyleStoreList } from "./pc.style";

const StoreBtn = (props) => {
  const { storeName, sid, type, handlerVerify } = props;

  const onClick = () => {
    localStorage.setItem("_pc-s", sid);
    handlerVerify(true);
  };

  return (
    <StyleStore onClick={onClick}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "8px" }}>
            {type === "woocommerce" && (
              <Image width={24} height={24} src={woocommerceLogo} />
            )}
            {type === "shopify" && (
              <Image width={24} height={24} src={shopifyLogo} />
            )}
            {type === "magento" && (
              <Image width={24} height={24} src={magentoLogo} />
            )}
            {type === "wix" && <Image width={24} height={24} src={wixLogo} />}
            {type !== "woocommerce" &&
              type !== "shopify" &&
              type !== "magento" &&
              type !== "wix" && (
                <Image
                  className="w-100"
                  width={24}
                  height={24}
                  src={printcartLogo}
                />
              )}
          </div>
          <span style={{ fontWeight: "400", textAlign: "left" }}>
            {storeName}
          </span>
        </div>
      </div>
    </StyleStore>
  );
};

const StoreList = (props) => {
  const { handlerVerify } = props;
  const [storeList, setStoreList] = React.useState();
  const [loading, setLoading] = React.useState({
    active: false,
    label: "Loading...",
  });

  React.useEffect(() => {
    const printcartUrl = process.env.NEXT_PUBLIC_PRINTCART_REST_API;
    const token = localStorage.getItem("_pc-t");

    if (token) {
      const headers = {
        Authorization: `Bearer ${decodeURIComponent(token)}`,
      };
      setLoading({
        active: true,
        label: "Loading store list...",
      });

      fetch(`${printcartUrl}stores?limit=100`, {
        headers,
      })
        .then((res) => {
          setLoading({
            active: false,
            label: loading.label,
          });
          return res.json();
        })
        .then((data) => {
          if (data?.data) {
            setStoreList(data.data);
          } else {
            localStorage.removeItem("_pc-t");
          }
        });
    }
  }, []);

  if (loading.active)
    return (
      <StyleLoadingWrap>
        <Loader label={loading.label} />
      </StyleLoadingWrap>
    );

  return (
    <>
      {storeList?.length && (
        <StyleStoreList>
          {storeList.map((store) => (
            <StoreBtn
              key={store.id}
              storeName={store.name}
              sid={store.sid}
              type={store.integration_type}
              handlerVerify={handlerVerify}
            />
          ))}
        </StyleStoreList>
      )}
    </>
  );
};

export default StoreList;
