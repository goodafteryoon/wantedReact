import React from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import WdList from "./WdList";
import Wd from "./Wd";
import Search from "./Search";
import Bookmark from "./Bookmark";
import Password from "./Password";
import Resume from "./Resume";

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
        <Route path="/cv/list" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}
// 순서를 생각하고 넣기
export default App;
