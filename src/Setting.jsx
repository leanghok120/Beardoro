import { Settings } from "lucide-react";
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
    </div>
  );
}

export default Setting;
