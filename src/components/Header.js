import "./styles/header.css";
import "../styles.css";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faMoon);

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="Header container">
        <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
          Where in the world?
        </h1>
        <div
          onClick={() => {
            setDarkMode(!darkMode);
            console.log(darkMode);
          }}
          className="mood__changer"
        >
          <FontAwesomeIcon
            style={{ marginTop: "3px", marginRight: "6px" }}
            name="moon"
            icon={faMoon}
          />
          <h1>Dark mode</h1>
        </div>
      </div>
    </div>
  );
}
