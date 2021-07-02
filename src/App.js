import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { MyAppHomePage } from "./pages/MyAppHomePage";
import { MyAppExplorePage } from "./pages/MyAppExplorePage";
import { MyAppNotificationPage } from "./pages/MyAppNotificationPage";
import { MyAppMessagesPage } from "./pages/MyAppMessagesPage";

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

export default App;
