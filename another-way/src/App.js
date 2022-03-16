import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: "Write a UI", status: "completed" },
        { text: "Bake cookies", status: "active" },
        { text: "Take over the world", status: "active" },
      ],
      showStatus: "all",
      currentItem: "",
    };
  }

  handleChange(e) {
    this.setState({ showStatus: e.target.value });
  }

  addNewItem() {
    const { todos, currentItem } = this.state;
    this.setState({
      todos: [{ text: currentItem, status: "active" }, ...todos],
    });
  }

  updateCurrentItem(e) {
    this.setState({ currentItem: e.target.value });
  }

  render() {
    const { todos, showStatus, currentItem } = this.state;
    return (
      <div>
        <select id="selector" onChange={(e) => this.handleChange(e)}>
          <option selected value="all">
            All
          </option>
          <option value="completed">Completed</option>
          <option value="active">Active</option>
        </select>
        <hr />
        <div id="todos">
          {todos
            .filter(({ status }) =>
              showStatus === "all" ? true : status === showStatus
            )
            .map(({ text, status }) => (
              <div className={status}>{text}</div>
            ))}
        </div>
        <hr />
        <input
          id="newTodo"
          type="text"
          onChange={(e) => this.updateCurrentItem(e)}
          value={currentItem}
        />
        <button onClick={() => this.addNewItem()}>Add</button>
      </div>
    );
  }
}

export default App;
