const React = require('react');

const Button = (props) => {
  return React.createElement('button', { onClick: props.onClick, id: 'fetch' }, 'Fetch Mail');
};

module.exports = Button;
