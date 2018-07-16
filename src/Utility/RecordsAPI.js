import axios from 'axios';
const api = process.env.REACT_APP_RECORDS_API_URL || "http://5b4c66f29d87020014f1b215.mockapi.io"


//ES6  template strings use back-tick (``)
//暴露一个恒定函数
export const getAll = () =>
  axios.get(`${api}/api/v1/records`)

export const create = (body) =>
  axios.post(`${api}/api/v1/records`, body)

export const update = (id, body) =>
  axios.put(`${api}/api/v1/records/${id}`, body)

export const remove = (id) =>
  axios.delete(`${api}/api/v1/records/${id}`)