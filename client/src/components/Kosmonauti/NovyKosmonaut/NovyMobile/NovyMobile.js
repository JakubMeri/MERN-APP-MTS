import React from "react";
import "./NovyMobile.css";

function NovyMobile({ panel, setPanel }) {
  return (
    <button
      onClick={() => setPanel(!panel)}
      className={`btn-new-kosmonaut ${panel ? "hide" : "show"}`}
    >
      +
    </button>
  );
}

export default NovyMobile;
