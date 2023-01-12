import React, { useState } from "react";
import {
  Badge,
  Button,
  Modal,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Style from "./styles.module.css";

const TodayTable = ({ rows, columns }) => {
  const sorted = rows.sort((p1, p2) => {
    return p1.time > p2.time ? 1 : p1.time < p2.time ? -1 : 0;
  });

  return (
    <div className={Style.tableContainer}>
      <Table className={Style.table}>
        <thead className={Style.tableHead}>
          <tr>
            {columns.map((item2) => (
              <th>{item2}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <span className={Style.number}>{item.time}</span>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.imgContainer}>
                      <img src={item.patient.img} alt="user-img" />
                    </div>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.patient.name}</p>
                      <p className={Style.detail}>{item.patient.email}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className={Style.profile}>
                    <div className={Style.imgContainer}>
                      <img src={item.doctor.img} alt="user-img" />
                    </div>
                    <div className={Style.textContainer}>
                      <p className={Style.para}>{item.doctor.name}</p>
                      <p className={Style.detail}>{item.doctor.email}</p>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TodayTable;
