export const setToken = (token) => {
  sessionStorage.setItem('TOKEN', token);
}
export const getToken = () => {
  return sessionStorage.getItem('TOKEN');
}
