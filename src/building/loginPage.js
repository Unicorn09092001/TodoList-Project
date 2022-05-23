import { connect } from "react-redux";

import LoginPage from "../component/loginPage";
import { loginReducer } from "../redux/login";

const mapState = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

const mapDispatch = {
  loginReducer,
};

export default connect(mapState, mapDispatch)(LoginPage);
