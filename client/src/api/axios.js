import axios from "axios";

const instance = axios.create({
  baseURL: "https://chatapp-mern-pusher.herokuapp.com/",
});

export default instance;
