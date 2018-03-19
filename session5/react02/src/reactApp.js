const React = require('react');
const ReactDOM = require('react-dom');

function App () {
  return React.createElement('div', null, 'Hello World');
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
