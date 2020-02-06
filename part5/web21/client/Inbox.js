const React = require('react');

const Inbox = (props) => {
  const lines = props.mail.map((text, index) => <div key={index}>{text}</div>);
  return <div>{lines}</div>;
};

module.exports = Inbox;
