import axios from "axios";

const baseURL = "https://randomuser.me/api/?results=200&nat=us";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    getUsers: function() {
        return axios.get(baseURL);
    },
};