import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (event) => {
    if (this.props.selectedGif) {
      this.props.selectedGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
