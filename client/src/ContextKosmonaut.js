import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const KosmonautContext = createContext();

export const KosmonautProvider = ({ children }) => {
  const [kosmonaut, setKosmonaut] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/kosmonauti").then((data) => {
      setKosmonaut(data.data);
      setFiltered(data.data);
      setLoading(false);
    });
  }, []);
  const select = (type, value) => {
    switch (type) {
      case (type = "meno"):
        setFiltered(
          kosmonaut.filter(
            (data) => data.meno.toLowerCase() === value.toLowerCase()
          )
        );
        break;
      case (type = "priezvisko"):
        setFiltered(
          kosmonaut.filter(
            (data) => data.priezvisko.toLowerCase() === value.toLowerCase()
          )
        );
        break;
      case (type = "datum"):
        setFiltered(
          kosmonaut.filter(
            (data) => data.datum.toLowerCase() === value.toLowerCase()
          )
        );
        break;
      case (type = "schopnost"):
        setFiltered(
          kosmonaut.filter(
            (data) => data.schopnost.toLowerCase() === value.toLowerCase()
          )
        );
        break;

      default:
        setFiltered((prev) => (prev = kosmonaut));
        break;
    }
  };

  return (
    <KosmonautContext.Provider
      value={[filtered, setFiltered, loading, select, setKosmonaut, kosmonaut]}
    >
      {children}
    </KosmonautContext.Provider>
  );
};
