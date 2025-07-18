import React from "react";
import "./App.css";
import logo from "./large-logo.png"
import Title from "./components/Title.tsx";
import AppDesc from "./components/AppDesc.tsx";
import CountDown from "./sections/CountDown.tsx";
import Email from "./sections/Email.tsx";

function App() {
  return (
    <div className="app-background">
      <Title />
      <AppDesc />
      <CountDown />
      <img src={logo} alt="PIA logo"/>
      <Email />
    </div>
  );
}

export default App;
