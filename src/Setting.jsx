import { Settings, XIcon } from "lucide-react";
import { useState } from "react";

function Setting({ setBackground, min, handleMinChange }) {
  const [modal, setModal] = useState(false);
  const backgroundImages = [
    "/src/assets/night-ghibli.jpg",
    "/src/assets/paris-rain.jpg",
    "/src/assets/sunrise-seoul.jpg",
  ];

  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button
        className="text-white p-2 rounded-full absolute top-5 right-5"
        onClick={toggleModal}
      >
        {<Settings />}
      </button>

      <div
        className={`fixed inset-0 flex justify-center items-center transitions-colors ${modal ? "visible bg-black/20" : "invisible"}`}
        onClick={toggleModal}
      >
        <div
          className={`w-5/6 lg:w-2/6 bg-black text-white rounded-3xl shadow p-8 transition-all ${modal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-2 p-1" onClick={toggleModal}>
            {<XIcon />}
          </button>
          <h1 className="mt-5 font-bold text-4xl">Settings</h1>
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
          <h2 className="mt-8 font-bold text-2xl">Timer</h2>
          <form className="mt-4">
            <label for="minute" className="block text-gray-400">
              Pomodoro
            </label>
            <input
              type="number"
              placeholder="Minute"
              id="minute"
              name="minute"
              value={min}
              onChange={(e) => {
                handleMinChange(e.target.value);
              }}
              className="bg-transparent border-2 rounded-lg px-3 py-2"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Setting;
