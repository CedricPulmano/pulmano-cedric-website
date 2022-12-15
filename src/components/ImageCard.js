import React, { Component } from "react";
import "./ImageCard.css";

class ImageCard extends Component {
  state = {
    flipped: false,
  };

  flipCard = () => {
    this.setState({ flipped: !this.state.flipped });
  };

  render() {
    return (
      <div
        className={this.props.cardClasses + " sizing-container"}
        onClick={this.flipCard}
        title="Click to flip the card"
      >
        <div className={this.state.flipped ? "main-card flip" : "main-card"}>
          <div className="front">{this.props.imgfig}</div>
          <div className="back">{this.props.backtext}</div>
        </div>
      </div>
    );
  }
}

export default ImageCard;
