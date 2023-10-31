import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
// import { faUser } from "@fortawesome/free-solid-svg-icons"; 


export const SidebarData = [
  {
    title: "General",
    icon: <FontAwesomeIcon icon= {faHouse}/>,
    link: "/",
  },
  {
    title: "EM-Registration",
    icon: <FontAwesomeIcon icon= {faPlusCircle}/>,
    link: "/Registration",
  },
  {
    title: "WOF-Approvals",
    icon: <FontAwesomeIcon icon= {faCheckCircle}/>,
    link: "/Approvals",
  },
  
  // {
  //   title: "Users",
  //   icon: <FontAwesomeIcon icon= {faUser}/>,
  //   link: "/Users",
  // },
];
