import React from "react";

const inputStyle = {
  background: "#2A2F42",
  border: "1.5px solid #3A4056",
  borderRadius: "50px",
  color: "#D3D8E0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "1rem",
  padding: "0.75rem 1rem",
  outline: "none",
  width: "100%",
  boxSizing: "border-box" as const,
  margin: 0,
  display: "block",
};

const placeholderStyle = {
  color: "#D3D8E0",
  opacity: 1,
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
};

function EmailField() {
  return (
    <input
      type="email"
      style={inputStyle}
      placeholder="youremail@email.com"
      autoComplete="email"
      spellCheck={false}
      // @ts-ignore
      // The following is for placeholder styling in React inline styles (not standard, but for clarity)
      // In production, use a CSS class and ::placeholder pseudo-element
    />
  );
}

export default EmailField;
