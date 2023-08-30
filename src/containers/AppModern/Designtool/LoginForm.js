import Input from "common/components/Input";
import React from "react";
import {
  Button,
  FormControl,
  StyleCreateAccount,
  StyleLoginForm,
} from "./pc.style";

const LoginForm = (props) => {
  const { setAlert, setToken } = props;

  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setAlert((old) => {
      return { ...old, active: false };
    });
    setIsLoading(true);

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

    const accessToken = result?.data?.access_token;
    if (accessToken) {
      localStorage.setItem("_pc-t", accessToken);
      setToken(accessToken);
    } else {
      setAlert({
        status: "error",
        mess: result?.error.message || "Somethings error",
        active: true,
      });
    }
    setIsLoading(false);
  };

  return (
    <StyleLoginForm>
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
