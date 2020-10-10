import React from "react";

export default function LinksList(props) {
  return (
    <nav className="nav-container">
      <ul className="clean-list flex space-around">
        {props.links.map((link) => (
          <li className={(link.isActive)? 'link-active': ''} key={link.name}>{link.name}</li>
        ))}
      </ul>
    </nav>
  );
}
