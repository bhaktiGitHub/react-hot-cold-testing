import React from 'react';
import {shallow , mount} from 'enzyme';
import GuessSection from './guess-section';

describe('<GuessSection />' ,()=>{
	it('should render without crashing',() =>{
		shallow(<GuessSection />);
	});


	})

