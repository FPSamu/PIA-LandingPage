import React from "react";
import "./SendEmailButton.css";

const buttonStyle = {
  background: "#4A90E2",
  color: "#fff",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  border: "none",
  borderRadius: "50px",
  padding: "0.75rem 2rem",
  cursor: "pointer",
  transition: "background 0.2s, box-shadow 0.2s",
  margin: 0,
  outline: "none",
  letterSpacing: "0.03em",
  width: "100%",
  boxSizing: "border-box" as const,
  display: "block",
};

function SendEmailButton() {
  return (
    <button style={buttonStyle} className="send-email-btn" type="button">
      Keep Updated
    </button>
  );
}

export default SendEmailButton;
