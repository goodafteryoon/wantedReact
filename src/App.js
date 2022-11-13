import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ModalStore from "./modules/ModalStore";
import MainPage from "./MainPage";
import WdList from "./WdList";
import Wd from "./Wd";
import Search from "./Search";

function App() {
  return (
    <ModalStore>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/wdlist" element={<WdList />} />
          <Route path="/wd/:id" element={<Wd />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ModalStore>
  );
}

export default App;
