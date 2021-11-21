export const getLang = () => {
  if (typeof window !== 'undefined') {
    if (navigator.languages != undefined) 
      return navigator.languages[0]; 
    return navigator.language;
  }
}