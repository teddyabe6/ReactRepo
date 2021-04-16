import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import JSON from './css/db.json';
//COMPONENTS
import Header from './components/header';
import NewsList from './components/news_lis'
class App extends Component {
  state = {
     news:JSON
  }
render () {
  return(
  <div>
    <Header/>
    <NewsList news={this.state.news} dog={'me'}>
      <h1>The News Are</h1>
    </NewsList>
  </div>
   ) 
 }  
}
ReactDOM.render(<App/>,document.querySelector('#root')) 