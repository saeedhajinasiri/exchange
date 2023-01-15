import React from "react";
import {cleanup, render} from "test";
import LoadingIndicator from '../loading-indicator'

afterEach(cleanup)

describe('Test LoadingIndicator UI', () => {
  it('Default', () => {
    const {asFragment} = render(<LoadingIndicator/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<LoadingIndicator className={'test-class-name'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with size prop', () => {
    const {asFragment} = render(<LoadingIndicator size={"tiny"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with size prop', () => {
    const {asFragment} = render(<LoadingIndicator size={"small"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with size prop', () => {
    const {asFragment} = render(<LoadingIndicator size={"medium"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with size prop', () => {
    const {asFragment} = render(<LoadingIndicator size={"large"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with size prop', () => {
    const {asFragment} = render(<LoadingIndicator size={"huge"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

});

describe('Test LoadingIndicator Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<LoadingIndicator color={'primary'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<LoadingIndicator color={'secondary'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<LoadingIndicator color={'tertiary'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<LoadingIndicator color={'grey'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<LoadingIndicator color={'light'}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<LoadingIndicator color={'dark'}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});


