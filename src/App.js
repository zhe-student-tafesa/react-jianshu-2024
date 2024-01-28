import React, { Component } from "react";
import { GlobalStyle } from './style.js';
import { GlobalStyleIcon } from './statics/iconfont/iconfont.js';
import Header from "./common/header/index.js";
import { Provider } from "react-redux";
import store from './store/index.js'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <GlobalStyleIcon />
        <Header></Header>
      </Provider>

    );
  }
}

export default App;
