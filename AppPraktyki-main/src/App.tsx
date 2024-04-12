import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import Teachers from "./pages/Teachers";
import Answers from "./pages/Answers";

function App() {
  return (
  <>
    <Routes>

      <Route path="/register" element={<Register />} />

      <Route path="/subjects" element={<Subjects />} />
      
      <Route path="/teachers" element={<Teachers />} />

      <Route path="/answers" element={<Answers />} />

      <Route path="/" element={<Login />} /> |
    </Routes>

  </>
  );
}
export default App