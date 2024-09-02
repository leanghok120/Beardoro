import Timer from "./Timer";
import { useState } from "react";

function App() {
  const [background, setBackground] = useState("/src/assets/night-ghibli.jpg");

  return (
    <div
      className={`h-screen bg-[url(${background})] bg-center bg-cover bg-no-repeat flex justify-center items-center`}
    >
      <Timer setBackground={setBackground} />
    </div>
  );
}

export default App;
