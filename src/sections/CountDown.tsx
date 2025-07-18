import React from "react";
import CountDownLabel from "../components/CountDownLabel.tsx";
import CountDownClock from "../components/CountDownClock.tsx";

const sectionStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "left" as const,
  justifyContent: "center" as const,
  width: "100%",
  marginTop: "2rem",
};

function CountDown() {
  // Set your launch date here
  const launchDate = "2025-08-01T00:00:00";
  return (
    <section style={sectionStyle}>
      <CountDownLabel />
      <CountDownClock targetDate={launchDate} />
    </section>
  );
}

export default CountDown;
