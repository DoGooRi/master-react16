import React, { Component, Fragment } from 'react';


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
      </Fragment>
    );
  }
}

export default App;
