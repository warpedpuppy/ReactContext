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

 it('remders menu', () => {
    const wrapper = shallow(<Menu />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('opens any clicked section', () => {
    const wrapper = shallow(<Menu />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
})

