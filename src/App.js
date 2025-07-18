import React from "react";
import "./App.css";
import logo from "./large-logo.png";
import Title from "./components/Title.tsx";
import AppDesc from "./components/AppDesc.tsx";
import CountDown from "./sections/CountDown.tsx";
import Email from "./sections/Email.tsx";
import MainMockup from "./components/Mockup.tsx";

function App() {
  return (
    <div className="app-background">
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
            <MainMockup />
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
    </div>
  );
}

export default App;
