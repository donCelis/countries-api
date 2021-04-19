import { createContext, useState } from "react";

export const ContextContries = createContext({});

export const ProviderContries = ({ children }) => {
  const [countries, setContries] = useState([]);

  const globalState = {
    countries,
    setContries,
  };

  return (
    <ContextContries.Provider value={globalState}>
      {children}
    </ContextContries.Provider>
  );
};
