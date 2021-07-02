import { createStore } from "@reduxjs/toolkit";

// STATE :: AVAILABLE FOR ALL THE COMPONENT
const initState = {
  counter: 100,
  cityList: ["Delhi", "Calcutta", "Mumbai", "Chennai"],
  todoList: ["Learning React"],
};

/**
 * This is very speical FUNCTION.
 * This function takes TWO PARAMTER =>
 *  STATE
 *  ACTION
 *
 * This is known as REDUCER (Very popularly in thew world of REDUx)
 *
 * This functions helps us to UPDATE THE STATE; which declared as initial state.
 */
function MyAppReducer(state = initState, action) {
  switch (action.type) {
    case "COUNTER_INCREMENT":
      let newcounter = state.counter + 100;
      return { ...state, counter: newcounter };
    case "COUNTER_DECREMENT":
      let newcounter1 = state.counter - 10;
      return { ...state, counter: newcounter1 };
    case "ADD_TODO":
      const newTodoList = ["NEW TODO", ...state.todoList];
      return { ...state, todoList: newTodoList };

    default:
      return state;
  }
}

const store = createStore(MyAppReducer);
export { store };
