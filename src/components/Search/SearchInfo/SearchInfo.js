import React from 'react';
import './SearchInfoCss.css';

export default class Searchinfo extends React.Component{
  render(){
    return (
      <div className="card col-xs-12 col-sm-4 col-md-3 col-lg-2 m-1">
        <img className="card-img-top" src={this.props.src} alt={this.props.alt}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.content}</p>
          <a href={this.props.url} className="btn btn-primary">URL</a>
        </div>
      </div>
    );
  };
};
