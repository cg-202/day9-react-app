import { createStore } from "@reduxjs/toolkit";

// STATE :: AVAILABLE FOR ALL THE COMPONENT
const initState = {
  counter: 100,
  cityList: ["Delhi", "Calcutta", "Mumbai", "Chennai"],
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
  // TODO UPDATE THE STATE
  return state;
}

const store = createStore(MyAppReducer);
export { store };
