 import axios from 'axios';
 import { getToken } from "../auth";
// /* Endereços para cada emulador/simulador:
// ** Genymotion:              http://10.0.3.2:3333/
// ** Emulador Android Studio: http://10.0.2.2:3333/
// ** Simulador IOS:           http://localhost:3333/
// */
const Api = axios.create({
   baseURL: 'http://localhost:3333',
 });

 Api.interceptors.request.use(async config => {
   const token = getToken();
   if (token) {
     config.headers.Authorization = `Bearer ${token}`;
   }
   return config;
 });







/*export const API_URL = 'http://localhost:3333'
// PUXA USUARIOS
export function GET_USERS(){
    return {
        url : API_URL,
        options: {
            method : 'GET'
        }
    }
}
// CRIA URL E OPTIONS DO USUARIO
export function CREATE_USERS(body){
    return {
        url : API_URL + '/Users/store',
        options: {
            method : 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body : JSON.stringify(body)
        },


    }
}*/

 export default Api;
