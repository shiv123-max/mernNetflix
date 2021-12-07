import React from "react";
import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMTYxMzQyYjkwZTNlM2IwNjEzNzQ4MiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyODk1MjA2OSwiZXhwIjoxNjI5ODE2MDY5fQ.490Seh789fK_ynpn7AxDDSJKwp82LBobbSnlClGgo4g",
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  });

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members </span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={user.profilePic || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
