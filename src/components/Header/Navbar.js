import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const RBTN = ({ rightBtnObjects }) => {
    return rightBtnObjects.map((item, key) => (
      <li key={key} style={{ listStyle: "none", margin: "0 5px" }}>
        <NavLink
          to={item.url}
          className="btn　non-deco"
          activeClassName={item.active}
          style={{ color: "white" }}>
          {item.title}
        </NavLink>
      </li>
    ));
  };
  const rightBtnObjects = [
    {
      title: "Products",
      active: "active",
      url: "/products",
    },
    {
      title: "Shopping List",
      active: "active",
      url: "/shopping-list",
    },
    {
      title: "Access",
      active: "active",
      url: "/access",
    },
  ];

  return (
    <>
      <ul style={{ display: "flex" }}>
        <RBTN rightBtnObjects={rightBtnObjects} />
      </ul>
    </>
  );
}
