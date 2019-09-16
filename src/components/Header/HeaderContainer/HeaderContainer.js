import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo.js';
import HeaderBrandImage from '../HeaderBrandImage/HeaderBrandImage.js';
import HeaderToggle from '../HeaderToggle/HeaderToggle.js';
import './HeaderContainerCss.css';

export default class HeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeArray : [true,false,false],
      textArray : ["Image", "Video", "Audio"]
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderHeaderInfo = this.renderHeaderInfo.bind(this);
  }
  handleClick(number){
    let tmp = []
    for(let i = 0; i < this.state.activeArray.length; i++){
      if(i === number){
        tmp.push(true);
      }else{
        tmp.push(false);
      }
    }
    this.setState({
      activeArray : tmp
    },this.props.changeFilter(this.state.textArray[number]))
  }
  renderHeaderInfo(){
    return this.state.activeArray.map((val, i) => {
      return (<HeaderInfo HeaderID = {i} text={this.state.textArray[i]} href={"#"} active={val} handleClick = {this.handleClick}/>)
    })
  }
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark">
        <HeaderBrandImage alt={"nasa"} imgSrc={require('../image/nasaLogo.png')}/>
        <HeaderToggle/>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {this.renderHeaderInfo()}
          </div>
        </div>
      </nav>
    )
  }
}
