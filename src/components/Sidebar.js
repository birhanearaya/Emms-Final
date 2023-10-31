import ".././index.css";
import React from "react";
// import { SidebarData } from "./SidebarData";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faWrench } from "@fortawesome/free-solid-svg-icons";
const role = localStorage.getItem('role');


function Sidebar() {
  const handleLogout =  () => {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
      window.location.pathname = "/Login"
  }
  return (
    <div className="Sidebar h-screen">
        <h1 className="mb-16 text-2xl text-white pl-5"> TRCA </h1>
      <ul className="SidebarList">
        <>
              <li
                
                className="SidebarItem"
                id={window.location.pathname === '/' ? "active" : ""}
                onClick={() => {
                  window.location.pathname = '/';
                }}
              >
                <div className="SidebarItemIcon"><FontAwesomeIcon icon= {faHouse}/></div>
                <div className="SidebarItemTitle">General</div>
              </li>
              
              {role === "eqAdmin" &&(
                <li
                
                className="SidebarItem"
                id={window.location.pathname === '/Registration' ? "active" : ""}
                onClick={() => {
                  window.location.pathname = '/Registration';
                }}
              >
                <div className="SidebarItemIcon"><FontAwesomeIcon icon= {faPlusCircle}/></div>
                <div className="SidebarItemTitle">EM-Registration</div>
              </li>
              )}
              {role === "inspector" &&(
                <li
                
                className="SidebarItem"
                id={window.location.pathname === '/Approvals' ? "active" : ""}
                onClick={() => {
                  window.location.pathname = '/Approvals';
                }}
              >
                <div className="SidebarItemIcon"><FontAwesomeIcon icon= {faCheckCircle}/></div>
                <div className="SidebarItemTitle">WOF-Approvals</div>
              </li>
              )}

              {role === "mechanic" &&(
                <li
                
                className="SidebarItem"
                id={window.location.pathname === '/Approvals' ? "active" : ""}
                onClick={() => {
                  window.location.pathname = '/Approvals';
                }}
              >
                <div className="SidebarItemIcon"><FontAwesomeIcon icon= {faWrench}/></div>
                <div className="SidebarItemTitle">Mechanic</div>
              </li>
              )}
              

              {role === "eqAdmin"&&(
              <li     
                  className="SidebarItem"
                  id={window.location.pathname === '/Users' ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = '/Users';
                  }}
                >
                  <div className="SidebarItemIcon"><FontAwesomeIcon icon= {faUser}/></div>
                  <div className="SidebarItemTitle">Users</div>
                </li>
              )}
        </>
        <li
          className="SidebarLogout"
          onClick={handleLogout}
        >
          <FontAwesomeIcon className="SidebarItemIcon" icon= {faSignOut}/>
          <div className="SidebarItemTitle">Logout</div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
