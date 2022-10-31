import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Wd from "./Wd";
import WdList from "./WdList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wdlist" element={<WdList />} />
        <Route path="/wdlist/:id" element={<Wd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
