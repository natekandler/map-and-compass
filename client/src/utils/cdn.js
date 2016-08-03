export function cdn(path){
  if(__DEVELOPMENT__){
    return `/images/${path}`;
  } else {
    return ""
  }
}
