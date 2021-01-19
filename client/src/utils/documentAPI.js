import axios from "axios";

const documentAPI = {
  createOrUpdate: (documentData) => {
    return axios.post("/api/documents", documentData);
  },
  deleteDocument: (docId) => {
    return axios.delete(`/api/documents/${docId}`);
  },
  getUserDocuments: (userEmail) => {
    return axios.get(`/api/documents/${userEmail}`);
  },
};

export default documentAPI;
