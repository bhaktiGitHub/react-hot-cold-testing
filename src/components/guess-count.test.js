import React from 'react';
import {shallow , mount} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />' ,()=>{
	it('should render without crashing',() =>{
		shallow(<GuessCount />);
	});
	it('Renders the correct guess count', () => {
    const value = 8;
    const wrapper = shallow(<GuessCount guessCount={value} />);
    expect(wrapper.text()).toEqual(`You've made ${value} guesses!`);
  });

	})
