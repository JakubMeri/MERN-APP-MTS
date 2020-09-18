import React from "react";
import "./Kosmonauti.css";
import NovyKosmonaut from "./NovyKosmonaut/NovyKosmonaut";
import KosmonautiList from "./KosmonautiList/KosmonautiList";

function Kosmonauti() {
  return (
    <div className="kosmonauti-container">
      <NovyKosmonaut />
      <KosmonautiList />
    </div>
  );
}

export default Kosmonauti;
