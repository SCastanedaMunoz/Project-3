import axios from "axios";

const documentAPI = {
  createOrUpdate: (documentData) => {
    return axios.post("/api/documents", documentData);
  },
  deleteDocument: (id) => {
    return axios.delete(`/api/documents/${id}`);
  },
  getUserDocuments: (userEmail) => {
    return axios.get(`/api/documents/${userEmail}`);
  },
};

export default documentAPI;
