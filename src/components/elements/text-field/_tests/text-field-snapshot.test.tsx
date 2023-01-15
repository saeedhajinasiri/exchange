import React from "react";
import {cleanup, render} from "test";
import TextField from "../text-field";

afterEach(cleanup)

describe('Test TextField UI', () => {
  it('Default', () => {
    const {asFragment} = render(<TextField/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<TextField className={"test-class-name"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with placeholder prop', () => {
    const {asFragment} = render(<TextField placeholder={"test-placeholder"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with label prop', () => {
    const {asFragment} = render(<TextField label={"test-label"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TextField Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<TextField color={"primary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<TextField color={"secondary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<TextField color={"tertiary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<TextField color={"grey"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TextField Input Modes', () => {
  it('type=text', () => {
    const {asFragment} = render(<TextField type={"text"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('type=number', () => {
    const {asFragment} = render(<TextField type={"number"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TextField Variants', () => {
  it('variants="outlined', () => {
    const {asFragment} = render(<TextField variant={"outlined"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variants="standard', () => {
    const {asFragment} = render(<TextField variant={"standard"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TextField Disabled', () => {
  it('disabled=true', () => {
    const {asFragment} = render(<TextField disabled={true}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('disabled=false', () => {
    const {asFragment} = render(<TextField disabled={false}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TextField Error', () => {
  it('error=true', () => {
    const {asFragment} = render(<TextField error={true}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('error=false', () => {
    const {asFragment} = render(<TextField error={false}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('error=true,errorMessage=sometext', () => {
    const {asFragment} = render(<TextField error={false} errorMessage={'some text'}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
