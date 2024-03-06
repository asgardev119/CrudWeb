import React, { useState } from "react";
import "./addNew.style.css";
import { DummyUsers, User } from "./Users.type.ts";

type Props = {
  onBackbtn: () => void;
  onSubmitbtn: (usersData: User) => void;
};

export const AddNew = (props: Props) => {

  const { onBackbtn, onSubmitbtn } = props;

  const [error, setError] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const [showError, setShowError] = useState(false);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const Validate = () => {
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const { firstName, lastName, email } = inputs;

    if (firstName === "") {
      setShowError(true);
      error.firstname = "First Name Required";
      return false;
    } else {
      setShowError(false);
      error.firstname = "";
    }

    if (lastName === "") {
      error.lastname = "last Name Required";
      setShowError(true);
      return false;
    } else {
      setShowError(false);
      error.lastname = "";
    }

    if (email === "" || !gmailRegex.test(email)) {
      setShowError(true);
      error.email = "email Required";
      return false;
    } else {
      setShowError(false);
      error.email = "";
    }

    return true;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  const onsubmitClick = (e: any) => {
    e.preventDefault();
    const { firstName, lastName, email } = inputs;
    if (Validate()) {
      const usersData: User = {
        id: new Date().toJSON().toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
      };
      onSubmitbtn(usersData);
    } else {
      Validate();
    }
  };

  return (
    <>
      <div className="addnew_root">
        <h2>Add Details</h2>
        <form className="inputs" onSubmit={onsubmitClick}>
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={inputs.firstName}
            onChange={handleChange}
          />
          {showError && (
            <small style={{ color: "red" }}>{error.firstname}</small>
          )}
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={inputs.lastName}
            onChange={handleChange}
          />
          {showError && (
            <small style={{ color: "red" }}>{error.lastname}</small>
          )}
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={inputs.email}
            onChange={handleChange}
          />
          {showError && <small style={{ color: "red" }}>{error.email}</small>}
        </form>
        <div className="btns">
          <button onClick={onBackbtn}>Back</button>
          <button onClick={onsubmitClick}>Submit</button>
        </div>
      </div>
    </>
  );
};
