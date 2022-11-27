import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";

import Main from "./pages/Main";
import Introduction from "./pages/Introduction";
import History from "./pages/History";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route path="/intro" element={<Introduction />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
