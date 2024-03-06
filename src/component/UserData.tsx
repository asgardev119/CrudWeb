import React, { useState } from "react";
import "./userData.style.css";
import { User } from "./Users.type.ts";
import { ShowData } from "./ShowData.tsx";

type Props = {
  list: User[];
  onDelete: (DummyUsers: User) => void;
  showPoup: (DummyUsers: User) => void;
  onEdit: (DummyUsers: User) => void;
};
export const UserData = (props: Props) => {
  const { list, onDelete, showPoup, onEdit } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="usersData">
        <table>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>action</th>
          </tr>
          {list.map((obj) => {
            return (
              <tr>
                <td>{`${obj.firstName} ${obj.lastName}`}</td>

                <td>{obj.email}</td>

                <td>
                  <div className="action">
                    <button onClick={() => onDelete(obj)} id="btnicon">
                      <img src="delete.png" alt="" />
                    </button>
                    <button id="btnicon" onClick={() => onEdit(obj)}>
                      <img src="compose.png" alt="" />
                    </button>
                    <button onClick={() => showPoup(obj)} id="btnicon">
                      <img src="view.png" alt="" />
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </section>
    </>
  );
};
