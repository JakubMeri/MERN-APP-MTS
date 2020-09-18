import React, { useState, useContext } from "react";
import "./KosmonautiList.css";
import { KosmonautContext } from "../../../ContextKosmonaut";
import UpdateUser from "../UpdateUser/UpdateUser";
import Modal from "../Modal/Modal";
import DeleteUser from "../DeleteUser/DeleteUser";
import Tabulka from "./Tabulka/Tabulka";

function KosmonautiList() {
  //CONTEXT
  const [filtered, setFiltered, loading] = useContext(KosmonautContext);
  //STATES
  const [updated, setUpdated] = useState({});
  const [modal, showModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState("");

  const loadModal = (e) => {
    if (e.target.parentElement.classList.contains("kosmonaut-row")) {
      setUpdated(
        filtered.filter((item) => item._id === e.target.parentElement.id)
      );
      showModal(!modal);
    } else {
    }
  };

  //DELETE KOSMONAUT

  const showDeleteModal = (e) => {
    setDeleteModal(!deleteModal);
    setDeleteId(e.target.parentElement.parentElement.id);
  };

  return (
    <>
      {modal ? (
        <>
          <UpdateUser updated={updated} showModal={showModal} modal={modal} />
          <Modal modal={modal} showModal={showModal} />
        </>
      ) : null}
      {deleteModal ? (
        <>
          <DeleteUser
            filtered={filtered}
            setFiltered={setFiltered}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            deleteId={deleteId}
          />
          <Modal
            modal={modal}
            showModal={showModal}
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
          />
        </>
      ) : null}
      <div className="table">
        <Tabulka
          loadModal={loadModal}
          filtered={filtered}
          showDeleteModal={showDeleteModal}
        />
        {loading ? <div className="loader"></div> : null}
      </div>
    </>
  );
}

export default KosmonautiList;