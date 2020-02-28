import { shallow } from "enzyme";
import React from "react";

import Card from "../components/Card";
import Header from '../components/card/Header'
import Info from '../components/card/Info'

describe("Card", () => {
  it('Card do not crash without props"', () => {
        const card = shallow(<Card />);
        expect(card.find('div').text()).toBe('')
    })
});

describe("Header", () => {
    it('Header renders as expected"', () => {
        const header = shallow(<Header firstname="Regina" lastname="Gorge" />);
        expect(header.find('span').text()).toBe('Regina Gorge')
    })
});

describe("Info", () => {
    it('Info renders weight as kg"', () => {
        const info = shallow(<Info weight="80000" />);
        expect(info.find('#weight').text()).toBe('weight : 80 kg')
    })
});
