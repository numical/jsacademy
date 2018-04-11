/* global React ReactDOM */

function createElement () {
  return React.createElement('div', null, 'Hello World');
}

const container = document.getElementById('app');

ReactDOM.render(createElement(), container);
