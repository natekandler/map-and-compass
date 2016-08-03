export function getCategories(){
  return fetch('http://localhost:3000/categories.json');
}
export function getCategory(categorySlug){
  return fetch(`http:/\/localhost:3000/categories/${categorySlug}.json`);
}
