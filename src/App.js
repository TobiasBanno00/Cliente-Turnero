import React,{useState, useEffect} from "react";
import {createContext} from "react"
import Routing from "./routes/Routing";
const AuthContext = createContext();

function App() {

  const[adm, setAdm]= useState(null);

  return (
    <AuthContext.Provider>
        {adm? <h1>ADM ON</h1> :<Routing />}
    </AuthContext.Provider>
  );
}

export default App;
