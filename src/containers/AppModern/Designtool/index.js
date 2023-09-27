import React from "react";
import Alert from "./Alert";
import Loader from "./Loader";
import LoginForm from "./LoginForm";
import Modal from "./Modal";
import StoreList from "./StoreList";
import {
  Button,
  StyleStoreTitle,
  StyleStoreDetailWrap,
  StyleStoreName,
  StyleLogout,
} from "./pc.style";

const Authentication = (props) => {
  const { handlerVerify, setAlert } = props;

  const [token, setToken] = React.useState(
    typeof window !== "undefined" ? localStorage.getItem("_pc-t") : ""
  );
  const [sid, setSid] = React.useState(
    typeof window !== "undefined" ? localStorage.getItem("_pc-s") : ""
  );
  const [store, setStore] = React.useState({});
  const [loading, setLoading] = React.useState({
    active: false,
    label: "Loading...",
  });

  const handlerContinue = () => {
    handlerVerify(true);
  };

  const handlerLogout = () => {
    localStorage.removeItem("_pc-s");
    localStorage.removeItem("_pc-t");
    setSid("");
    setToken("");
    setStore({});
    handlerVerify(false);
  };

  React.useEffect(() => {
    const printcartUrl = process.env.NEXT_PUBLIC_PRINTCART_REST_API;

    let headers = {};

    if (token) {
      headers.Authorization = `Bearer ${decodeURIComponent(token)}`;
    }

    if (sid) {
      headers["X-Printcart-Store-Sid"] = decodeURIComponent(sid);
    }

    if (token && sid) {
      setLoading({
        active: true,
        label: "Verifying...",
      });

      fetch(`${printcartUrl}stores/store-details`, {
        headers,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.data?.unauth_token) {
            setStore(data.data);
          } else {
            localStorage.removeItem("_pc-s");
            localStorage.removeItem("_pc-t");
            setSid("");
            setToken("");
          }
          setLoading((old) => {
            return { ...old, active: false };
          });
        });
    }
  }, []);

  if (loading.active) {
    return <Loader label={loading.label} />;
  }

  return (
    <>
      {store?.id && (
        <Alert>
          <StyleStoreDetailWrap>
            <StyleStoreName>
              <StyleStoreTitle>Store name: </StyleStoreTitle>
              <span>{store.name}</span>
            </StyleStoreName>
            <StyleLogout onClick={handlerLogout}>Logout</StyleLogout>
          </StyleStoreDetailWrap>
        </Alert>
      )}
      {token && <StoreList token={token} handlerVerify={handlerVerify} />}
      {store?.id && <Button onClick={handlerContinue}>Continue</Button>}
      {!token && <LoginForm setAlert={setAlert} setToken={setToken} />}
    </>
  );
};

const Designtool = (props) => {
  const { productId, apiKeyVendor } = props;
  const printcartUrl = process.env.NEXT_PUBLIC_PRINTCART_REST_API;
  const designtoolUrl = process.env.NEXT_PUBLIC_DESIGNTOOL_URL;
  const messageClose = "closeDesignTool";

  const [show, setShow] = React.useState(false);
  const [verify, setVerify] = React.useState(false);
  const [activeTool, setActiveTool] = React.useState(false);
  const [loading, setLoading] = React.useState({
    active: false,
    label: "Loading...",
  });
  const [alert, setAlert] = React.useState({
    status: "success",
    mess: "",
    active: false,
  });

  const getHeader = (json = true) => {
    const token = localStorage.getItem("_pc-t");
    const sid = localStorage.getItem("_pc-s");

    let headers = {};

    if (json) {
      headers["Content-Type"] = "application/json";
    }

    if (token) {
      headers.Authorization = `Bearer ${decodeURIComponent(token)}`;
    }

    if (sid) {
      headers["X-Printcart-Store-Sid"] = decodeURIComponent(sid);
    }
    return headers;
  };

  const handlerVerify = (check = true) => {
    setVerify(check);
    setActiveTool(check);
  };

  const handlerShow = (action = false) => {
    if (!action) {
      const token = localStorage.getItem("_pc-t");
      const sid = localStorage.getItem("_pc-s");
      if (token && sid && productId && apiKeyVendor) {
        setActiveTool(true);
      } else {
        setVerify(false);
      }
    }
    setAlert({
      status: "success",
      mess: "",
      active: false,
    });
    setShow(action);
  };

  const createProduct = (product) => {
    const token = localStorage.getItem("_pc-t");
    const sid = localStorage.getItem("_pc-s");
    const headers = getHeader();

    if (token && sid) {
      setLoading({
        active: true,
        label: "Creating product...",
      });

      fetch(`${printcartUrl}products`, {
        method: "POST",
        headers,
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          setLoading((old) => {
            return { ...old, active: false };
          });
          if (data?.data?.id) {
            setAlert({
              status: "success",
              mess: `Created product successfully <a href="${process.env.NEXT_PUBLIC_PRINTCART_DASHBOARD}pod-product/${data.data.id}" target="_blank">View product</a>`,
              active: true,
            });
          } else {
            setAlert({
              status: "error",
              mess: `Something went wrong!`,
              active: true,
            });
          }
          setVerify(true);
        });
    }
  };

  const postBatchImageFromUrl = async (images) => {
    const headers = getHeader(false);
    const fetchImage = async (url, name, alt) => {
      const res = await fetch(url);
      const blob = await res.blob();
      const file = new File([blob], name, { type: blob.type });
      const formData = new FormData();
      formData.append("file", file, name);
      formData.append("alt", alt);

      const resImage = await fetch(`${printcartUrl}images`, {
        method: "POST",
        headers,
        body: formData,
      });
      return await resImage.json();
    };
    let promises = [];
    images.forEach((image) => {
      const imageUrl = image.url;
      const imageName = image.name;
      const alt = image.alt;
      promises.push(fetchImage(imageUrl, imageName, alt));
    });

    return await Promise.all(promises);
  };

  const handlerFinished = async (event) => {
    if (!event) return;
    if (event.data && event.data.message === "finishProcess") {
      if (event?.data?.data?.data) {
        const designs = event.data.data.data;
        const designImages = [];
        let firstDesign = true;
        let productForm = null;
        designs.forEach((design) => {
          const product = design?.product;
          designImages.push({
            name: design?.preview_image.name,
            url: design?.preview_image.url,
            alt: design?.side.name,
          });
          if (firstDesign) {
            productForm = {
              name: product.name,
              dynamic_side: product.dynamic_side,
              dpi: product.dpi,
              dimension_unit: product.dimension_unit,
              status: product.status,
              allowed_file_types: product.allowed_file_types,
              enable_design: product.enable_design,
              enable_upload: product.enable_upload,
              enable_pod: true,
              max_file_upload: product.max_file_upload,
              min_jpg_dpi: product.min_jpg_dpi,
            };
            firstDesign = false;
          }
        });
        if (productForm && designImages.length > 0) {
          setActiveTool(false);
          setLoading({
            active: true,
            label: "Creating product image...",
          });
          const productImage = await postBatchImageFromUrl(designImages);

          if (productImage.length > 0) {
            let firstImage = true;
            const productGallery = [];
            productImage.forEach((img) => {
              if (firstImage && img?.data?.id) {
                productForm["product_image_id"] = img.data.id;
                firstImage = false;
              } else if (img?.data?.id) {
                productGallery.push(img.data.id);
              }
            });
            if (productGallery.length > 0) {
              productForm["image_gallery_ids"] = productGallery;
            }

            createProduct(productForm);
          }
        }
      }
    }
  };

  const handlerClose = (event) => {
    if (event.data && event.data.message === messageClose) {
      handlerShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("message", handlerFinished, false);
    window.addEventListener("message", handlerClose, false);
    return () => {
      window.removeEventListener("message", handlerFinished);
      window.removeEventListener("message", handlerClose);
    };
  }, []);

  return (
    <>
      <Button onClick={() => handlerShow(true)}>Start Selling</Button>
      <Modal
        isFullScreen={activeTool}
        titleFullScreen="Create design"
        show={show}
        onClose={() => handlerShow(false)}
      >
        {!activeTool && (
          <>
            <Modal.Header>
              {!loading.active
                ? "Please log-in to your store"
                : "Creating product"}
            </Modal.Header>
            <Modal.Body>
              {alert.active && alert.mess && (
                <Alert status={alert.status} html={alert.mess} />
              )}
              {loading.active && <Loader label={loading.label} />}
              {!verify && (
                <Authentication
                  handlerVerify={handlerVerify}
                  setAlert={setAlert}
                />
              )}
            </Modal.Body>
          </>
        )}
        {activeTool && apiKeyVendor && productId && (
          <iframe
            id="onlinedesigner-designer"
            width="100%"
            height="100%"
            frameBorder="0"
            noresize="noresize"
            allowFullScreen=""
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            src={`${designtoolUrl}?api_key=${apiKeyVendor}&product_id=${productId}&parentUrl=${window.location.origin}&closeEvent=${messageClose}`}
          />
        )}
      </Modal>
    </>
  );
};

export default Designtool;
