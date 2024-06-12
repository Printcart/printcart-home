import mailError from "common/assets/image/mailError.jpg";
import Image from "next/image";

const UnsubscribeForm = () => {
  return (
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
          Successful unsubscribe from Printcart
        </h2>
        <p style={{ fontSize: "1.2rem", marginBottom: "0" }}>
          You won't receive mail from our system anymore.
        </p>
        <p>If this is a mistake, you can subscribe again by contacting us.</p>
      </div>
    </div>
  );
};

export default UnsubscribeForm;
