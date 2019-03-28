import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Header from './common/header'
import store from './store'
import {GlobalStyle} from './style.js'
import {GlobalIconFont} from './statics/iconfont/iconfont'


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <GlobalIconFont />
        <Provider store={store}>
        	<Header />
        </Provider>
      </div>
    );
  }
}

export default App;
