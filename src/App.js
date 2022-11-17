import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import WdList from "./WdList";
import Wd from "./Wd";
import Search from "./Search";
import Bookmark from "./Bookmark";
import Password from "./Password";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/wdlist" element={<WdList />} />
        <Route path="/wd/:id" element={<Wd />} />
        <Route path="/search" element={<Search />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/pw" element={<Password />} />
      </Routes>
    </BrowserRouter>
  );
}
// 순서를 생각하고 넣기
export default App;
