import React, { Component } from "react";
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js';
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import store from './store/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Provider store={store}>
          <div>
            <Header></Header>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<div>home</div>} />
                <Route path='/detail' element={<div>detail</div>} />
                <Route path='/login' element={<div>login</div>} />
                <Route path='/write' element={<div>write</div>} />
              </Routes>
            </BrowserRouter>

          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
