import axios from "axios";
// import Auth from '../utils/Auth'

//methods for interacting with API Auth routes
export default {
  login: userData => 
     axios.post("/auth/login",  userData),
  signUp: userData => 
  	 axios.post('/auth/signup', userData),
  dashboard: token =>
     axios.get('/api/dashboard', {headers: {Authorization: `bearer ${token}`}}),
   createCharacter: data => 
      axios.post('/game/characters', data),
   getCharacters: id =>
      axios.get('/game/characters/' + id),
   
};
