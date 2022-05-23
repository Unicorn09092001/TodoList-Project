import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Button } from "@mui/material";

import "../styles/LoginPage.scss";

const accountData = JSON.parse(localStorage.getItem("accountLogin"));

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    account: "",
    password: "",
  };

  handleLogIn = () => {
    if (
      this.state.account === accountData.name &&
      this.state.password === accountData.password
    ) {
      this.props.loginReducer();
      localStorage.setItem(
        "accountLogin",
        JSON.stringify({ ...accountData, isLogin: !this.props.isLogin })
      );
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    ValidatorForm.addValidationRule("isCheckAccount", (value) => {
      if (value !== accountData.name || value !== accountData.password) {
        return false;
      }
      return true;
    });
  }

  render() {
    return (
      <div className="login-container">
        <div className="login-content">
          <div className="login-img">
            <img src="https://dep.anh9.com/imgs/14121Backgroung-mau-tim-tr%C6%B0u-tuong-nhat.jpg" />
          </div>
          <div className="login-form">
            <h1 className="login-form-name">Todo List</h1>
            <div>
              <h2>Login Your Account</h2>
              <ValidatorForm onSubmit={this.handleLogIn}>
                <TextValidator
                  className="inputText"
                  label="Account"
                  onChange={this.handleChange}
                  name="account"
                  type="text"
                  value={this.state.account}
                  validators={["required", "isCheckAccount"]}
                  errorMessages={[
                    "this field is required",
                    "The account that you've entered is incorrect.",
                  ]}
                />
                <div className="space"></div>
                <TextValidator
                  className="inputText"
                  label="Password"
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  value={this.state.password}
                  validators={["required", "isCheckAccount"]}
                  errorMessages={[
                    "this field is required.",
                    "The password that you've entered is incorrect.",
                  ]}
                />
                <p className="login-from-link">forget password?</p>
                <Button
                  className="login-form-btn"
                  color="secondary"
                  size="large"
                  variant="contained"
                  type="submit"
                  onClick={this.handleLogIn}
                >
                  Login
                </Button>
              </ValidatorForm>
            </div>
            <p className="login-link">Create Account</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
