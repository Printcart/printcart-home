import React from "react";
import Input from "common/components/Input";
import Alert from "common/components/Alert";
import Loader from "./Loader";
import {
  FormControl,
  Button,
  StyleLoginForm,
  StyleCreateAccount,
  StyleAlertForm,
} from "./pc.style";

const Store = () => {};

const AlertForm = (props) => {
  const { status = "success", children } = props;

  let alertClass = "alert-success";

  switch (status) {
    case "success":
      alertClass = "alert-success";
      break;
    case "danger":
      alertClass = "alert-danger";
      break;
    case "warning":
      alertClass = "alert-warning";
      break;
    default:
      break;
  }

  return (
    <StyleAlertForm role="alert" className={alertClass}>
      This is a danger alert—check it out!
    </StyleAlertForm>
  );
};

const LoginForm = () => {
  const [isLoading, setLoading] = React.useState(false);
  const [alert, setAlert] = React.useState({
    status: "success",
    mess: "",
    active: true,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert((old) => {
      return { ...old, active: false };
    });
    setLoading(true);

    const printcartUrl = process.env.NEXT_PUBLIC_PRINTCART_REST_API;

    const email = event.target.your_email.value;
    const password = event.target.your_password.value;

    if (!email || !password) {
      setAlert({
        status: "error",
        mess: "Email or password cannot be blank",
        active: true,
      });
      return;
    }

    const data = {
      email,
      password,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(`${printcartUrl}account/signIn`, options);

    const result = await response.json();

    if (result) console.log(result);
  };

  return (
    <StyleLoginForm>
      {alert.active && <AlertForm>Muathuvang</AlertForm>}
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            inputType="email"
            label="Your Email"
            iconPosition="right"
            isMaterial={true}
            className="email_input"
          />
        </FormControl>
        <FormControl>
          <Input
            inputType="password"
            label="Your Password"
            iconPosition="right"
            isMaterial={true}
            className="password_input"
          />
        </FormControl>
        <Button disabled={isLoading}>
          {!isLoading ? "Sign in" : "Signing in..."}
        </Button>
      </form>
      <StyleCreateAccount>
        Not registered?{" "}
        <a href="https://dashboard.printcart.com/signup" target="_blank">
          Create account
        </a>
      </StyleCreateAccount>
    </StyleLoginForm>
  );
};

export default LoginForm;
