const baseURL = __DEVELOPMENT__ ? "http://localhost:3000" : "";

export function webAPI(url){
  return fetch(baseURL + url);
};

export function post(url, data){
  console.warn(JSON.stringify(data));
  return fetch(baseURL + url, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
