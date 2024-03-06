import React, { useState } from "react";
import { User } from "./Users.type";
import "./edit.css";

type Props = {
  OnClosepoup: () => void;
  edit: User;
  updatedUserData: (obj: User) => void;
};

const Edit = (prop: Props) => {
  const { OnClosepoup, edit, updatedUserData } = prop;

  const [firstName, setFirstName] = useState(edit.firstName);
  const [lastName, setLastName] = useState(edit.lastName);
  const [email, setEmail] = useState(edit.email);

  const onFirstNameChange = (e: any) => {
    setFirstName(e.target.value);
  };
  const onLasstNameChange = (e: any) => {
    setLastName(e.target.value);
  };

  const onEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const onsubmitClick = (e: any) => {
    e.preventDefault();
    const usersData: User = {
      id: edit.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    updatedUserData(usersData);
  };

  return (
    <>
      <div className="edit_cont">
        <button className="close" onClick={OnClosepoup}></button>
        <form className="inputs">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={onFirstNameChange}
          />

          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={onLasstNameChange}
          />

          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />
        </form>
        <input type="button" value="Update" onClick={onsubmitClick} />
      </div>
      ;
    </>
  );
};

export default Edit;
