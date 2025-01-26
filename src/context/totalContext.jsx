import { createContext } from "react";
import { useState } from "react";

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  let [isAdmin, setIsAdmin] = useState(false);
  
  function handleTheClick(){
    setIsAdmin(!isAdmin)
  }


  return (
    
    <TotalContext.Provider value={{ isAdmin, setIsAdmin ,handleTheClick}}>
      {children}
    </TotalContext.Provider>
  );
};
