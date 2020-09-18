import React, { useContext } from "react";
import { KosmonautContext } from "../../../ContextKosmonaut";
import "./DeleteUser.css";
import axios from "axios";

function DeleteUser({ deleteId, setDeleteModal, deleteModal }) {
  const [filtered, setFiltered, , , setKosmonaut, kosmonaut] = useContext(
    KosmonautContext
  );

  const [selectedKosmonaut] = filtered.filter((item) => item._id === deleteId);
  const deleteKosmonaut = () => {
    let dataLoad = filtered.filter((item) => item._id !== deleteId);
    let dataLoadReal = kosmonaut.filter((item) => item._id !== deleteId);
    console.log(dataLoad);
    axios
      .delete(`/api/kosmonauti/${deleteId}`)
      .then((res) => {
        setFiltered(dataLoad);
        setKosmonaut(dataLoadReal);
        setDeleteModal(!deleteModal);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="delete-box">
      <h2>
        Chceš skutečne smazat osobu
        <br />
        <span>{` ${selectedKosmonaut?.meno} ${selectedKosmonaut?.priezvisko}`}</span>
      </h2>
      <div className="btn-group">
        <button onClick={deleteKosmonaut}>Ano</button>
        <button onClick={() => setDeleteModal(!deleteModal)}>Ne</button>
      </div>
    </div>
  );
}

export default DeleteUser;
