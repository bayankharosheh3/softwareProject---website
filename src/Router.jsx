import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./views/Admin";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route element={<SignIn />} path='/signIn'></Route>
        <Route element={<Admin />} path='/admin'></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
