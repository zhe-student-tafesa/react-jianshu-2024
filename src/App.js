import React, { Component } from "react";
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js';
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import store from './store/index.js'
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/index.js";
import Detail from "./pages/detail/index.js";
import Login from "./pages/login/index.js";
import PostArticle from "./pages/write/index.js";
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Provider store={store}>
          <div>

            <BrowserRouter>
              <Header></Header>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail' element={<Detail />} />
                <Route path='/login' element={<Login />} />
                <Route path='/write' element={<PostArticle />} />
              </Routes>
            </BrowserRouter>

          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
