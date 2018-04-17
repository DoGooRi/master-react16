import React, { Component, Fragment } from 'react';
import { createPortal } from "react-dom";

class Portals extends Component {
  render() {
    return createPortal(<Message />, document.getElementById("touchme"));
  }
}

const Message = () => "Just touched it!"


class RetrunTypes_Fragment extends Component {
  render() {
    return (
      <Fragment>
        <header></header>
        <div></div>
        <footer></footer>
      </Fragment>
    )
  }
}

class RetrunTypes_String extends Component {
  render() {
    return "hello";
  }
}

class App extends Component {
  render() {
    return (
      <Fragment>
        <RetrunTypes_Fragment />
        <RetrunTypes_String />
        <Portals />
      </Fragment>
    );
  }
}

export default App;
