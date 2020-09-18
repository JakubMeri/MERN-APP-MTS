import axios from "axios";
import React, { useState, useContext } from "react";
import { KosmonautContext } from "../../../ContextKosmonaut";
import "./UpdateUser.css";

function UpdateUser({ updated, showModal, modal }) {
  const [filtered, setFiltered] = useContext(KosmonautContext);

  const [meno, setMeno] = useState(updated[0].meno);
  const [priezvisko, setPriezvisko] = useState(updated[0].priezvisko);
  const [schopnost, setSchopnost] = useState(updated[0].schopnost);
  const [loadDate, setLoadDate] = useState(updated[0].loadDate);

  const dateFormater = () => {
    let date = new Date(loadDate);
    let den = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let mesiac =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let rok = date.getFullYear();

    return `${den}.${mesiac}.${rok}`;
  };

  //UPDATE COSMONAUT
  const updateKosmonaut = (e) => {
    e.preventDefault();
    const newKosmonaut = {
      _id: updated[0]._id,
      meno: meno,
      priezvisko: priezvisko,
      datum: dateFormater(),
      loadDate: loadDate === "" ? updated[0].loadDate : loadDate,
      schopnost: schopnost,
    };
    const id = filtered.findIndex((id) => id._id === updated[0]._id);
    const updatedKosmonauts = [...filtered];
    updatedKosmonauts.splice(id, 1, newKosmonaut);
    setFiltered(updatedKosmonauts);
    axios
      .put(`/api/kosmonauti/${updated[0]._id}`, newKosmonaut)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    showModal(!modal);
    setMeno("");
    setPriezvisko("");
    setSchopnost("");
    setLoadDate("");
  };

  return (
    <div className="update-box">
      <form onSubmit={updateKosmonaut} className="form-update">
        <h1>Upravit kosmonauta</h1>
        <label htmlFor="meno">Jméno:</label>
        <input
          value={meno}
          onChange={(e) => {
            setMeno(e.target.value);
          }}
          type="text"
          name="meno"
          placeholder="Jméno"
        />
        <label htmlFor="priezvisko">Příjmení:</label>
        <input
          value={priezvisko}
          onChange={(e) => {
            setPriezvisko(e.target.value);
          }}
          type="text"
          name="priezvisko"
          placeholder="Příjmení"
        />
        <label htmlFor="date">Datum narození:</label>
        <input
          defaultValue={loadDate}
          onChange={(e) => {
            setLoadDate(e.target.value);
          }}
          type="date"
          name="date"
          id="date"
        />
        <label htmlFor="schopnost">Superschopnost:</label>
        <input
          value={schopnost}
          onChange={(e) => {
            setSchopnost(e.target.value);
          }}
          type="text"
          name="schopnost"
          placeholder="Superschopnost"
        />
        <button>Upravit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
