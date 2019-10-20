import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Menu from './components/Menu.js';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('arbitrary section', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

 

  it('opens any clicked section', () => {
    const wrapper = shallow(<Menu />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  // can I set something up to check whether the above test is just checking if the event happened?
  
})

