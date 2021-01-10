import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';
describe("Timer", () => {

    it("should render a <p />", () => {
        const container = shallow(<Timer />);
        expect(container.find("p").length).toEqual(3);
    });

    it('render span', () => {
        const container = shallow(<Timer />);
        expect(container.find('span').length).toBeGreaterThanOrEqual(1);
      });

      it('should render a h1', () => {
        const container = shallow(<Timer />);
        expect(container.find('h1').length).toEqual(1);
      });

      it('should render a p value', () => {
        const container = shallow(<Timer />);
        expect(container.find('timer-app-text').length).toEqual(0);
      });

});
