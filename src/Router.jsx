import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./views/Admin";
import Appointments from "./views/Appointments";
import Clinics from "./views/Clinics";
import Dashboard from "./views/Dashboard";
import Doctors from "./views/Doctors";
import Labs from "./views/Labs";
import Patients from "./views/Patients";
import Rating from "./views/Rating";
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route element={<Admin />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clinics" element={<Clinics />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/rating" element={<Rating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
