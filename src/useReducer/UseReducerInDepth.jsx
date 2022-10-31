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
  console.log(todos);
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
              {todos.complete ? "true" : "false"}
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

// so to create a proper useDispatch:

// main components :

// const Actions ={
// DO_SOMETHING:" do-something"
//     usually an object that contains actions that will be called on different use
//     cases of modifying the state stricture
// }

///////////////////////
//then you need to create the main useReducer :

//const [stateDeclare,dispatch] = useReducer(reducer,[] )

// here you declare the state and function you will call to let the reducer modify and change the state//
// then you implement the useReducer hook witch takes to parameters :
//the reducer function or the function that contains the logic of how the state will be changed
// and when (conditions if needed  )

/////////////////////////
//then there is the actual reducer

// function reducer (state , actions){

// switch(action.type){

//  case ACTION.DO_SOMETHING :
//      return ACTION.DO_SOMETHING
//  return functionality of how the state will change

//  default: return state
// }

// }

///////////////////
//final step :

// you call the dispatch() function  where you need or want
//if you call it with no props . it runs the reducer function if you have only one logic
//but if you have different case and use swich . than :
//you pass { then:ACTION.DOSOMETHING ,payload: {proName:dataToPass}}
