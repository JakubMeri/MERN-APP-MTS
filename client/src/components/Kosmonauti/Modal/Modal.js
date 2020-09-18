import React from "react";

const style = {
  position: "absolute",
  top: "0",
  left: "0",
  height: "100%",
  width: "100%",
  background: "rgba(0,0,0,.6)",
  zIndex: 3,
};

function Modal({ modal, showModal, deleteModal, setDeleteModal }) {
  const hideModal = () => {
    if (modal) {
      showModal(!modal);
    } else if (deleteModal) {
      setDeleteModal(!deleteModal);
    } else {
    }
  };

  return <div style={style} onClick={hideModal}></div>;
}

export default Modal;
