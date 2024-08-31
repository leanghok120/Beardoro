import { useEffect, useState } from "react";
import { Reset, Start } from "./Buttons";

function Timer() {
  const [time, setTime] = useState(50 * 60); // 50 min
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("pomodoro");

  useEffect(() => {
    let interval = null;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  function toggleTimer() {
    setIsActive(!isActive);
  }

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function resetTimer() {
    setIsActive(false);
    setTime(50 * 60);
  }

  function changeMode(mode) {
    setIsActive(false);
    setMode(mode);

    switch (mode) {
      case "pomodoro":
        setTime(50 * 60);
        break;
      case "short break":
        setTime(15 * 60);
        break;
      case "long break":
        setTime(25 * 60);
        break;
      default:
        setTime(50 * 60);
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4">
        {["pomodoro", "short break", "long break"].map((m) => (
          <button
            className={`font-bold border-2 px-4 py-2 rounded-full text-lg pointer ${mode === m ? "bg-white text-black" : "bg-trans text-white"} `}
            key={m}
            onClick={() => changeMode(m)}
          >
            {m}
          </button>
        ))}
      </div>
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-bold text-white text-center text-9xl">
          {formatTime(time)}
        </h1>
        <div className="flex items-center gap-2 mt-10">
          <Start onClick={toggleTimer} isActive={isActive} />
          <Reset onClick={resetTimer} />
        </div>
      </div>
    </div>
  );
}

export default Timer;
