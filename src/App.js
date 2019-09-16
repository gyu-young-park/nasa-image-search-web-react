import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer.js";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer.js";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filter : "Image"
    }
    this.changeFilter = this.changeFilter.bind(this)
  }
  changeFilter(value){
    this.setState({
      filter : value
    })
  }
  render(){
    return (
      <div>
        <div>
          <HeaderContainer changeFilter = {this.changeFilter}/>
        </div>
        <div>
          <SearchContainer filter = {this.state.filter}/>
        </div>
      </div>
    );
  }
}
