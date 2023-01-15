import React from "react";
import {cleanup, render} from "test";
import TableBody from '../table-body'
import TableRow from "../../table-row";
import Table from "../../table";

afterEach(cleanup)

describe('Test TableBody UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Table><TableBody/></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<Table><TableBody className={'test-class-name'}/></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const children = <TableRow/>;
    const {asFragment} = render(<Table><TableBody>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TableBody Colors', () => {
  const children = <TableRow color={"primary"}/>
  it('color=primary', () => {
    const {asFragment} = render(<Table><TableBody color={"primary"}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<Table><TableBody color={"secondary"}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<Table><TableBody color={'tertiary'}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<Table><TableBody color={'grey'}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<Table><TableBody color={'light'}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<Table><TableBody color={'dark'}>{children}</TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});
