import React, { Component } from "react";
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js';
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import store from './store/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/index.js";
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
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
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
