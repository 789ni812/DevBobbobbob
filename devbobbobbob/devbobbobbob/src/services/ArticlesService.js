import http from "../http-common";

const getAll = () => {
  return http.get("/article");
};

const findByTitle = (title) => {
  return http.get(`/articles?title=${title}`);
};

export default {
  getAll,
  findByTitle,
};
