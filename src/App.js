import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      {/** Common Navigation Bar */}
      {/** d-flex justify-content-between  */}
      <div className="bg-dark text-light p-4 mb-2 d-flex justify-content-between">
        <Link to="/home">
          <h3 className="text-light">Home</h3>
        </Link>
        <Link to="/explore">
          <h3 className="text-light">Explore</h3>
        </Link>
        <Link to="/notification">
          <h3 className="text-light">Notification</h3>
        </Link>
        <Link to="/message">
          <h3 className="text-light">Messages</h3>
        </Link>
      </div>

      <Route exact path="/" component={MyAppHomePage} />
      <Route exact path="/home" component={MyAppHomePage} />
      <Route exact path="/explore" component={MyAppExplorePage} />
      <Route exact path="/notification" component={MyAppNotificationPage} />
      <Route exact path="/message" component={MyAppMessagesPage} />
    </Router>
  );
}

function MyAppHomePage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Home</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-secondary text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

function MyAppExplorePage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Explore</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-info text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

function MyAppNotificationPage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Notification</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-success text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

function MyAppMessagesPage() {
  const [list] = useState([1, 1, 1, 1, 1]);

  return (
    <div>
      <h2 className="bg-dark text-light p-3 sticky-top">Messages</h2>

      {list.map((item, index) => (
        <div key={index} className="bg-warning text-light p-4 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          necessitatibus temporibus quis fugit ad numquam cupiditate
          perspiciatis natus magnam nemo ipsam ipsum facere eius, ipsa adipisci
          aperiam reprehenderit vero impedit.
        </div>
      ))}
    </div>
  );
}

export default App;
