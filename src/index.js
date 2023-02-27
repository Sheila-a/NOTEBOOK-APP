import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
