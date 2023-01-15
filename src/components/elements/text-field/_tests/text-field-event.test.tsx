import React from "react";
import {cleanup, fireEvent, render, screen} from "test";
import TextField from "../text-field";

afterEach(cleanup)

describe('Test TextField Events', () => {
  it('Test onChange functionality', () => {
    const handleChange = jest.fn()
    render(<TextField onChange={handleChange}/>);
    const input: HTMLInputElement = screen.getByRole('textbox')
    fireEvent.change(input, {target: {value: 'a'}})
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('a')
  });
});
