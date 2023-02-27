import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import LandingPage from "./pages/LandingPage.jsx";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/edit-notes" element={<Main />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
