import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import Teachers from "./pages/Teachers";
import Answers from "./pages/Answers";
import Details from "./pages/Details";
import AddAnswer from "./pages/AddAnswer";
import { createContext } from "react";


export const UserName = createContext('')

function App() {
  return (
  <>
    <UserName.Provider value="example">
      <Routes>

        <Route path="/register" element={<Register />} />

        <Route path="/subjects" element={<Subjects />} />
        
        <Route path="/teachers" element={<Teachers />} />

        <Route path="/answers" element={<Answers />} />

        <Route path="/" element={<Login />} />

        <Route path="/details" element={<Details />} />

        <Route path="/addanswer" element={<AddAnswer />} />
      </Routes>
    </UserName.Provider>
  </>
  );
}
export default App