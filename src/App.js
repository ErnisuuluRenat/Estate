import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import { Home } from "./pages/Home";
import { Auth } from "./pages/Auth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
