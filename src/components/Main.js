require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
        <h1 style = {{color:'#333'}}>{'哈哈哈'}</h1>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
