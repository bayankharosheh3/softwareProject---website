import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route element={<SignIn />} path='/signIn'></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
