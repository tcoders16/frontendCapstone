import axios from "axios";

/* Make one custom Axios instance */
const api = axios.create({
  baseURL: "http://10.0.2.2:4000/api", // your backend
  timeout: 10000,                      // 10-second limit
});

/* Use it later */
api.get("/items");       // actually calls http://10.0.2.2:4000/api/items
api.post("/upload",); // data);
export default api; 