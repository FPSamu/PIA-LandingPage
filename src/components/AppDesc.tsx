import React from "react";

const descStyle = {
  color: "#D3D8E0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 500,
  fontSize: "2rem",
  textAlign: "center" as const,
  margin: "1.5rem 0 0 0",
  padding: 0,
};

function AppDesc() {
  return (
    <p style={descStyle}>
      Take charge of your finances with intelligent insights and effortless tracking.
    </p>
  );
}

export default AppDesc;
