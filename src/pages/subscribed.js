import ResetCSS from "common/assets/css/style";
import printcartMail from "common/assets/image/mail.png";
import { theme } from "common/theme/appModern";
import GlobalStyle, { AppWrapper } from "containers/AppModern/appModern.style";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Button from "common/components/Button";
import { ThemeProvider } from "styled-components";
import { padding } from "styled-system";

const SubscribeForm = () => {
  const [email, setEmail] = React.useState("");

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
      alert("Request sent successfully!");
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
                src={printcartMail}
                alt="Printcart Mail"
                style={{ maxWidth: "100%", marginBottom: "1rem" }}
              />
              <h2 style={{ marginBottom: "0.5rem" }}>
                Subscribe Printcart
              </h2>
              <p style={{ fontSize: "1.2rem", marginBottom: "0" }}>
                You will receive mails from our system, include:
              <ul style={{ textAlign:"left", marginLeft:"130px" }}>
                <li>New order Notification</li>
                <li>New design Notification</li>
                <li>Subscription Notice</li>
                <li>Your store connection</li>
                <li>Ticket support Notification</li>
                <li>Project Notification</li>
                <li>New feature of Printcart</li>
              </ul>
              </p>
              {email && (
                <p>
                  <strong>Email:</strong> {email}
                </p>
              )}
              <Button
                onClick={handlePost}
                title="Subscribed"
                style={{ borderRadius: "10px" }}
              />
            </div>
          </div>
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default SubscribeForm;

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}
