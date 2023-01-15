import React from "react";
import {cleanup, fireEvent, render, screen} from "test";
import Button from '../button'

afterEach(cleanup)

describe('Test Button Events', () => {
  it('Test Button onClick functionality', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>children</Button>);
    const button = screen.getByTestId('button-test-id')
    fireEvent.click(button)
    expect(handleClick).toBeCalledTimes(1)
  })
});

describe('Test Button Disable Functionality', () => {
  it('Test disabled=true functionality', () => {
    render(<Button disabled={true}>children</Button>);
    const button = screen.getByTestId('button-test-id')
    expect(button).toBeDisabled()
  })

  it('Test disabled=false functionality', () => {
    render(<Button disabled={false}>children</Button>);
    const button = screen.getByTestId('button-test-id')
    expect(button).toBeEnabled()
  })
});
