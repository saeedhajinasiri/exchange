import React from "react";
import {cleanup, render} from "test";
import RadioButton from '../radio-button'

afterEach(cleanup)

describe('Test RadioButton UI', () => {
  it('Default', () => {
    const {asFragment} = render(<RadioButton name={"test"} label={"test"} value={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<RadioButton name={"test"} className={'test-class-name'} label={"test"} value={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with value prop', () => {
    const {asFragment} = render(<RadioButton name={"test"} value={'test-value'} label={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test RadioButton Sizes', () => {
  it('Test with desktop prop', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with tablet prop', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with mobile prop', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test RadioButton Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"primary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"secondary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"tertiary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"grey"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"light"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} color={"dark"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test RadioButton Disabled', () => {
  it('disabled=true', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} disabled={true}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('disabled=false', () => {
    const {asFragment} = render(<RadioButton name={'test'} label={"test"} value={"test"} disabled={false}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
