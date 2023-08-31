import Input from "common/components/Input";
import debounce from "lodash.debounce";
import Image from "next/image";
import React from "react";
import Loader from "./Loader";
import codecanyonLogo from "./logo/codecanyon.png";
import magentoLogo from "./logo/magento.svg";
import printcartLogo from "./logo/mini-logo.png";
import shopifyLogo from "./logo/shopify-icon.svg";
import wixLogo from "./logo/wix-icon.svg";
import woocommerceLogo from "./logo/woocommerce-plain.svg";
import {
  StyleCreateStore,
  StyleLoadingWrap,
  StyleStore,
  StyleStoreList,
  StyleStoreTitle,
  StyleInputSearch,
} from "./pc.style";

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
            {type === "codecanyon" && (
              <Image width={24} height={24} src={codecanyonLogo} />
            )}
            {type === "shopify" && (
              <Image width={24} height={24} src={shopifyLogo} />
            )}
            {type === "magento" && (
              <Image width={24} height={24} src={magentoLogo} />
            )}
            {type === "wix" && <Image width={24} height={24} src={wixLogo} />}
            {type !== "woocommerce" &&
              type !== "codecanyon" &&
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
  const [search, setSearch] = React.useState("");
  const [loading, setLoading] = React.useState({
    active: false,
    label: "Loading...",
  });

  const applySearch = (e) => {
    const s = e.target.value;
    if (!s) setSearch("");

    if (s.length < 3) return;
    setSearch(s);
  };

  const debouncedResults = React.useMemo(() => {
    return debounce(applySearch, 200);
  }, []);

  React.useEffect(() => {
    const printcartUrl = process.env.NEXT_PUBLIC_PRINTCART_REST_API;
    const token = localStorage.getItem("_pc-t");

    if (token) {
      const headers = {
        Authorization: `Bearer ${decodeURIComponent(token)}`,
      };
      setLoading({
        active: true,
        label: !search ? "Loading store list..." : "Searching...",
      });

      let apiUrl = `${printcartUrl}stores?limit=100`;
      if (search) {
        apiUrl = `${printcartUrl}stores?&s=${search}&limit=100`;
      }

      fetch(apiUrl, {
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
  }, [search]);

  React.useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <>
      <StyleStoreTitle>Select store</StyleStoreTitle>
      <StyleInputSearch
        type="text"
        onChange={debouncedResults}
        style={{ width: "100%" }}
        placeholder="Search store"
      />
      {loading.active && (
        <StyleLoadingWrap>
          <Loader label={loading.label} />
        </StyleLoadingWrap>
      )}
      {storeList?.length > 0 && (
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
      {loading.active && !storeList?.length && (
        <StyleCreateStore>
          There are no stores.{" "}
          <a
            href={`${process.env.NEXT_PUBLIC_PRINTCART_DASHBOARD}signup`}
            target="_blank"
          >
            Create store
          </a>
        </StyleCreateStore>
      )}
    </>
  );
};

export default StoreList;
