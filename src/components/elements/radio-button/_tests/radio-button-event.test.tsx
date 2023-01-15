import React from "react";
import {cleanup, fireEvent, render, screen} from "test";
import RadioButton from '../radio-button'

afterEach(cleanup);

describe('Test RadioButton Events', () => {
  it('Test RadioButton Checked functionality', () => {
    render(<RadioButton name={"test"} label={"test"} value={"test"}/>);
    const radioButton: HTMLInputElement = screen.getByRole('radio')
    fireEvent.click(radioButton)
    expect(radioButton).toBeChecked()
  })
});