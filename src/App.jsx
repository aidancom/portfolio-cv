import { useState } from "react";
import "./css/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import PreHeader from "./components/PreHeader";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
function App() {
  return (
    <>
      <PreHeader></PreHeader>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="proyects" element={<Proyects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
