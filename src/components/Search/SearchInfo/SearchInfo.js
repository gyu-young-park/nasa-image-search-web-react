import React from 'react';
import './SearchInfoCss.css';

export default class Searchinfo extends React.Component{
  render(){
    return (
      <div className="card col-xs-12 col-sm-4 col-md-3 col-lg-2 m-1">
        <img className="card-img-top" src={this.props.src} alt={this.props.alt}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    );
  };
};
