import React from "react";
const { useReducer } = React;

const initState = {
  count: 0,
};
// Every reducer has two states
function reducerFunction(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    // do nothing
    default:
      return state;
  }
}

const app = () => {
  /**
   * The state is the "current state" and dispatch allows to send the action
   */
  const [state, dispatch] = (useReducer = (reducerFunction, initState));

  function plusOne(){
    dispatch({type:"INCREMENT"})
  }

  function minusOne(){
    dispatch({type:"Decrement"})
  }

  return ( 
      <div>
        <h1>Alvin</h1>
        <h2>useReducer Example</h2>
        <h3>Count:{state.count}</h3>
        <button onClick={plusOne}>PlusOne</button>
        <button onClick={minusOne}>MinusOne</button>
      </div>    
  );
};

export default app;
