import Axios from "axios";

export default Axios.create({
  baseURL : "https://api.unsplash.com",
  headers:{
    Authorization : "CLIENT_ID"}
});
