import "./Sidebar.css";
import React from "react";
import { SidebarData } from "./SidebarData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div className="Sidebar h-screen">
        <h1 className="mb-16 text-2xl text-white pl-5"> TRCA </h1>
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              className="SidebarItem"
              id={window.location.pathname === val.link ? "active" : ""}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div className="SidebarItemIcon">{val.icon}</div>
              <div className="SidebarItemTitle">{val.title}</div>
            </li>
          );
        })}
        <li
          className="SidebarLogout"
          onClick={() => {
            window.location.pathname = "/login";
          }}
        >
          <FontAwesomeIcon className="SidebarItemIcon" icon= {faSignOut}/>
          <div className="SidebarItemTitle">Logout</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
