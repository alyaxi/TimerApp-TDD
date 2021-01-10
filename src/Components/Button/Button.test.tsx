import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';


describe('render Timer component', () => {

    it('should render a div in TimerButton', () => {
      const container = shallow(<Button setTimerInSecond={jest.fn()}/>);
      expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    });
    it('should render', () => {
        const container = shallow(<Button setTimerInSecond={jest.fn()}/>);
        expect(container.find("button").length).toBe(3)
      });
  
  })
  