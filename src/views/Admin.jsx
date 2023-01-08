import React from "react";
import AdminNav from "../components/AdminNav";
import LeftCanvas from "../components/LeftCanvas";
import Section from "../components/Section";

const Admin = () => {
  return (
    <div style={{ display: "flex" }}>
      <LeftCanvas />
      <div>
        <AdminNav />
        <Section />
      </div>
    </div>
  );
};

export default Admin;
