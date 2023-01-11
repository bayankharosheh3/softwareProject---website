import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Style from "./styles.module.css";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <i class="bx bx-grid-alt"></i>,
    },
    {
      path: "/clinics",
      name: "clinics",
      icon: <i class="bx bx-home-heart"></i>,
    },
    {
      path: "/doctors",
      name: "Doctors",
      icon: <i class="bx bxs-user-account"></i>,
      subMenu: "",
    },
    {
      path: "/patients",
      name: "Patients",
      icon: <i class="bx bx-user"></i>,
    },
    {
      path: "/labs",
      name: "Labs",
      icon: <i class="bx bx-band-aid"></i>,
    },
    {
      path: "/appointments",
      name: "Appointments",
      icon: <i class="bx bx-calendar"></i>,
    },
  ];

  const x = false;

  return (
    // <div>
    //   <div className="container">
    //     <div style={{ width: isOpen ? "100%" : "20%", backgroundColor:"red" }} className="sidebar">
    //       <div className="top_section">
    //         <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
    //           Logo
    //         </h1>
    //         <div
    //           style={{ marginLeft: isOpen ? "50px" : "0px" }}
    //           className="bars"
    //         >
    //           <button onClick={toggle}>
    //             <img src="assets/icons/logo.svg" alt="" srcset="" />
    //           </button>
    //         </div>
    //       </div>
    //       {menuItem.map((item, index) => (
    //         <NavLink
    //           to={item.path}
    //           key={index}
    //           className="link"
    //           activeclassName="active"
    //         >
    //           <div className="icon">
    //             <img src="icons/grid.svg" alt="" srcset="" />
    //           </div>
    //           <div
    //             style={{ display: isOpen ? "block" : "none" }}
    //             className="link_text"
    //           >
    //             {item.name}
    //           </div>
    //         </NavLink>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <>
      <div className={Style.sidebar}>
        <div className={Style.logoDetails}>
          <div className={Style.logoContainer}>
            <img src="assets/images/logo.png" alt="logo" />
          </div>
          <span className={Style.logoName}>Clinics Website</span>
        </div>
        <ul className={Style.navLinks}>
          {menuItem.map((item, index) => {
            return (
              <li key={index}>
                <NavLink
                  href="#"
                  to={item.path}
                  activeclassName="active"
                  className={Style.link}
                >
                  {item.icon}
                  <span className={Style.linkName}>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
          <li>
            <div className={Style.profileDetails}>
              <div className={Style.profileContent}>
                {/* <img src="image/profile.jpg" /> */}
              </div>
              <div>
                <div className={Style.profileName}>Admin Profile</div>
                <div className={Style.job}>log out</div>
              </div>
              <i class="bx bx-log-out"></i>
            </div>
          </li>
        </ul>
      </div>
      <section className={Style.homeSection}>
        <div className={Style.homeContent}>
          <i class="bx bx-menu"></i>
        </div>
        <div className={Style.section}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default AdminNav;
