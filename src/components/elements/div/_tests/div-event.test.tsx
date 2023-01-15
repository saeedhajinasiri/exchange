import React from "react";
import {cleanup, fireEvent, render, screen} from "test";
import Div from '../div'

afterEach(cleanup)

describe('Test Div Events', () => {
  it('Test Div onClick functionality', () => {
    const handleClick = jest.fn()
    render(<Div onClick={handleClick}/>);
    const div: HTMLDivElement = screen.getByTestId('div-test-id')
    fireEvent.click(div)
    expect(handleClick).toBeCalledTimes(1)
  })
});