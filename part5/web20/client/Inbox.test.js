/* global describe it */

const Adapter = require('enzyme-adapter-react-16');
const assert = require('assert');
const Inbox = require('./Inbox.js');
const { configure, shallow } = require('enzyme');

configure({ adapter: new Adapter() });

const emptyMail = {
  mail: []
};

const fullMail = {
  mail: ['test mail 1', 'test mail 2']
};

describe('Inbox', () => {
  it('renders a div element', () => {
    const wrapper = shallow(Inbox(emptyMail));
    assert(wrapper.exists('div'));
  });

  it('renders an empty div element when no mail', () => {
    const wrapper = shallow(Inbox(emptyMail));
    assert.equal(wrapper.first().children().length, 0);
  });

  it('renders an child div element for each mail', () => {
    const wrapper = shallow(Inbox(fullMail));
    assert.equal(wrapper.first().children().length, 2);
  });
});
