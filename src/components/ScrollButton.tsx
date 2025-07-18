import React from "react";
import { FiArrowDown } from "react-icons/fi";


const buttonStyle = {
  width: 64,
  height: 64,
  borderRadius: "50%",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "background 0.2s",
  outline: "none",
  padding: 0,
};

function ScrollButton() {
  return (
    <button
      type="button"
      style={buttonStyle}
      className="scroll-btn"
      aria-label="Scroll down"
    >
      <FiArrowDown size={36} />
    </button>
  );
}

export default ScrollButton;
