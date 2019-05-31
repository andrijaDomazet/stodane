import React from "react";

import Gornji from "../gornji/Gornji.jsx";
import Donji from "../donji/Donji.jsx";
import "./Main.css";

export default function Main() {
  return (
    <div className="mainstyle">
      <Gornji />
      <Donji />
    </div>
  );
}
