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
          console.log(data);
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
              mess: `Created product successfully <a href="${process.env.NEXT_PUBLIC_PRINTCART_DASHBOARD}product/${data.data.id}" target="_blank">View product</a>`,
              active: true,
            });
          } else {
            setAlert({
              status: "error",
              mess: `Something went wrong!`,
              active: true,
            });
          }
        });
    }
  };

  const postImageFromUrl = async (imageUrl, fileName) => {
    const headers = getHeader(false);

    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const file = new File([blob], fileName, { type: blob.type });
    const formData = new FormData();
    formData.append("file", file, fileName);

    const resImage = await fetch(`${printcartUrl}images`, {
      method: "POST",
      headers,
      body: formData,
    });
    return await resImage.json();
  };

  React.useEffect(() => {
    const handlerFinished = async (event) => {
      if (event.data && event.data.message === "finishProcess") {
        if (event?.data?.data?.data && event?.data?.data?.data[0]) {
          const designs = event.data.data.data[0];
          const product = designs?.product;
          const productImage = designs?.preview_image.url;
          const productImageName = designs?.preview_image.name;
          const productForm = {
            name: product.name,
            dynamic_side: product.dynamic_side,
            dpi: product.dpi,
            dimension_unit: product.dimension_unit,
            status: product.status,
            allowed_file_types: product.allowed_file_types,
            enable_design: product.enable_design,
            enable_upload: product.enable_upload,
            max_file_upload: product.max_file_upload,
            min_jpg_dpi: product.min_jpg_dpi,
          };
          if (productImage && productImageName) {
            setActiveTool(false);
            setLoading({
              active: true,
              label: "Creating product image...",
            });
            const image = await postImageFromUrl(
              productImage,
              productImageName
            );
            if (image?.data?.id) {
              productForm["product_image_id"] = image.data.id;
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
