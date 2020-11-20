import React from 'react';

class Gif extends React.Component {

  render() {
    return (
      <li className="gif-wrap">
        <img id={Math.round(Math.random() * (500 - 10) + 10)} onClick={this.handleClick} src={this.props.url} alt="" />
      </li>
    );
  }

  handleClick(e) {
    let id = document.getElementById(e.target.id)
    let link = id.src;
    var dummy = document.createElement('input');  
    document.body.appendChild(dummy);
    dummy.value = link;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);

  }

}

export default Gif;

