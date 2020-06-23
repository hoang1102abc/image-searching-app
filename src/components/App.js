import React from "react";
import SearchBar from "./SearchBar";
import ImagesList from "./ImagesList";

export default class extends React.Component {
  state = { list: [] };
  onListFetch = list => {
    this.setState({ list });
  };

  render() {
    console.log(this.state.list);
    return (
      <div className="ui center aligned container">
        <SearchBar list={this.onListFetch} />
        <ImagesList list={this.state.list} />
      </div>
    );
  }
}
