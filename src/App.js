import React, { useState, useEffect, useRef } from "react";
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
import EmailRow from "./sections/EmailRow.tsx"
import Footer from "./sections/Footer.tsx";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFeaturesHeader, setShowFeaturesHeader] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const handleScrollClick = () => {
    // Scroll to the target position for full animation
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };

  useEffect(() => {
    function onScroll() {
      if (isScrolled) return;
      const scrollY = window.scrollY;
      const start = 0;
      const end = 400;
      let progress = (scrollY - start) / (end - start);
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
      if (progress === 1 && !showFeaturesHeader) {
        setShowFeaturesHeader(true);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isScrolled, showFeaturesHeader]);

  return (
    <div className="app-background" ref={scrollContainerRef}>
      <div className="main-content-3col">
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
            <MainMockup
              disableMouseFollow={isScrolled || scrollProgress === 1}
              scrollProgress={isScrolled ? 1 : scrollProgress}
            />
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
      {!isScrolled && !showFeaturesHeader && (
        <div style={{ height: '120vh', width: '100%' }} />
      )}
      <div className={`features-section ${showFeaturesHeader ? 'visible' : ''}`}>
        <FeaturesHeader />
        <FeaturesOptions />
        <EmailRow />
      </div>
      <Footer />
    </div>
  );
}

export default App;