import http from "../http-common";

const getAll = () => {
  return http.get("/article");
};

const findByTitle = (title) => {
  // TODO Wire up finding of article
  return http.get(`/articles?title=${title}`);
};

export default {
  getAll,
  findByTitle,
};
