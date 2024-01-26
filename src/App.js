import React, { Component } from "react";
import { GlobalStyle } from './style.js';
import Header from "./common/header/index.js";
class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header></Header>
      </div>

    );
  }
}

export default App;
