import React from "react";
import {cleanup, render} from "test";
import TableRow from '../table-row'
import Table from '../../table'
import TableHead from '../../table-head'
import TableCell from '../../table-cell'

afterEach(cleanup)

describe('Test TableRow UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Table><TableHead><TableRow/></TableHead></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const children = <TableCell>children</TableCell>
    const {asFragment} = render(<Table><TableHead><TableRow>{children}</TableRow></TableHead></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});
