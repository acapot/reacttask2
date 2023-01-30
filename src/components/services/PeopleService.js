import http from "../../http-common";

const getAll = async () => {
  return await http.get("/people");
};

const get = async (id) => {
  return await http.get(`/people/${id}`);
};

const create = async (data)  => {
  return await http.post("/people", data);
};
/*
const update = (id, data) => {
  return http.put(`/people/${id}`, data);
};*/

const update = async (data) => {
  return await http.put("/people", data);
};

const remove = async (id) => {
  return await http.delete(`/people/${id}`);
};

// const removeAll = () => {
//   return http.delete(`/people`);
// };

// const findByTitle = title => {
//   return http.get(`/person?title=${title}`);
// };

const PeopleService = {
  getAll,
  get,
  create,
  update,
  remove//,
  // removeAll,
  // findByTitle
};

export default PeopleService;