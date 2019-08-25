import React from 'react';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchInfo from '../SearchInfo/SearchInfo.js'
import './SearchContainerCss.css'


export default class SearchContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word : ''
    }
    this.handleChangeSearchWord = this.handleChangeSearchWord.bind(this);
  }
  handleChangeSearchWord(value){
    this.setState({
      word : value
    })
  }
  render() {
     return (
       <div>
         <div class="search-container d-flex justify-content-center">
           <SearchBar name="searchBar" handleChangeSearchWord ={this.handleChangeSearchWord}/>
         </div>
           <div className="d-flex flex-wrap justify-content-around">
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
               <SearchInfo/>
          </div>
       </div>
     );
  };
};
