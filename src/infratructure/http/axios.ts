import axios from "axios";

const defaultURL = process.env.REACT_APP_API_URL;


export default axios.create({
  baseURL: defaultURL,
});
