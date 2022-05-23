import "./App.css";
import LoginPage from "./building/loginPage";
import TodoList from "./building/todoPage";

function App(props) {
  return (
    <div className="App">{!props.isLogin ? <LoginPage /> : <TodoList />}</div>
  );
}

export default App;
