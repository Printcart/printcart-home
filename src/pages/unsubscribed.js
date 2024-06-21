import ResetCSS from "common/assets/css/style";
import mailError from "common/assets/image/mailError.jpg";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "common/components/Button";
import { ThemeProvider } from "styled-components";
import { padding } from "styled-system";

const UnsubscribeForm = () => {
  const [email, setEmail] = React.useState("");
  const [isHovered, setIsHovered] = React.useState(false);

  React.useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const email = query.get("email");
    if (email) {
      setEmail(email);
    }
  }, []);

  const handlePost = async () => {
    try {
      const response = await fetch(
        "https://workflow.cloodo.com/webhook-test/a229fe5b-d866-49f3-b2be-bb07d19a20e2/webhook",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        alert("Request sent successfully!");
      } else {
        console.error("Failed to send request:", response.statusText);
        alert("Failed to send request.");
      }
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Failed to send request.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Head>
          <title>Printcart | Tutorials</title>
          <meta name="theme-color" content="#2563FF" />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <AppWrapper>
          <div
            style={{
              display: "block",
              width: "100vw",
              height: "100vh",
              backgroundColor: "#f0f0f0",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                maxWidth: "500px",
                width: "100%",
                margin: "auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "1rem",
                border: "1px solid #ccc",
                borderRadius: "8px",
                textAlign: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                src={mailError}
                alt="Mail Error"
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
              <h2 style={{ marginBottom: "0.5rem" }}>
                Do you want to unsubscribe from Printcart?
              </h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "0" }}>
                You won't receive mail from our system anymore.
              </p>
              <p>
                If this is a mistake, you can subscribe again by contacting us.
              </p>
              {email && (
                <p>
                  <strong>Email:</strong> {email}
                </p>
              )}
              <Button
                onClick={handlePost}
                title="Unsubscribed"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default UnsubscribeForm;

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}
