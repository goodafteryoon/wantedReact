import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import WdList from "./WdList";
import Wd from "./Wd";
import Search from "./Search";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wdlist" element={<WdList />} />
        <Route path="/wd/:id" element={<Wd />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
