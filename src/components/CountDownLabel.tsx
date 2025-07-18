import React from "react";

const labelStyle = {
  color: "#D3D8E0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "1.75rem",
  textAlign: "left" as const,
  margin: "2rem 0 0 0",
  padding: 0,
};

function CountDownLabel() {
  return (
    <div style={labelStyle}>
      🚀 Launching starts in:
    </div>
  );
}

export default CountDownLabel;
