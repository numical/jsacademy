/* global describe it */

const Adapter = require('enzyme-adapter-react-16');
const App = require('./App.js');
const assert = require('assert');
const Button = require('./Button');
const Heading = require('./Heading');
const Inbox = require('./Inbox');
const { configure, shallow } = require('enzyme');

configure({ adapter: new Adapter() });

describe.only('App', () => {
  it('contains a Heading', () => {
    const wrapper = shallow(new App());
    assert(wrapper.contains(Heading));
  });
  it('contains a Inbox', () => {
    const wrapper = shallow(new App());
    assert(wrapper.contains(Inbox));
  });
  it('contains a Button', () => {
    const wrapper = shallow(new App());
    assert(wrapper.contains(Button));
  });
});
