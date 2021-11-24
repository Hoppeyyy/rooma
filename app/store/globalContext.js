import { createContext, useState } from "react";

export const globalContext = createContext({});

export default function GlobalContext(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentError, setCurrentError] = useState("");
  const [currentMsg, setCurrentMsg] = useState("");
  const [currentExpandNav, setCurrentExpandNav] = useState(false);
  const [loadingSpinner, setLoadingSpinner] = useState(false);


  return (
    <globalContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        currentError,
        setCurrentError,
        currentMsg,
        setCurrentMsg,
        currentExpandNav,
        setCurrentExpandNav,
        loadingSpinner,
        setLoadingSpinner
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
