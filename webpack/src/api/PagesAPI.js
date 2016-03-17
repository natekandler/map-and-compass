import { webAPI } from './BaseAPI'; 
const baseURL = __DEVELOPMENT__ ? "http://127.0.0.1:3000" : "";


export function getPages(){
  return fetch('http://localhost:3000/pages.json').then(function (response){
    response.json().then(function(data){
      console.warn(data)
      return data
    });
  });
}

