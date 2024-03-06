import React, { useState } from "react";
import "./showData.css";
import { User } from "./Users.type";

type Props = {
  OnClosepoup: () => void;
  list: User[];
};

export const ShowData = (props: Props) => {
  const { OnClosepoup, list } = props;

  return (
    <>
      {list.map((obj) => {
        return (
          <div className="shoData_con">
            <button className="close" onClick={OnClosepoup}></button>

            <div className="p_cont">
              <p>
                First Name: <span>{obj.firstName}</span>
              </p>
              <p>
                Last Name: <span> {obj.lastName}</span>
              </p>
              <p>
                Email: <span> {obj.email}</span>
              </p>
            </div>
          </div>
        );
      })}
      ;
    </>
  );
};
