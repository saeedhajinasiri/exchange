import React from "react";
import {cleanup, render} from "test";
import Text from '../../../text'
import TableContainer from '../table-container'
import Table from '../../table'

afterEach(cleanup)

describe('Test TableContainer UI', () => {
  const children = <Table/>
  it('Default', () => {
    const {asFragment} = render(<TableContainer>{children}</TableContainer>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const {asFragment} = render(<TableContainer>{children}</TableContainer>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<TableContainer className={"test-class-name"}>{children}</TableContainer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
