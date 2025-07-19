import React from "react";
import Subtitle from "../components/Subtitle.tsx";
import SubDesc from "../components/SubDesc.tsx";

const sectionStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  width: "100%",
  marginTop: "2rem",
};

function FeaturesHeader() {
  return (
    <section style={sectionStyle}>
      <Subtitle />
      <SubDesc />
    </section>
  );
}

export default FeaturesHeader;
