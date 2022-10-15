import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Ods from "./components/Ods";
import * as S from "./Styles/app";

export default function App() {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.DivBox>
        <S.Nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Me</Link>
          <Link to="/works">Works</Link>
          <Link to="/ods">Project Ods</Link>
          <Link to="/contact">Contact</Link>
        </S.Nav>
      </S.DivBox>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/ods" element={<Ods />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
