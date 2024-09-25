import FullscreenButton from "./FullscreenButton";
import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState(() => {
    return localStorage.getItem("background") || "/paris-rain.webp";
  });

  return (
    <div
      className={`h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center transition-all`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Timer setBackground={setBackground} />
      <FullscreenButton />
    </div>
  );
}

export default App;
