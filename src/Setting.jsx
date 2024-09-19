import { Settings, XIcon, Github, Twitter } from "lucide-react";
import { useState } from "react";

function Setting({
  setBackground,
  pomoDuration,
  setPomoDuration,
  shortDuration,
  setShortDuration,
  longDuration,
  setLongDuration,
}) {
  const [modal, setModal] = useState(false);

  const backgroundImages = [
    "/night-ghibli.webp",
    "/paris-rain.webp",
    "/sunrise-seoul.webp",
    "/cozy-room.webp",
  ];

  function toggleModal() {
    setModal(!modal);
  }

  const updateDuration = (setter, key) => (e) => {
    const value = parseInt(e.target.value);
    setter(value);
    localStorage.setItem(key, value);
  };

  return (
    <div>
      <button
        className="text-white p-2 rounded-full absolute top-5 right-5"
        onClick={toggleModal}
      >
        {<Settings />}
      </button>
      {/* Modal overlay */}
      <div
        className={`fixed inset-0 flex justify-center items-center transitions-colors ${modal ? "visible bg-black/20" : "invisible"}`}
        onClick={toggleModal}
      >
        {/* Modal content */}
        <div
          className={`w-5/6 lg:w-2/6 bg-black text-white rounded-3xl shadow p-8 transition-all ${modal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-2 p-1" onClick={toggleModal}>
            {<XIcon />}
          </button>
          <h1 className="mt-5 font-bold text-4xl">Settings</h1>

          {/* Background selection */}
          <h2 className="mt-8 font-bold text-2xl">Backgrounds</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            {backgroundImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="background"
                className="rounded-2xl cursor-pointer transition-all hover:scale-110"
                onClick={() => setBackground(image)}
              ></img>
            ))}
          </div>

          {/* Timer duration settings */}
          <h2 className="mt-8 font-bold text-2xl">Timers</h2>
          <form className="mt-4">
            {/* Pomodoro duration input */}
            <div className="mb-5">
              <label htmlFor="pomodoro" className="block text-gray-400">
                Pomodoro
              </label>
              <input
                type="number"
                placeholder="Minute"
                id="pomodoro"
                name="pomodoro"
                value={pomoDuration}
                min={1}
                onChange={updateDuration(setPomoDuration, "pomoDuration")}
                className="bg-transparent border-2 rounded-lg px-3 py-2"
              />
            </div>
            {/* Short break duration input */}
            <div className="mb-5">
              <label htmlFor="shortBreak" className="block text-gray-400">
                Short Break
              </label>
              <input
                type="number"
                id="shortBreak"
                name="shortBreak"
                value={shortDuration}
                min={1}
                onChange={updateDuration(setShortDuration, "shortDuration")}
                className="bg-transparent border-2 rounded-lg px-3 py-2"
              />
            </div>
            {/* Long break duration input */}
            <div>
              <label htmlFor="longBreak" className="block text-gray-400">
                Long Break
              </label>
              <input
                type="number"
                id="longBreak"
                name="longBreak"
                value={longDuration}
                min={1}
                onChange={updateDuration(setLongDuration, "longDuration")}
                className="bg-transparent border-2 rounded-lg px-3 py-2"
              />
            </div>
          </form>
          <div className="mt-12 flex justify-center items-center gap-4">
            <a
              href="https://github.com/leanghok120/beardoro"
              target="_blank"
              className="text-gray-400"
            >
              {<Github />}
            </a>
            <a
              href="https://x.com/leangphok"
              target="_blank"
              className="text-gray-400"
            >
              {<Twitter />}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
