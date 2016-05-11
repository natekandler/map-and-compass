import { getPages } from '../api/PagesAPI'

//renderPages() {
//  return getPages().then((response) => {
//    response.json().then((data) => {
//      let pages = data.pages.map(page => 
//       <div><div>{page.excerpt}</div><div dangerouslySetInnerHTML={{__html: page.content}}/></div>
//      )
//    });
//  })
//}

export default function(){
  return (
    ["page 1", "page 2"]
  )
}
