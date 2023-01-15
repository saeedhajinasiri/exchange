import React from "react";
import {cleanup, render} from "test";
import Div from '../div'
import Text from '../../text'

afterEach(cleanup)

describe('Test Div UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Div>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const children = <Text color={"primary"}>children</Text>
    const {asFragment} = render(<Div>{children}</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<Div className={'test-class-name'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with item scope prop', () => {
    const {asFragment} = render(<Div itemScope={'test-item-scope'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with item type prop', () => {
    const {asFragment} = render(<Div itemType={'test-item-type'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with item prop prop', () => {
    const {asFragment} = render(<Div itemProp={'test-item-prop'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with style prop', () => {
    const {asFragment} = render(<Div style={{}}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with dangerously set inner html prop', () => {
    const testData = {"@test": "test-data",};
    const {asFragment} = render(<Div dangerouslySetInnerHTML={{__html: JSON.stringify(testData)}}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with role prop', () => {
    const {asFragment} = render(<Div role={'test-role'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with dir prop', () => {
    const {asFragment} = render(<Div dir={'test-dir'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with id prop', () => {
    const {asFragment} = render(<Div id={'test-id'}>children</Div>);
    expect(asFragment()).toMatchSnapshot();
  });
});
