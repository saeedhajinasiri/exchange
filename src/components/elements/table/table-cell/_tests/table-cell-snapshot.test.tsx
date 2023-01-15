import React from "react";
import {cleanup, render} from "test";
import TableCell from '../table-cell'
import Table from '../../table'
import TableBody from '../../table-body'
import TableRow from '../../table-row'

afterEach(cleanup)

describe('Test TableCell UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TableCell Variants', () => {
  it('variant="head', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell variant={"head"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant="footer', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell variant={"footer"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant="body', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell variant={"body"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TableCell Sizes', () => {
  it('size=small', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell size={"small"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('size=medium', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell size={"medium"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('size=large', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell size={"large"}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test TableCell Colspan', () => {
  it('colspan=2', () => {
    const {asFragment} = render(<Table><TableBody><TableRow><TableCell colSpan={2}>children</TableCell></TableRow></TableBody></Table>);
    expect(asFragment()).toMatchSnapshot();
  });
});
