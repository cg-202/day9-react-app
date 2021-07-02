import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
  return (
    <div>
      <h1>Page1</h1>
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
  return (
    <div>
      <h1>Page2</h1>
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
  return (
    <div>
      <h1>Page3</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus
        doloribus necessitatibus a, facere quis repellat, magnam inventore modi
        temporibus est unde. Facere nostrum, libero sint dolores consequuntur
        error quam.
      </p>
    </div>
  );
}

export default App;
