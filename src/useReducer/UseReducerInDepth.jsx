import React, { useReducer, useState } from "react";

const ACTIONS = {
  ADD_TODO: "addToDo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
function mySecondReducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.names)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(names) {
  return { id: Date.now(), name: names, complete: false };
}
export default function SecondReducer() {
  const [todos, dispatch] = useReducer(mySecondReducer, []);
  const [names, setNames] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { names: names } });
    setNames("");
  }
  //   console.log(todos);
  return (
    <div>
      <h1>SecondReducer:</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
        ></input>
      </form>
      {todos.map((todos) => {
        return (
          <div>
            <span style={{ color: todos.complete ? "#000" : "#AAA" }}>
              {todos.name}
              {todos.complete ? "true" : "fa;se"}
            </span>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todos.id },
                });
              }}
            >
              Toggle
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todos.id },
                });
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
