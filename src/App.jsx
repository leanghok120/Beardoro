import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState(() => {
    return localStorage.getItem("background") || "/src/assets/paris-rain.jpg";
  });

  return (
    <div
      className={`h-screen bg-center bg-cover bg-no-repeat flex justify-center items-center transition-all`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <Timer setBackground={setBackground} />
    </div>
  );
}

export default App;
