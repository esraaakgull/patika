import './App.css';
import axios from "axios";


const baseURL = "https://jsonplaceholder.typicode.com/";

const getData = async (userId) => {
  const userRes = await axios.get(baseURL + "users/" + userId);
  const userData = userRes.data;
  const postsRes = await axios.get(baseURL + "posts?userId=" + userId);
  const posts = postsRes.data;
  return ({"userData": userData, "posts": posts});
}
export default getData;
