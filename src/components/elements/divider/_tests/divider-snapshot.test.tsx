import React from "react";
import {cleanup, render} from "test";
import Divider from "../divider";

afterEach(cleanup)

describe('Test Divider UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Divider/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Divider Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<Divider color={"primary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<Divider color={"secondary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<Divider color={"tertiary"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<Divider color={"grey"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<Divider color={"light"}/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<Divider color={"dark"}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

