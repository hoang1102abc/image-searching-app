import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    this.img = React.createRef();
  }

  componentDidMount() {
    this.img.current.addEventListener("load", this.calSpan);
  }

  calSpan = () => {
    const spans = Math.ceil(this.img.current.clientHeight / 20);
    this.setState({ spans });
  };
  render() {
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.img} src={this.props.image.urls.thumb} alt="just dsad" />
      </div>
    );
  }
}

export default ImageCard;
