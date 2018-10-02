import React from 'react';
import {mount, render, shallow} from 'enzyme';
import '../setupTest';
import { spy } from 'sinon';

import CurrencyApp from './CurrencyApp';

describe('<CurrencyApp /> test', () => {

    it('renders correctly', () => {
        const wrapper = shallow(<CurrencyApp />);
        expect(wrapper).toMatchSnapshot();
    });

    it('<CurrencyApp /> component should have state', () => {
        const wrapper = shallow(<CurrencyApp />);
        expect(wrapper.state).toHaveLength(1);
    });

    it('<CurrencyApp /> should have property entries', () => {
        const wrapper = shallow(<CurrencyApp />);
        expect(wrapper.props().children[0].props).toHaveProperty('entries');
    });

    it('<CurrencyApp /> component pass props', () => {
        const wrapper = shallow(<CurrencyApp />);
        expect(wrapper.props().children[0].props.entries.length).toBeGreaterThan(1)
    });

    it('<CurrencyApp /> component props contain object', () => {
        const wrapper = shallow(<CurrencyApp />);
        expect(typeof(wrapper.props().children[0].props.entries)).toEqual('object')
    });

});
