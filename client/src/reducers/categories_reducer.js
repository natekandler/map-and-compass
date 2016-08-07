import { getCategories } from '../api/CategoriesAPI'

export default function(state, action){
  return getCategories()
  // return [{name: "Inspiration", id: 1, slug: "inspiration"}, {name: "Guides", id: 2, slug: "guides"}]
}
