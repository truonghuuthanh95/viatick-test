import axiosClient from "./axiosClients";

const userApi = {
  getAll: (params) => {
    const url = "/user/signIn";
    return axiosClient.post(url, { params });
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};

export default userApi;
