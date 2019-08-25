import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.onChangeSearchWord = this.onChangeSearchWord.bind(this);
  }
  onChangeSearchWord(e){
    this.props.handleChangeSearchWord(e.target.value);
  }
  render(){
    return(
      <div>
        <input onChange = {this.onChangeSearchWord} type="text" name={this.props.name} className="m-1"/>
        <button type="button" className="btn btn-outline-info m-1">검색</button>
      </div>
    )
  }
}
