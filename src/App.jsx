import { useState, useEffect } from "react";
import "./css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import music from "./assets/music/music.mp3"

import Layout from "./components/Layout";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const subir = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const [abierto, setAbierto] = useState(false);
  useEffect(() => {
    const audio = new Audio(music);
    audio.play();
    return () => {
      audio.pause();
    };
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout abierto={abierto} setAbierto={setAbierto}/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="proyects" element={<Proyects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
     <div className="subir" onClick={subir}>
      <p><FontAwesomeIcon icon={faAngleUp}></FontAwesomeIcon></p>
     </div>
    </>
  );
}

export default App;
