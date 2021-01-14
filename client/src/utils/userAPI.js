import axios from "axios";

const userAPI = {
    saveUser: function (userData) {
        return axios.post("/api/users/register", userData)
    },
    loginUser: function (userData) {
        return axios.post("/api/users/login", userData)
    },
    logoutUser: function () {
        return axios.get("/api/users/logout")
    },
    getCurrentUser: function () {
        return axios.get("/api/users/currentUser");
    }
};

export default userAPI;