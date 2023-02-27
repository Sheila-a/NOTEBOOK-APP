import React from "react";
import design from "./Search.module.css";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleSearchNote } = this.props;

    return (
      <div className={design.search}>
        <i className="fa fa-search" aria-hidden="true"></i>{" "}
        <input
          onChange={(event) => handleSearchNote(event.target.value)}
          type="text"
          placeholder="Type to search..."
        />
      </div>
    );
  }
}
