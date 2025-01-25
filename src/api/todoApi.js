import axios from "axios";
export const API_SERVIER_HOST = "http://localhost:8080";
const prefix = `${API_SERVIER_HOST}/api/todo`;

export const getOne = async (tno) => {
  const res = await axios.get(`${prefix}/${tno}`);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await axios.get(`${prefix}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};

// 162p
export const postAdd = async (todoObj) => {
  const res = await axios.post(`${prefix}/`, todoObj);
  return res.data;
};
