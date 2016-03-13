import { webAPI, post } from './BaseAPI'; 

export function submitContact(data){
  console.warn(data);
    return fetch('/pages.json', data).then(response => response.json());
  }

