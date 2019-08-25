import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo.js';
import HeaderBrandImage from '../HeaderBrandImage/HeaderBrandImage.js';
import HeaderToggle from '../HeaderToggle/HeaderToggle.js';
import './HeaderContainerCss.css';

export default class HeaderContainer extends React.Component{
  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark">
        <HeaderBrandImage alt={"nasa"} imgSrc={require('../image/nasaLogo.png')}/>
        <HeaderToggle/>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <HeaderInfo text={"Image"} href={"https://getbootstrap.com/docs/4.1/components/navbar/"} active={true}/>
            <HeaderInfo text={"Video"} href={"https://getbootstrap.com/docs/4.1/components/navbar/"} active={false}/>
            <HeaderInfo text={"Audio"} href={"https://getbootstrap.com/docs/4.1/components/navbar/"} active={false}/>
          </div>
        </div>
      </nav>
    )
  }
}
