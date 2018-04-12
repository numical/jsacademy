/* global React ReactDOM fetch */
/* eslint no-console:0 */

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
    return React.createElement('div', null,
      createHeading(),
      createInbox(this.state.mail),
      createButton(this.fetchMail)
    );
  }
}

const createApp = () => {
  return React.createElement(App);
};

const createHeading = () => {
  return React.createElement('h1', null, 'MikeMail');
};

const createInbox = (mail) => {
  const lines = mail.map(text => React.createElement('div', null, text));
  return React.createElement('div', null, lines);
};

const createButton = (onClick) => {
  return React.createElement('button', { onClick }, 'Fetch Mail');
};

const container = document.getElementById('app');

ReactDOM.render(createApp(), container);
