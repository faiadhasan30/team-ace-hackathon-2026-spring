import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "80px", margin: "0" }}>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          background: "#2563eb",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
        }}
      >
        Go to Home
      </Link>
    </div>
  );
}

export default Error;