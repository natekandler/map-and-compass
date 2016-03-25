export function getPages(){
  return fetch('http://localhost:3000/pages.json')
}


export function getPages2(){
  return () => {
    fetch(('http://localhost:3000/pages.json'), {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      if (json.session_error) {
        console.warn(json.session_error)
      } else {
        return json
      }
    }).catch((error) => {
      console.warn("error") 
    }) 
  }
}
