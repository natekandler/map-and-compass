export function getCategories(){
  return fetch('http://localhost:3000/pages.json');
}
export function getCategory(categoryId){
  return fetch(`http:/\/localhost:3000/categories/${categoryId}.json`);
}
