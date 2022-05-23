import React, { Component } from "react";
//import { TextField } from "@mui/material";
import { Add, Delete, Create } from "@mui/icons-material";
import { Link, BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { getAllItem, saveItem, deleteItem, editItem } from "./todoListService";
import DiagramItemEdit from "./diagramItemEdit";
import "../styles/todoList.scss";
import { Button } from "@mui/material";
import AllTodoList from "./allTodoList";
import ActiveTodoList from "./activeTodoList";
import CompletedTodoList from "./completedTodoList";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.checkToDoInput = React.createRef();
  }

  state = {
    itemList: [],
    item: {},
  };

  updatePageData = () => {
    getAllItem().then(({ data }) => {
      this.setState({
        itemList: data,
      });
    });
  };

  componentDidMount() {
    this.updatePageData();
  }

  handleChange = (e) => {
    this.setState({
      item: {
        todo: this.textInput.current.value,
        active: false,
        id: "",
      },
    });
    this.checkToDoInput.current.checked = true;
  };

  handleAdd = () => {
    saveItem({ ...this.state.item }).then(() => {
      this.textInput.current.value = "";
      this.textInput.current.focus();
      this.updatePageData();
    });
  };

  handleLogOut = () => {
    const accountData = JSON.parse(localStorage.getItem("accountLogin"));
    this.props.loginReducer();
    localStorage.setItem(
      "accountLogin",
      JSON.stringify({ ...accountData, isLogin: !this.props.isLogin })
    );
  };

  render() {
    return (
      <div className="body-container">
        <h1
          style={{
            color: "#fff",
            margin: "0",
            padding: "20px 0",
            textAlign: "center",
          }}
        >
          TODO LIST
        </h1>
        <div className="input-wrap">
          <div className="input-text">
            <input
              onChange={this.handleChange}
              ref={this.textInput}
              placeholder="New Item..."
            />
          </div>
          <div onClick={this.handleAdd} className="input-btn">
            Add
            <Add className="icon" />
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {" "}
                  <div className="todo-list-container">
                    <div className="todo-list-nav">
                      <div className="todo-list-nav-item">
                        <Link to="/">All</Link>
                      </div>
                      <div className="todo-list-nav-item">
                        <Link to="/active">Active</Link>
                      </div>
                      <div className="todo-list-nav-item">
                        <Link to="/completed">Complete</Link>
                      </div>
                    </div>
                    <Outlet />{" "}
                  </div>
                </div>
              }
            >
              <Route
                index
                element={
                  <AllTodoList
                    itemList={this.state.itemList}
                    updatePageData={() => this.updatePageData()}
                  />
                }
              />
              <Route
                path="/active"
                element={
                  <ActiveTodoList
                    itemList={this.state.itemList}
                    updatePageData={() => this.updatePageData()}
                  />
                }
              />
              <Route
                path="/completed"
                element={
                  <CompletedTodoList
                    itemList={this.state.itemList}
                    updatePageData={() => this.updatePageData()}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
        <Button color="info" variant="contained" onClick={this.handleLogOut}>
          Log Out
        </Button>
      </div>
    );
  }
}

export default TodoList;
