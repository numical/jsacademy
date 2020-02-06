/* global describe it */

const Adapter = require('enzyme-adapter-react-16');
const App = require('./App.js');
const assert = require('assert');
const Button = require('./Button');
const Heading = require('./Heading');
const Inbox = require('./Inbox');
const React = require('react');
const { configure, shallow } = require('enzyme');

configure({ adapter: new Adapter() });

describe('App', () => {
  it('contains the default Heading', () => {
    const wrapper = shallow(<App />);
    assert(wrapper.contains(<Heading />));
  });
  it('contains an Inbox with no mail', () => {
    const wrapper = shallow(<App />);
    assert(wrapper.contains(<Inbox mail={[]} />));
  });
  it('contains a Button', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find(Button).length, 1);
  });
});
