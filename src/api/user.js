import { API_HOST } from "../utils/constant";
import { getTokenApi } from "./auth";

export function updateInfoApi(data) {             // editamos datos de usuarios en el servidor
    const url = `${API_HOST}/api/editarPerfil`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getTokenApi()}`
      },
      body: JSON.stringify(data)
      
    };
  
    return fetch(url, params)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
          
        }
        return { message: "Error al actualizar datos" };
      })
      .then(result => {
        
        return result
        
      })
      .catch(err => {
        return err;
      });
    
  }