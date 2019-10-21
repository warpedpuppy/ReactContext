import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Child from './components/Child.js';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('arbitrary section', () => {
	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});

 it('remders menu', () => {
    const wrapper = shallow(<Child />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('changes context', () => {
    const wrapper = shallow(<Child />)
    //wrapper.find('button').at(0).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
})

