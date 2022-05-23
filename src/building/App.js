import { connect } from "react-redux";

import App from "../App";
import { loginReducer } from "../redux/login";

const mapState = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

const mapDispatch = {
  loginReducer,
};

export default connect(mapState, mapDispatch)(App);
