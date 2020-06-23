import React from "react";
import axios from "axios";

const API_KEY = "hvtJKJeXuG10x_yxPICpKtoTfYYJjBD4wMGKc9vIN-I";
const imagesRequest = axios.create({
  baseURL: "https://api.unsplash.com/"
});

class SearchBar extends React.Component {
  state = { term: "" };

  onSearchClick = () => {
    imagesRequest
      .get("/search/photos", {
        params: { client_id: API_KEY, query: this.state.term }
      })
      .then(res => this.props.list(res.data.results));
  };

  render() {
    return (
      <div style={{ margin: "10px" }} className="ui fluid icon input">
        <input
          type="text"
          placeholder="Enter something to search for images"
          onChange={event => this.setState({ term: event.target.value })}
        />
        <i
          className="inverted circular search link icon"
          onClick={this.onSearchClick}
        />
      </div>
    );
  }
}

export default SearchBar;
