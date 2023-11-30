import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes as Router, Route, Routes } from "react-router-dom";
import BackroundImage from "./assest/Rectangle.png";
import { SignIn, SignUp } from "./layout";
import { Navbar, NotFound } from "./component";
import { Booklist } from "./page";

function App() {
  return (
    <>
      <div
        className="app"
        style={{
          backgroundImage: `url(${BackroundImage})`,
          width: "100%",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Routes>
          <Route path="/pages" element={<Booklist />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/signup" element={<SignIn />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
