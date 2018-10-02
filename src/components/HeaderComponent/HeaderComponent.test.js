import React from 'react';
import {mount, render, shallow} from 'enzyme'
import '../setupTest'

import HeaderComponent from './HeaderComponent';
import CurrencyApp from '../CurrencyApp/CurrencyApp';

describe('<HeaderComponent /> test', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper).toMatchSnapshot();
    });

    it('HeaderComponent should have state', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper.state('inputValue')).toEqual('');
    });

    it('renders one <CurrencyApp /> components', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper.find(CurrencyApp)).toHaveLength(1);
    });

    it('should have text input', () => {
        const wrapper = shallow(<HeaderComponent />);
        expect(wrapper.find('FormControl')).toHaveLength(1);
    });

});
