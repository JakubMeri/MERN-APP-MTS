import React, { useState, useContext, useRef } from "react";
import "./NovyKosmonaut.css";
import { KosmonautContext } from "../../../ContextKosmonaut";
import axios from "axios";

function NovyKosmonaut() {
  //STATES
  const [meno, setMeno] = useState("");
  const [priezvisko, setPriezvisko] = useState("");
  const [datum, setDatum] = useState("");
  const [schopnost, setSchopnost] = useState("");
  const [btnPosition, setBtnPosition] = useState(null);
  const [valid, setValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  //REFS
  const btnRef = useRef();
  const menoRef = useRef();
  const priezviskoRef = useRef();
  const datumRef = useRef();
  const schopnostRef = useRef();

  //CONECTING CONTEXT
  const [filtered, setFiltered, , , setKosmonaut] = useContext(
    KosmonautContext
  );

  //DATE FORMAT FUNCTION
  const dateFormater = () => {
    let date = new Date(datum);
    let den = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let mesiac =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let rok = date.getFullYear();

    return `${den}.${mesiac}.${rok}`;
  };

  //ADD COSMONAUT
  const addKosmonaut = (e) => {
    e.preventDefault();
    //VALIDATE
    if (meno === "" || priezvisko === "" || datum === "" || schopnost === "") {
      if (
        meno === "" &&
        priezvisko === "" &&
        datum === "" &&
        schopnost === ""
      ) {
        setErrorMessage("");
        menoRef.current.focus();
      } else if (meno === "") {
        menoRef.current.focus();
        setErrorMessage("Vyplň Jméno!");
      } else if (priezvisko === "") {
        priezviskoRef.current.focus();
        setErrorMessage("Vyplň Příjmení!");
      } else if (datum === "") {
        datumRef.current.focus();
        setErrorMessage("Vyplň DATUM!");
      } else if (schopnost === "") {
        schopnostRef.current.focus();
        setErrorMessage("Vyplň SCHOPNOST!");
      }
      setValid(false);
      setTimeout(() => {
        setValid(true);
      }, 2000);
    }
    //SET NEW COSMONAUT
    else {
      setErrorMessage("PŘIDANÉ!");
      setValid(false);
      setTimeout(() => {
        setValid(true);
      }, 2000);
      let newKosmonaut = {
        meno: meno,
        priezvisko: priezvisko,
        datum: dateFormater(),
        schopnost: schopnost,
        loadDate: datum,
      };
      axios
        .post("/api/kosmonauti", newKosmonaut)
        .then((res) => {
          setFiltered([...filtered, res.data]);
          setKosmonaut((prev) => [...prev, res.data]);
        })
        .catch((err) => console.log(err));
      setMeno("");
      setPriezvisko("");
      setDatum("");
      setSchopnost("");
    }
  };

  return (
    <div className="input-component">
      <form onSubmit={addKosmonaut} className="form">
        <h1>Nový kosmonaut</h1>
        <label htmlFor="meno">Jméno:</label>
        <input
          value={meno}
          onChange={(e) => {
            setMeno(e.target.value);
            setValid(true);
          }}
          type="text"
          name="meno"
          placeholder="Jméno"
          ref={menoRef}
        />
        <label htmlFor="priezvisko">Příjmení:</label>
        <input
          value={priezvisko}
          onChange={(e) => {
            setPriezvisko(e.target.value);
            setValid(true);
          }}
          type="text"
          name="priezvisko"
          placeholder="Příjmení"
          ref={priezviskoRef}
        />
        <label htmlFor="date">Datum narození:</label>
        <input
          value={datum}
          onChange={(e) => {
            setDatum(e.target.value);
            setValid(true);
          }}
          type="date"
          name="date"
          id="date"
          ref={datumRef}
        />
        <label htmlFor="schopnost">Superschopnost:</label>
        <input
          value={schopnost}
          onChange={(e) => {
            setSchopnost(e.target.value);
            setValid(true);
          }}
          type="text"
          name="schopnost"
          placeholder="Superschopnost"
          ref={schopnostRef}
        />

        <button
          ref={btnRef}
          onClick={() => {
            setBtnPosition(btnRef.current.getBoundingClientRect());
          }}
        >
          Přidat
        </button>
      </form>
      {!valid ? (
        <div
          className="error-bubble"
          style={{ top: `calc(${btnPosition.top}px - 150px)` }}
        >
          {errorMessage === "" ? "Vyplň všechny pole!" : `${errorMessage}`}
        </div>
      ) : null}
    </div>
  );
}

export default NovyKosmonaut;
