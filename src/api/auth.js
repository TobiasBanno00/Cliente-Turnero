import { API_HOST,TOKEN} from "../utils/constant";
import jwtDecode from "jwt-decode";

export function apiRegister(user) {
  const url = `${API_HOST}/api/registro`;
  const userTemp = {
    ...user,
    email: user.email.toLowerCase(),    //guarda siempre el email en minusculas
  };
  delete userTemp.repContraseña;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userTemp)
  };

  return fetch(url, params)
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }
      return {message: "Email no disponible" };
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}

export function signInApi(user) {      // Chequeamos usuario y contraseña
    const url = `${API_HOST}/api/acceder`;
  
    const data = {
      ...user,
      email: user.email.toLowerCase()    // pasame siempre todo a minuscula
    };

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, params)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
          
        }
        return { message: "Datos incorrectos" };
      })
      .then(result => {
        
        return result
        
      })
      .catch(err => {
        return err;
      });
  }

export function setTokenApi(token) {        //seteamos en el local storage del usuario el token
    localStorage.setItem(TOKEN, token);    
}

export function getTokenApi() {        //recuperamos token en el local storage
  return localStorage.getItem(TOKEN);
}

export function logoutApi() {       // eliminamos token del local storage
  localStorage.removeItem(TOKEN);
}

function isExpired(token) {        // chequeamos si el token expiro
  const { exp } = jwtDecode(token);
  const expire = exp * 1000;
  const timeout = expire - Date.now();  //Date.now fecha de hoy en milisegundos

  if (timeout < 0) {
    return true;
  }
  return false;
}

export function isUserLogedApi() {
  const token = getTokenApi();

  if (!token) {
    logoutApi();
    return null;
  }
  if (isExpired(token)) {
    logoutApi();
    return null;
  }
  return jwtDecode(token);
}