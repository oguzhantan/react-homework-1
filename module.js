import axios from "axios";

const ENDPOINT = 'https://jsonplaceholder.typicode.com';

 const getData = async (userId) => {
    try {
       const { data:user } = await axios.get(`${ENDPOINT}/users/${userId}`);
       const { data:post } = await axios.get(`${ENDPOINT}/posts?userId=${userId}`);
 
       return{ user,post };
    } catch (e) {
       console.error(e);
    }
 } 

 export default getData;