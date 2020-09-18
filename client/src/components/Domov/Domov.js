import React from "react";
import "./Domov.css";
import LANDING_VIDEO from "../../video/LANDING_VIDEO2.mp4";
import { Link } from "react-router-dom";

function Domov() {
  return (
    <div className="container">
      <video loop autoPlay muted className="full-screen-video">
        <source src={LANDING_VIDEO} type="video/mp4" />
      </video>
      <div className="overlay">
        <aside>
          <h1>
            Vitaj v systeme na správu kozmonautov
            <br /> Chcel by si sa pozrieť na to akých machrov tu máme
          </h1>
          <Link className="link-button" to="/Kosmonauti">
            POKRAČOVAT
          </Link>
        </aside>
      </div>
    </div>
  );
}

export default Domov;
