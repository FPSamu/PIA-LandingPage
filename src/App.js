import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./large-logo.png";
import Title from "./components/Title.tsx";
import AppDesc from "./components/AppDesc.tsx";
import CountDown from "./sections/CountDown.tsx";
import Email from "./sections/Email.tsx";
import MainMockup from "./components/Mockup.tsx";
import ScrollButton from "./components/ScrollButton.tsx";
import FeaturesHeader from "./sections/FeaturesHeader.tsx";
import FeaturesOptions from "./sections/FeaturesOptions.tsx";
import EmailRow from "./sections/EmailRow.tsx";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSecondAnimation, setIsSecondAnimation] = useState(false);
  const [showFeaturesHeader, setShowFeaturesHeader] = useState(false);

  const handleScrollClick = () => {
    setIsScrolled(true);
    // Start second animation after first one completes
    setTimeout(() => {
      setIsSecondAnimation(true);
    }, 800);
    // Show features header after second animation completes
    setTimeout(() => {
      setShowFeaturesHeader(true);
    }, 1800);
  };

  return (
    <div className="app-background">
      <div className={`main-content-3col ${isScrolled ? 'scrolled' : ''} ${isSecondAnimation ? 'second-animation' : ''}`}>
        <div className="left-col">
          <div className="title-section">
            <Title />
          </div>
          <div className="desc-section">
            <AppDesc />
          </div>
          <div className="countdown-section">
            <CountDown />
          </div>
        </div>
        <div className="center-col">
          <div className="mockup-section">
            <MainMockup disableMouseFollow={isSecondAnimation} />
          </div>
          <div className="scroll-btn-wrapper">
            <ScrollButton onClick={handleScrollClick} />
          </div>
        </div>
        <div className="right-col">
          <div className="logo-section">
            <img src={logo} alt="PIA logo" />
          </div>
          <div className="email-section">
            <Email />
          </div>
        </div>
      </div>
      <div className={`features-section ${showFeaturesHeader ? 'visible' : ''}`}>
        <FeaturesHeader />
        <FeaturesOptions />
        <EmailRow />
      </div>
    </div>
  );
}

export default App;
