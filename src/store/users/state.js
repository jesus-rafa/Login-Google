const state = {
  isLoggedIn: !!localStorage.getItem("token_user"),
  userData: null,
};

export default state;
