import { useEffect, useState } from "react";
import "./Clock.scss";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2 className="clock">{time}</h2>;
}
