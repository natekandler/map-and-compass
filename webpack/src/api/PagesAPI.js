export function getPages(){
  return fetch('http://localhost:3000/pages.json').then(function (response){
    response.json().then(function(data){
      console.warn(data)
      return data
    });
  });
}

