import React, { useEffect, useState } from "react";

type CountDownClockProps = {
  targetDate: Date | string;
};

const clockStyle = {
  color: "#F5A623",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: 700,
  fontSize: "4rem",
  textAlign: "left" as const,
  margin: "0.5rem 0 0 0",
  letterSpacing: "0.1em",
  display: "inline-block",
};

const secondsStyle = {
  fontSize: "1rem",
  fontWeight: 500,
  opacity: 0.7,
  marginLeft: "0.25em",
  verticalAlign: "middle",
};

function pad(num: number): string {
  return num.toString().padStart(2, "0");
}

function CountDownClock({ targetDate }: CountDownClockProps) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const target = new Date(targetDate);
      const diff = target.getTime() - now.getTime();
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div style={clockStyle}>
      {pad(timeLeft.days)}:{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}
      <span style={secondsStyle}>:{pad(timeLeft.seconds)}</span>
    </div>
  );
}

export default CountDownClock;
