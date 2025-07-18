import React from "react";
import EmailField from "../components/EmailField.tsx";
import SendEmailButton from "../components/SendEmailButton.tsx";

const sectionStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "stretch" as const,
  justifyContent: "center" as const,
  width: "100%",
  marginTop: "2rem",
};

const fieldWrapperStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "stretch" as const,
  gap: "1rem",
  width: "100%",
};

const fullWidthStyle = {
  width: "100%",
};

function Email() {
  return (
    <section style={sectionStyle}>
      <div style={fieldWrapperStyle}>
        <div style={fullWidthStyle}>
          <EmailField />
        </div>
        <div style={fullWidthStyle}>
          <SendEmailButton />
        </div>
      </div>
    </section>
  );
}

export default Email;
