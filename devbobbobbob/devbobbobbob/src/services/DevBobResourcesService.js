import http from "../http-common";

const getAll = () => {
  return http.get("/resources");
};

const get = (id) => {
  return http.get(`/resources/${id}`);
};

const create = (data) => {
  return http.post("/resources", data);
};

const update = (id, data) => {
  return http.put(`/resources/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/resources/${id}`);
};

const removeAll = () => {
  return http.delete(`/resources`);
};

const findByTitle = (title) => {
  return http.get(`/resources?title=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};
