const getFromLocal = (key: string) => {
  return localStorage.getItem(key)
}

export default getFromLocal;

