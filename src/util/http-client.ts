import axios, { AxiosRequestConfig } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.deezer.com/',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const axiosRequest = async (options: AxiosRequestConfig) => {
  return axiosClient(options);
};

export interface HttpClient {
  POST: (opt: AxiosRequestConfig) => Promise<any>;
  GET: (opt: AxiosRequestConfig) => Promise<any>;
  DEL: (opt: AxiosRequestConfig) => Promise<any>;
  PUT: (opt: AxiosRequestConfig) => Promise<any>;
}

export const httpClient: HttpClient = {
  POST: async (opt: AxiosRequestConfig) => {
    return axiosRequest({ ...opt, method: 'POST' });
  },
  GET: async (opt: AxiosRequestConfig) => {
    return axiosRequest({ ...opt, method: 'GET' });
  },
  DEL: async (opt: AxiosRequestConfig) => {
    return axiosRequest({ ...opt, method: 'DELETE' });
  },
  PUT: async (opt: AxiosRequestConfig) => {
    return axiosRequest({ ...opt, method: 'PUT' });
  },
};
