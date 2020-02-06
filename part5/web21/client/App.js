/* global fetch */
/* eslint no-console:0 */

const React = require('react');
const Heading = require('./Heading.js');
const Inbox = require('./Inbox.js');
const Button = require('./Button.js');

class App extends React.Component {
  constructor (props) {
    super(props);
    this.fetchMail = this.fetchMail.bind(this);
    this.render = this.render.bind(this);
    this.state = { mail: [] };
  }

  async fetchMail () {
    const response = await fetch('/inbox');
    const mail = await response.json();
    this.setState({ mail });
  }

  render () {
    return (
      <div>
        <Heading />
        <Inbox mail={this.state.mail} />
        <Button onClick={this.fetchMail} />
      </div>
    );
  }
}

module.exports = App;
