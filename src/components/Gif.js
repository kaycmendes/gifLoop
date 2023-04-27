import React from 'react';
import $ from 'jquery'

class Gif extends React.Component {

  render() {
    return (
      <li className="featured-gif">
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
    $("#notification")
    .slideDown(1000)
    .delay(2000)
    .slideUp();
    $("#notification").show()
    

  }

}

export default Gif;

