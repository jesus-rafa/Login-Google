import axios from "axios";

const apiUsers = {
  retrieveUser: function() {
    return axios.get(
      "https://www.googleapis.com/auth/userinfo?access_token=" +
        localStorage.getItem("token_user")
    );
  },
};

export default apiUsers;
