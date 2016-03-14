import { webAPI } from './BaseAPI'; 
const baseURL = __DEVELOPMENT__ ? "http://127.0.0.1:3000" : "";

var parseJson = function (response) {
  return response.json().then(function(data){
    console.warn(data)
    return data
  });
};

export function getPages(){
  return webAPI('/pages.json').then(parseJson);
}

