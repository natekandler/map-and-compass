//export function getCategories(){
//  return fetch('http://localhost:3000/categories.json').then(response => response.json());
//}
export function getCategories(){
  return fetch('http://localhost:3000/categories.json').then(response => {
    console.log(response.json);
    response.json()
  });
}
export function getCategory(categorySlug){
  return fetch(`http:/\/localhost:3000/categories/${categorySlug}.json`);
}
