import axios from "axios";

const planetReqs = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default planetReqs;
