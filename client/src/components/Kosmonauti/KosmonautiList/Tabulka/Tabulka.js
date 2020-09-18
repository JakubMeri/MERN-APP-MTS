import React from "react";
import "./Tabulka.css";

export default function Tabulka({ filtered, loadModal, showDeleteModal }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Jméno</th>
          <th>Příjmení</th>
          <th>Datum narození</th>
          <th>Superschopnost</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {filtered
          ? filtered.map((item) => {
              return (
                <tr
                  className="kosmonaut-row"
                  key={item._id}
                  id={item._id}
                  onClick={(e) => loadModal(e)}
                >
                  <td>{item.meno}</td>
                  <td>{item.priezvisko}</td>
                  <td>{item.datum}</td>
                  <td>{item.schopnost}</td>
                  <td>
                    <button
                      onClick={(e) => showDeleteModal(e)}
                      className="delete-btn"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}
