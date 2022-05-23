import { Component } from "react";
import { Outlet, Link } from "react-router-dom";
import { Add, Delete, Create } from "@mui/icons-material";
import { deleteItem, editItem } from "./todoListService";
import DiagramItemEdit from "./diagramItemEdit";
import "../styles/todoList.scss";

import "../styles/todoList.scss";

class CompletedTodoList extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isOpenEditItemDiagram: false,
  };

  render() {
    let { itemEdit } = this.state;
    return (
      <div>
        <ul className="todo-list">
          {this.props.itemList.map((item) =>
            item.active ? (
              <li key={item.id} className="todo-item">
                <input
                  type="checkbox"
                  className="todo-check"
                  ref={this.checkToDoInput}
                  onChange={() => {
                    editItem({ ...item, active: !item.active }).then(() => {
                      this.props.updatePageData();
                    });
                  }}
                  id={item.todo}
                  defaultChecked={item.active}
                />
                <label htmlFor={item.todo} className="todo-item-text">
                  {item.todo}
                </label>
                <Delete
                  className="icon"
                  color="error"
                  onClick={() => {
                    deleteItem(item.id).then(() => {
                      this.props.updatePageData();
                    });
                  }}
                />
                <Create
                  className="icon"
                  color="primary"
                  onClick={() => {
                    this.setState({
                      isOpenEditItemDiagram: !this.state.isOpenEditItemDiagram,
                      itemEdit: item,
                    });
                  }}
                />
              </li>
            ) : (
              ""
            )
          )}
        </ul>
        {this.state.isOpenEditItemDiagram ? (
          <DiagramItemEdit
            item={itemEdit}
            handlEdit={() => {
              this.setState({
                isOpenEditItemDiagram: !this.state.isOpenEditItemDiagram,
              });
              this.props.updatePageData();
            }}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CompletedTodoList;
