// import axios from "axios"

// export default function Api(){
      
//     var api = axios.create({
//         baseUrl : ""
//     });
//     console.log(api)
// }
import axios from 'axios';

export const api = axios.create({
    baseURL:"http://localhost:3000/auth"
})