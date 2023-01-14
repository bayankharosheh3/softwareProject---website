import React from "react";
import SideNav from "../components/SideNav";

const secretary = () => {
  const menuItem = [
    {
      path: "/sappointments",
      name: "Appointments",
      icon: <i class="bx bx-calendar"></i>,
    },
  ];

  const profile = "Secretary Profile";
  return (
    <div style={{ display: "flex" }}>
      <SideNav menuItem={menuItem} profile={profile} />
      {/* <Outlet /> */}
    </div>
  );
};

export default secretary;
