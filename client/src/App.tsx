import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import Main from "./pages/Main";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-header">
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
