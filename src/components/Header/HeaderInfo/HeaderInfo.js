import React from 'react';

export default class HeaderInfo extends React.Component {
  constructor(props){
    super(props);
    this.changeActive = this.changeActive.bind(this)
  }
  changeActive(){
    this.props.handleClick(this.props.HeaderID);
  }
  render() {
    let isActive = this.props.active ? " active" : " ";
    let defaultclass = "nav-item nav-link" + isActive;
    return(
      <a className={defaultclass} href={this.props.href} onClick={this.changeActive}>{this.props.text}</a>
    )
  }
}
