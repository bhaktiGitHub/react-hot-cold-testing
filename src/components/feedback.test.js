import React from 'react';
import {shallow , mount} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />' ,()=>{
	it('should render without crashing',() =>{
		shallow(<Feedback />);
	});


    it('Renders some feedback', () => {
    let FEEDBACK = 'Hot';
    let wrapper = shallow(<Feedback feedback={FEEDBACK} />);
    expect(wrapper.contains(FEEDBACK)).toEqual(true);
	
	});


	})

