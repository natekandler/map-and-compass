import { getCategories } from '../api/CategoriesAPI';


export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
const ROOT_URL = __DEVELOPMENT__ ? "http://localhost:3000" : "";

export function fetchCategories() {
  const request = getCategories();
  return {
    type: FETCH_CATEGORIES,
    payload: request
  }
}
