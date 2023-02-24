import { useState, useEffect } from "react";
import Apod from "./components/Apod";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { getApod } from "./services/nasa";

function App() {
  const [navState, setNavState] = useState(true);
  const [apod, setApod] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApod().then((data, isError)=> {
      if(isError) {
        console.log('Error')
        return;
      }
      setApod(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading isLoading={loading} />
  }

  return (
    <div className="App">
      <Navbar navState={navState} setNavState={setNavState} />
      <Apod {...apod} />
      <Contact />
    </div>
  );
}

export default App;
