import React from "react";
import { createContext } from "react";
import { router } from "./router/router";
import { RouterProvider } from "react-router-dom";

export const UserName = createContext("");

function App() {
  return (
    <UserName.Provider value="example">
      <RouterProvider router={router}></RouterProvider>
    </UserName.Provider>
  );
}
export default App;
