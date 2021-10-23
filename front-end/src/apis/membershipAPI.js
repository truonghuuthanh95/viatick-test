import axiosClient from "./axiosClients";

const membershipApi = {
  get: () => {
    const url = "/membershipType/get";
    return axiosClient.get(url);
  },
};

export default membershipApi;
