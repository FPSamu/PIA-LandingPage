import React from "react";
import EmailField from "../components/EmailField.tsx";
import SendEmailButton from "../components/SendEmailButton.tsx";

const sectionStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "stretch" as const,
  justifyContent: "center" as const,
  width: "80%",
  marginTop: "2rem",
};

const fieldWrapperStyle = {
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center" as const,
  gap: "1rem",
  width: "100%",
};

const emailFieldStyle = {
  flex: "1",
  minWidth: "0",
};

const buttonStyle = {
  flexShrink: 0,
};

function EmailRow() {
  return (
    <section style={sectionStyle}>
      <div style={fieldWrapperStyle}>
        <div style={emailFieldStyle}>
          <EmailField />
        </div>
        <div style={buttonStyle}>
          <SendEmailButton />
        </div>
      </div>
    </section>
  );
}

export default EmailRow;
