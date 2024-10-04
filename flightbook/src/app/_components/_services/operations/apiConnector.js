import axios from "axios";
// const axios = require('axios/dist/browser/axios.cjs');

export const axiosInstance = axios.create({});
// export const controller = new AbortController();

export const apiConnector = (method, url, bodyData, headers, params) => {
 
  return axiosInstance({
    // signal: controller.signal,
    method: `${method}`,
    url: `${url}`,
    data: bodyData ? bodyData : null,
    headers: headers ? headers : null,
    params: params ? params : null,
  });
};
