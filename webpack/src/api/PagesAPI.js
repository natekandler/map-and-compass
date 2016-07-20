export function getPages(){
  return fetch('http://localhost:3000/pages.json');
}
export function getPage(pageId){
  return fetch(`http:/\/localhost:3000/pages/${pageId}.json`);
}
