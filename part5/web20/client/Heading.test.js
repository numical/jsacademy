/* global describe it */

const Adapter = require('enzyme-adapter-react-16');
const assert = require('assert');
const Heading = require('./Heading.js');
const { configure, shallow } = require('enzyme');

configure({ adapter: new Adapter() });

describe('Heading', () => {
  it('renders a heading', () => {
    const wrapper = shallow(Heading());
    assert(wrapper.exists('h1'));
  });

  it('is labelled MailMail', () => {
    const wrapper = shallow(Heading());
    assert.equal(wrapper.find('h1').text(), 'MikeMail');
  });
});
