import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./KosmonautiList.css";
import { KosmonautContext } from "../../../ContextKosmonaut";
import UpdateUser from "../UpdateUser/UpdateUser";
import Modal from "../Modal/Modal";
import DeleteUser from "../DeleteUser/DeleteUser";
import Tabulka from "./Tabulka/Tabulka";
import Search from "../../Search/Search";

function KosmonautiList({ location }) {
  //CONTEXT
  const [filtered, setFiltered, loading, ,] = useContext(KosmonautContext);
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
          filtered={filtered}
          loadModal={loadModal}
          showDeleteModal={showDeleteModal}
        />
        {loading ? <div className="loader"></div> : null}
        {window.innerWidth > 760 ? null : <Search location={location} />}
      </div>
    </>
  );
}

export default withRouter(KosmonautiList);
