import React, { useState } from "react";
import { Header } from "../component/Header.tsx";
import { UserData } from "../component/UserData.tsx";
import { AddNew } from "../component/AddNew.tsx";
import { DummyUsers, User, pageEnum } from "../component/Users.type.ts";
import "./home.css";
import { ShowData } from "../component/ShowData.tsx";
import Edit from "../component/Edit.tsx";

const Home = () => {
  const [show, setShow] = useState(pageEnum.UserData);
  const [users, setUsers] = useState(DummyUsers as User[]);

  const [edit, setEdit] = useState({} as User);

  // const onAddNew = () => {
  //   setShow(pageEnum.AddNew);
  // };

  const onBackbtn = () => {
    setShow(pageEnum.UserData);
  };

  const onSubmitbtn = (usersData: User) => {
    setUsers([...users, usersData]);
    setShow(pageEnum.UserData);
  };

  const onDelete = (obj: User) => {
    const userIndex = users.indexOf(obj);
    const tempData = [...users];
    tempData.splice(userIndex, 1);
    setUsers(tempData);
  };

  const showPoup = () => {
    setShow(pageEnum.ShowData);
  };

  const onEdit = (obj: User) => {
    setShow(pageEnum.Edit);
    setEdit(obj);
  };

  const OnClosepoup = () => {
    setShow(pageEnum.UserData);
  };

  const updatedUserData = (obj: User) => {
    const filterData = users.filter((x) => x.id === obj.id)[0];
    const indexOfRecord = users.indexOf(filterData);
    const tempData = [...users];
    tempData[indexOfRecord] = obj;
    setUsers(tempData);
    setShow(pageEnum.UserData);
  };

  const onAdd = () => {
    setShow(pageEnum.AddNew);
  };
  return (
    <div className="container">
      <Header onAdd={onAdd} />
      {show === pageEnum.UserData && (
        <UserData
          list={users}
          onDelete={onDelete}
          showPoup={showPoup}
          onEdit={onEdit}
        />
      )}
      {show === pageEnum.AddNew && (
        <AddNew onBackbtn={onBackbtn} onSubmitbtn={onSubmitbtn} />
      )}
      {show === pageEnum.ShowData && (
        <ShowData OnClosepoup={OnClosepoup} list={users} />
      )}

      {show === pageEnum.Edit && (
        <Edit
          OnClosepoup={OnClosepoup}
          edit={edit}
          updatedUserData={updatedUserData}
        />
      )}
    </div>
  );
};

export default Home;
