import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [val, setVal] = useState(0);
  const [val1, setVal1] = useState(1);

  return (
    <Context.Provider
      value={{
        val,
        setVal,
        val1,
        setVal1,
      }}
    >
      {children}
    </Context.Provider>
  );
};
