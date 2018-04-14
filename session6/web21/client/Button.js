const React = require('react');

const Button = (props) => {
  return <button onClick={props.onClick} id='fetch' >Fetch Mail</button>;
};

module.exports = Button;
