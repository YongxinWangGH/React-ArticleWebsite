import React, { Component } from 'react';
import Header from './common/header'
import {GlobalStyle} from './style.js'
import {GlobalIconFont} from './statics/iconfont/iconfont'


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <GlobalIconFont />
        <Header />
      </div>
    );
  }
}

export default App;
