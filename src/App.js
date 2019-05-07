import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from './common/header'
import Home from './pages/home'
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
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path='/' exact component={Home}></Route>
              </div>
            </BrowserRouter>
          </div>
        	
        </Provider>
      </div>
    );
  }
}

export default App;
