import { useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [navState, setNavState] = useState(true)

  return (
    <div className="App">
      <Navbar navState={navState} setNavState={setNavState} />
      <Contact />
    </div>
  );
}

export default App;
