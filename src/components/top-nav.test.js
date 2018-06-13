import React from 'react';
import {shallow , mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />' ,()=>{
	it('should render without crashing',() =>{
		shallow(<TopNav />);
	});

	it('Should call onNewGame when new game is clicked', () => {
    const callback = jest.fn();
    const wrapper = shallow(<TopNav onRestartGame={callback} />);
    const link = wrapper.find('.new');
    link.simulate('click', {
      preventDefault() {}
    });
    expect(callback).toHaveBeenCalled();
  });


	})

