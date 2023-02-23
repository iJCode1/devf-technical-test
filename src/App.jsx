import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [navState, setNavState] = useState(true)

  return (
    <div className="App">
      <Navbar navState={navState} setNavState={setNavState} />
    </div>
  );
}

export default App;
