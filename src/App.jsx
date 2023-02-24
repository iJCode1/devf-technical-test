import { useState, useEffect } from "react";
import Apod from "./components/Apod";
import Cme from "./components/Cme";
import Contact from "./components/Contact";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { getApod, getCME, getMars } from "./services/nasa";
import Mars from "./components/Mars";

function App() {
  const [navState, setNavState] = useState(true);
  const [apod, setApod] = useState({});
  const [cme, setCme] = useState({});
  const [mars, setMars] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApod().then((data, isError)=> {
      if(isError) {
        console.log('Error')
        return;
      }
      setApod(data);
    });
  }, []);

  useEffect(() => {
    getMars().then((data, isError)=> {
      if(isError) {
        console.log('Error')
        return;
      }
      setMars(data);
    });
  }, []);

  useEffect(() => {
    getCME().then((data, isError)=> {
      if(isError) {
        console.log('Error')
        return;
      }
      setCme(data);
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
      <Mars {...mars} />
      <Cme {...cme} />
      <Contact />
    </div>
  );
}

export default App;
