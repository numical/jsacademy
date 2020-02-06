const React = require('react');

const Inbox = (props) => {
  const lines = props.mail.map((text, index) => React.createElement('div', { key: index }, text));
  return React.createElement('div', null, lines);
};

module.exports = Inbox;
