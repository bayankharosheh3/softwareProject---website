import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../components/AdminNav";

const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminNav />
      {/* <Outlet /> */}
    </div>
  );
};

export default Admin;
