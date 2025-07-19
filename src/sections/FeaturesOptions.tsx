import React, { useState } from "react";

const sectionStyle = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  justifyContent: "center" as const,
  width: "100%",
  marginTop: "2rem",
  gap: "1rem",
};

const optionsContainerStyle = {
  display: "flex",
  gap: "2rem",
  flexWrap: "wrap" as const,
  justifyContent: "center",
};

const optionStyle = (isSelected: boolean) => ({
  color: isSelected ? "#4A90E2" : "#D3D8E0",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 500,
  fontSize: "1.2rem",
  cursor: "pointer",
  padding: "0.5rem 1rem",
  borderBottom: isSelected ? "2px solid #4A90E2" : "2px solid transparent",
  transition: "all 0.2s ease",
  textDecoration: "none",
  userSelect: "none" as const,
});

const optionHoverStyle = {
  color: "#4A90E2",
  borderBottom: "2px solid #4A90E2",
};

const descriptionStyle = {
  color: "#D3D8E0",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 400,
  fontSize: "1.7rem",
  textAlign: "center" as const,
  maxWidth: "600px",
  margin: "2rem 0 0 0",
  lineHeight: "1.6",
  padding: "0 1rem",
  transition: "opacity 0.3s ease",
};

const descriptions = {
  Insights: "Gain a comprehensive view of your finances with PIA's real-time dashboard, where you can monitor your total balance, track income streams, and analyze expenses with ease. The AI-powered interface automatically updates your financial snapshot, offering a clear picture of your savings and spending patterns, all tailored to help you make informed decisions.",
  Tips: "Simplify your financial record-keeping with PIA's intuitive transaction management system, allowing you to log every purchase or income source in seconds. The system streamlines the process of organizing your cash flow, credit card activity, and savings, ensuring you're fully prepared to manage your finances efficiently.",
  Transactions: "Unlock personalized financial growth with PIA's savings optimization feature, where the AI analyzes your spending habits and delivers tailored recommendations to cut costs and boost savings. Expect actionable advice like reducing discretionary spending or reallocating funds, all designed to maximize your financial health."
};

function FeaturesOptions() {
  const [selectedOption, setSelectedOption] = useState("Insights");

  const options = ["Insights", "Tips", "Transactions"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <section style={sectionStyle}>
      <div style={optionsContainerStyle}>
        {options.map((option) => (
          <div
            key={option}
            style={optionStyle(selectedOption === option)}
            onClick={() => handleOptionClick(option)}
            onMouseEnter={(e) => {
              if (selectedOption !== option) {
                Object.assign(e.currentTarget.style, optionHoverStyle);
              }
            }}
            onMouseLeave={(e) => {
              if (selectedOption !== option) {
                e.currentTarget.style.color = "#D3D8E0";
                e.currentTarget.style.borderBottom = "2px solid transparent";
              }
            }}
          >
            {option}
          </div>
        ))}
      </div>
      <div style={descriptionStyle}>
        {descriptions[selectedOption as keyof typeof descriptions]}
      </div>
    </section>
  );
}

export default FeaturesOptions;
