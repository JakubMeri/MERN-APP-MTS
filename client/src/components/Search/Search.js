import React, { useContext, useState } from "react";
import "./Search.css";
import { KosmonautContext } from "../../ContextKosmonaut";

function Search({ location }) {
  //CONTEXT
  const [, , , select] = useContext(KosmonautContext);

  //STATE
  const [search, setSearch] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [toggle, setToggle] = useState(false);

  const searchResult = (e) => {
    e.preventDefault();
    select(filterBy, search);
    setToggle(!toggle);
  };

  const resetFilter = () => {
    setFilterBy("");
    setSearch("");
    select("", "");
  };
  return (
    <div
      className="search"
      style={{ visibility: location.pathname === "/" ? "hidden" : "visible" }}
    >
      <div style={{ transform: toggle ? "scaleX(1)" : "scaleX(0)" }}>
        <form onSubmit={searchResult}>
          <select
            name="filter"
            id="filter"
            onChange={(e) => setFilterBy(e.target.value)}
            value={filterBy}
          >
            <option value="">filter</option>
            <option value="meno">Jméno</option>
            <option value="priezvisko">Příjmení</option>
            <option value="datum">Datum narození</option>
            <option value="schopnost">Superschopnost</option>
          </select>
          <input
            type="text"
            placeholder="Hledat"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
        <button
          className="reset"
          onClick={(e) => {
            e.preventDefault();
            resetFilter();
          }}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>

      <button className="toggle" onClick={() => setToggle(!toggle)}>
        <i className={!toggle ? "fas fa-search" : "fas fa-arrow-right"}></i>
      </button>
    </div>
  );
}

export default Search;
