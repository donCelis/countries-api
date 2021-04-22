import { createContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [countries, setContries] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const globalState = {
    countries,
    setContries,
    filtered,
    setFiltered,
  };

  return (
    <AppContext.Provider value={globalState}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
