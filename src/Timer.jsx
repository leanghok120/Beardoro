import { useEffect, useState } from "react";
import { Reset, Start } from "./Buttons";
import Setting from "./Setting";

function Timer({ setBackground }) {
  // Duration for modes
  const [pomoDuration, setPomoDuration] = useState(() => {
    return parseInt(localStorage.getItem("pomoDuration")) || 50;
  });
  const [shortDuration, setShortDuration] = useState(() => {
    return parseInt(localStorage.getItem("shortDuration")) || 15;
  });
  const [longDuration, setLongDuration] = useState(() => {
    return parseInt(localStorage.getItem("longDuration")) || 25;
  });

  const [timeLeft, setTimeLeft] = useState(pomoDuration * 60);

  const [isActive, setIsActive] = useState(false);

  // modes: pomodoro, short break, long break
  const [mode, setMode] = useState("pomodoro");

  // Sound for timer completion
  const [sound] = useState(new Audio("/src/assets/bell.mp3"));

  // setBackground with localstorage
  function setBackgroundWithStorage(image) {
    setBackground(image);
    localStorage.setItem("background", image);
  }

  // Get settings from localStorage
  useEffect(() => {
    localStorage.setItem("pomoDuration", pomoDuration);
    localStorage.setItem("shortDuration", shortDuration);
    localStorage.setItem("longDuration", longDuration);
  }, [pomoDuration, shortDuration, longDuration]);

  // countdown logic
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      // Start the countdown
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer completed
      setIsActive(false);
      sound.play();
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, sound]);

  // Update timer duration when settings change
  useEffect(() => {
    updateTimerDuration();
  }, [pomoDuration, shortDuration, longDuration, mode]);

  function toggleTimer() {
    setIsActive(!isActive);
  }

  // Format seconds to MM:SS
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function resetTimer() {
    setIsActive(false);
    updateTimerDuration();
  }

  // Change timer mode (pomodoro, short break, long break)
  function changeMode(newMode) {
    setIsActive(false);
    setMode(newMode);
    updateTimerDuration(newMode);
  }

  // Update timer duration based on current mode
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
            setBackground={setBackgroundWithStorage}
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
