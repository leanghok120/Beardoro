import { useEffect, useState } from "react";
import { Reset, Start } from "./Buttons";
import Setting from "./Setting";

function Timer({ setBackground }) {
  const [pomoDuration, setPomoDuration] = useState(50);
  const [shortDuration, setShortDuration] = useState(15);
  const [longDuration, setLongDuration] = useState(25);
  const [timeLeft, setTimeLeft] = useState(pomoDuration * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState("pomodoro");
  const [sound, setSound] = useState(new Audio("/src/assets/bell.mp3"));

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      sound.play();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    updateTimerDuration();
  }, [pomoDuration, shortDuration, longDuration, mode]);

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
    updateTimerDuration();
  }

  function changeMode(newMode) {
    setIsActive(false);
    setMode(newMode);
    updateTimerDuration(newMode);
  }

  function updateTimerDuration(currentMode = mode) {
    switch (currentMode) {
      case "pomodoro":
        setTimeLeft(pomoDuration * 60);
        break;
      case "short break":
        setTimeLeft(shortDuration * 60);
        break;
      case "long break":
        setTimeLeft(longDuration * 60);
        break;
      default:
        setTimeLeft(pomoDuration * 60);
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
          {formatTime(timeLeft)}
        </h1>
        <div className="flex items-center gap-2 mt-10">
          <Start onClick={toggleTimer} isActive={isActive} />
          <Reset onClick={resetTimer} />
          <Setting
            setBackground={setBackground}
            pomoDuration={pomoDuration}
            setPomoDuration={setPomoDuration}
            shortDuration={shortDuration}
            setShortDuration={setShortDuration}
            longDuration={longDuration}
            setLongDuration={setLongDuration}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;
