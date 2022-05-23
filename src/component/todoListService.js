import axios from "axios";
const API_PATH = "https://6220cd52afd560ea699df17d.mockapi.io/todoList/";

export const getAllItem = () => {
  return axios.get(API_PATH);
};

export const saveItem = (item) => {
  return axios.post(API_PATH, item);
};

export const deleteItem = (id) => {
  let url = API_PATH + id;
  return axios.delete(url);
};

export const editItem = (item) => {
  let url = API_PATH + item.id;

  return axios.put(url, item);
};
