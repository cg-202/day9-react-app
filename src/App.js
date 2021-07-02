import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  return (
    <Router>
      <div className="bg-dark text-light p-2 d-flex justify-content-between">
        <Link to="/page1">
          <h3>Page1</h3>
        </Link>
        <Link to="/page2">
          <h3>Page2</h3>
        </Link>
        <Link to="/page3">
          <h3>Page3</h3>
        </Link>
      </div>

      <Route exact path="/" component={Page1} />
      <Route exact path="/page1" component={Page1} />
      <Route exact path="/page2" component={Page2} />
      <Route exact path="/page3" component={Page3} />
    </Router>
  );
}

function Page1() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("page1", state);

  const incrementCounter = () => {
    dispatch({ type: "COUNTER_INCREMENT" });
  };

  const decrementCounter = () => {
    dispatch({ type: "COUNTER_DECREMENT" });
  };

  return (
    <div>
      <h1>Page1 </h1>
      <div className="alert alert-secondary">Counter {state.counter}</div>

      <input
        type="button"
        value="INCREMENT"
        onClick={incrementCounter}
        className="btn btn-secondary w-100 mb-1"
      />

      <input
        type="button"
        value="DECREMETN"
        onClick={decrementCounter}
        className="btn btn-primary w-100 mb-1"
      />

      {state.cityList.map((item, index) => (
        <div key={index} className="alert alert-secondary">
          {item}
        </div>
      ))}

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum deserunt
        odio neque atque incidunt iure. Fuga inventore incidunt dignissimos
        aspernatur distinctio? Eum, debitis. Repellendus repudiandae suscipit
        eaque quos alias laudantium?
      </p>
    </div>
  );
}

function Page2() {
  const state = useSelector((state) => state);
  // console.log("Page2", state);

  return (
    <div>
      <h1>Page2</h1>

      <div className="alert alert-secondary">Counter {state.counter}</div>

      <h3>Todo List</h3>
      {state.todoList.map((item, index) => (
        <div key={index} className="alert alert-primary">
          {item}
        </div>
      ))}

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
        explicabo porro veritatis vitae alias nisi magni minus officia quia,
        incidunt beatae laboriosam natus perspiciatis doloribus cum atque
        obcaecati fugiat vero.
      </p>
    </div>
  );
}

function Page3() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const [inputTodo, setInputTodo] = useState("");
  const updateInputTodo = (e) => {
    setInputTodo(e.target.value);
  };

  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      addNewTodo();
    }
  };

  const addNewTodo = () => {
    dispatch({ type: "ADD_TODO", payload: inputTodo });
    setInputTodo("");
  };

  return (
    <div>
      <h1>Page3</h1>
      <div className="alert alert-secondary">
        Total Todo {state.todoList.length}
      </div>

      <div>
        <div>
          <input
            type="text"
            value={inputTodo}
            onKeyUp={handleEnterKey}
            onChange={updateInputTodo}
            className="form-control form-control-lg mb-1"
            placeholder="Enter Todo"
          />
        </div>

        <div>
          <input
            type="button"
            value="Add Todo"
            onClick={addNewTodo}
            className="btn btn-dark w-100"
          />
        </div>
      </div>

      <h3 className="mt-4">Todo List</h3>
      {state.todoList.map((item, index) => (
        <div key={index} className="alert alert-primary">
          {item}
        </div>
      ))}
    </div>
  );
}

export default App;
