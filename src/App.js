import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer/HeaderContainer.js";
import SearchContainer from "./components/Search/SearchContainer/SearchContainer.js";

function App() {
  return (
    <div>
      <div>
        <HeaderContainer/>
      </div>
      <div>
        <SearchContainer/>
      </div>
    </div>

  );
}

export default App;
