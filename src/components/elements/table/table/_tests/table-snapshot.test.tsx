import React from "react";
import {cleanup, render} from "test";
import Table from '../table'
import {TableHead} from "@elements";

afterEach(cleanup)

describe('Test Table UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Table/>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<Table className={'test-class-name'}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Table Colors', () => {
  const children = <TableHead/>
  it('color=primary', () => {
    const {asFragment} = render(<Table color={"primary"}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<Table color={"secondary"}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<Table color={'tertiary'}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<Table color={'grey'}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<Table color={'light'}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<Table color={'dark'}>{children}</Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});
