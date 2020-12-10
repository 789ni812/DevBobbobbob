import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/drupal/jsonapi/node",
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json",
  },
});
