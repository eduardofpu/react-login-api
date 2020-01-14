export const TOKEN_KEY = "@airbnb-Token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

//Captura o access_token
export const login = token => {
  console.log("access_token: ", token)
  localStorage.setItem(TOKEN_KEY, token); 
};

//Remove o token através do TOKEN_KEY
export const logout = () => {  
  localStorage.removeItem(TOKEN_KEY);
  console.log("access_token removido")
};