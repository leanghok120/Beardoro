import { Settings, XIcon } from "lucide-react";
import { useState } from "react";

function Setting() {
  const [modal, setModal] = useState(false);
  function toggleModal() {
    setModal(!modal);
  }

  return (
    <div>
      <button className="text-white p-2 rounded-full" onClick={toggleModal}>
        {<Settings />}
      </button>

      <div
        className={`fixed inset-0 flex justify-center items-center transitions-colors ${modal ? "visible bg-black/20" : "invisible"}`}
        onClick={toggleModal}
      >
        <div
          className={`w-2/6 bg-black text-white rounded-xl shadow p-8 transition-all ${modal ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="absolute top-2 right-2 p-1" onClick={toggleModal}>
            {<XIcon />}
          </button>
          <h1 className="mt-5 font-bold text-4xl">Settings</h1>
          <p className="mt-4 text-lg">Coming soon!</p>
        </div>
      </div>
    </div>
  );
}

export default Setting;
