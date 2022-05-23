import React, { Component } from "react";

import "../styles/todoList.scss";
import { editItem } from "./todoListService";

class DiagramItemEdit extends Component {
  constructor(props) {
    super(props);
    this.inputText = React.createRef();
  }

  state = {
    item: {},
  };

  componentDidMount() {
    let { item, handlEdit } = this.props;
    this.inputText.current.focus();
  }

  componentWillMount() {
    let { item, handlEdit } = this.props;
    this.setState({ item: item });
  }

  handlEdit = () => {
    editItem(this.state.item).then(() => {
      this.props.handlEdit();
    });
  };

  handleChange = () => {
    this.setState({
      item: {
        ...this.state.item,
        todo: this.inputText.current.value,
      },
    });
  };

  render() {
    let { item } = this.state;
    return (
      <div className="input-wrap">
        <div className="input-text">
          <input
            ref={this.inputText}
            onChange={this.handleChange}
            value={item.todo}
          />
        </div>
        <div onClick={this.handlEdit} className="input-btn">
          Edit
        </div>
      </div>
    );
  }
}

export default DiagramItemEdit;
