const accountData = JSON.parse(localStorage.getItem("accountLogin"));

const initialState = {
  isLogin: accountData.isLogin,
};

const LOGIN_ACTIVE = "LOGIN_ACTIVE";

export const loginReducer = () => ({
  type: LOGIN_ACTIVE,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ACTIVE":
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    default:
      return state;
  }
};

export default reducer;
