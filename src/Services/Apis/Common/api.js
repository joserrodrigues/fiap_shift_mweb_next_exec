import axios from 'axios';

console.log("AQUI URL");

let url = process.env.APP_URL;
if (process.env.APP_URL === undefined){
    url = process.env.NEXT_PUBLIC_URL;
}
console.log(url);
const ApiConn = axios.create({
    baseURL: url,
});

export default ApiConn;