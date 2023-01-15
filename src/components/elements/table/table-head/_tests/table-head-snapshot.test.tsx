import React from "react";
import {cleanup, render} from "test";
import TableHead from '../table-head'
import TableRow from '../../table-row'
import Table from "../../table";

afterEach(cleanup)

describe('Test TableHead UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Table><TableHead/></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const children = <TableRow/>
    const {asFragment} = render(<Table><TableHead>{children}</TableHead></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});
