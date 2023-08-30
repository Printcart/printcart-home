import { StyleAlert } from "./pc.style";

const Alert = (props) => {
  const { status = "success", children } = props;

  let alertClass = "alert-success";

  switch (status) {
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
    __html: children,
  };

  return (
    <StyleAlert role="alert" className={alertClass}>
      <span dangerouslySetInnerHTML={markupChildren} />
    </StyleAlert>
  );
};

export default Alert;
