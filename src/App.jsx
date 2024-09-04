import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("/src/assets/night-ghibli.jpg");

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
