import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import DetailPage from "./DetailPage";
import WdList from "./WdList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/b" element={<WdList />} />
        <Route path="/c" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
