import React from "react";
import "./header.css";
import { AddNew } from "./AddNew";

type Props = {
  onAdd: () => void;
};
export const Header = (prop: Props) => {
  const { onAdd } = prop;
  return (
    <>
      <div className="header">
        <h1>CRUD web</h1>
        <button onClick={onAdd}>AddNew</button>
      </div>
    </>
  );
};
