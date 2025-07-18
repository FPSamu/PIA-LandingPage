import React from "react";

const titleStyle = {
  color: "#A3BFFA",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 700,
  fontSize: "2.5rem",
  // textAlign: "left" as const,
  margin: 0,
  padding: 0,
};

function Title() {
  return (
    <h1 style={titleStyle}>
      Master Your Money with AI
    </h1>
  );
}

export default Title;
