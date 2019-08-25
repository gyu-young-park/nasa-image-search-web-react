import React from 'react';

export default class HeaderInfo extends React.Component {
  render() {
    let isActive = this.props.active ? " active" : " ";
    let defaultclass = "nav-item nav-link" + isActive;
    return(
      <a className={defaultclass} href={this.props.href}>{this.props.text}</a>
    )
  }
}
