import { webAPI } from './BaseAPI'; 
const baseURL = __DEVELOPMENT__ ? "http://127.0.0.1:3000" : "";

var parseJson = function (response) {
  return response.json();
};

export function getPages(){
  return fetch(baseURL + '/pages.json').then(parseJson)
}

