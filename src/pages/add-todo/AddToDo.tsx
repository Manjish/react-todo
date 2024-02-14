import { useRef } from "react";
import NavBar from "../../components/NavBar";
import {  useNavigate } from "react-router-dom";
import AuthCheck from "../../middleware/AuthCheck";

const AddToDo = () => {
  const todoText = useRef();
  const navigate = useNavigate();
  AuthCheck();
  const addToDo = (e) => {
    e.preventDefault();

    const initalTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    const todoString = todoText.current.value;
    initalTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initalTodo));
    navigate("/");
  };
  return (
    <>
      <NavBar />

      <div className="todo-container">
        <h3>Add to-do:</h3>
        <br />
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>Save</button>
        </form>
      </div>
    </>
  );
};

export default AddToDo;
