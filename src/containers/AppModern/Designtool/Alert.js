import { StyleAlert } from "./pc.style";

const Alert = (props) => {
  const { status = "primary", html, children } = props;

  let alertClass = "alert-primary";

  switch (status) {
    case "primary":
      alertClass = "alert-primary";
      break;
    case "success":
      alertClass = "alert-success";
      break;
    case "error":
      alertClass = "alert-danger";
      break;
    case "warning":
      alertClass = "alert-warning";
      break;
    default:
      break;
  }

  const markupChildren = {
    __html: html,
  };

  return (
    <StyleAlert role="alert" className={alertClass}>
      {html && <span dangerouslySetInnerHTML={markupChildren} />}
      {children}
    </StyleAlert>
  );
};

export default Alert;
