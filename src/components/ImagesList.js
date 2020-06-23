import React from "react";
import "./ImagesList.css";
import ImageCard from "./ImageCard";

class ImagesList extends React.Component {
  renderList = () => {
    if (!this.props.list.length) {
      return (
        <h3 style={{ gridColumnEnd: "span 3" }}>
          Welcome to Tiny Image Searching Application
        </h3>
      );
    } else {
      return this.props.list.map(item => {
        return <ImageCard key={item.id} image={item} />;
      });
    }
  };

  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}

export default ImagesList;
