import React,{useState, useEffect} from "react";
import {AuthContext} from "./utils/contexts"
import Routing from "./routes/Routing";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { isUserLogedApi } from "./api/auth";


function App() {

  const[adm, setAdm]= useState(null);
  const[user, setUser]= useState(null);                                 // seteamos el user
  const[loadUser, setLoadUser]= useState(false);                        
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);   // lo usamos para cuando loguiemos se active el effect y setee user/token

  useEffect(() => {
    setUser(isUserLogedApi());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [refreshCheckLogin])

  if(!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
        
        {adm? <h1>ADM ON</h1> :<Routing setRefreshCheckLogin={setRefreshCheckLogin}/>}

        <ToastContainer               // le damos la posición y diferentes configuracion a los mensajes de éxito/error que verá el cliente
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      >
        
      </ToastContainer>
    </AuthContext.Provider>
  );
}

export default App;
