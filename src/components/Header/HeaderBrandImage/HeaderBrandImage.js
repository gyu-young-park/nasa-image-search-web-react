import React from 'react';
import './HeaderBrandImageCss.css';

export default class HeaderBrandImage extends React.Component {
  render() {
    return(
      <a className="navbar-brand" href="#">
        <img className="d-inline-block align-top brand-image" src={this.props.imgSrc} alt={this.props.alt}/>
      </a>
    )
  }
}
