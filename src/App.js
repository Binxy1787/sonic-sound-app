import React, { Component } from 'react';

//Components where importing.
import Header from './header'; //import header component.
import SearchBox from './searchbox';  //import searchbox component.
import Content from './content';  //import content component.
//import footer component. Use later.


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <SearchBox/>
        <Content/>
      </div>
    );
  }
}

export default App;
