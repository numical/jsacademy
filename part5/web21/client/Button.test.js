/* global describe it */
const React = require('react');

const Adapter = require('enzyme-adapter-react-16');
const assert = require('assert');
const Button = require('./Button.js');
const { configure, shallow } = require('enzyme');
const { spy } = require('sinon');

configure({ adapter: new Adapter() });

const props = {
  onClick: spy()
};

describe('Button', () => {
  it('renders a button', () => {
    const wrapper = shallow(<Button {...props} />);
    assert(wrapper.exists('button'));
  });

  it('is labelled Fetch Mail', () => {
    const wrapper = shallow(<Button {...props} />);
    assert.equal(wrapper.find('button').text(), 'Fetch Mail');
  });

  it('clicking fires passed function', () => {
    const wrapper = shallow(<Button {...props} />);
    wrapper.find('button').simulate('click');
    assert(props.onClick.calledOnce);
  });
});
