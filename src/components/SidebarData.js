import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

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
  {
    title: "Equipment Repair",
    icon: <FontAwesomeIcon icon= {faScrewdriverWrench}/>,
    link: "/Repair",
  },
];
