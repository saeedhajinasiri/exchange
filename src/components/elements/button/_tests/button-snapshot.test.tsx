import React from "react";
import {cleanup, render} from "test";
import {Button, Text} from "@elements";

afterEach(cleanup)

describe('Test Button UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Button>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with children prop', () => {
    const children = <Text color={"primary"}>children</Text>
    const {asFragment} = render(<Button>{children}</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<Button className={'test-class-name'}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Variants', () => {
  it('variant=text', () => {
    const {asFragment} = render(<Button variant={"text"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant=outlined', () => {
    const {asFragment} = render(<Button variant={"outlined"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant=contained', () => {
    const {asFragment} = render(<Button variant={"contained"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<Button color={"primary"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<Button color={"secondary"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<Button color={"tertiary"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<Button color={"grey"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<Button color={"light"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<Button color={"dark"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Sizes', () => {
  it('size=small', () => {
    const {asFragment} = render(<Button size={"small"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('size=medium', () => {
    const {asFragment} = render(<Button size={"medium"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('size=large', () => {
    const {asFragment} = render(<Button size={"large"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Shapes', () => {
  it('shape=circle', () => {
    const {asFragment} = render(<Button shape={"circle"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shape=square', () => {
    const {asFragment} = render(<Button shape={"square"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shape=rectangle', () => {
    const {asFragment} = render(<Button shape={"rectangle"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('shape=circle', () => {
    const {asFragment} = render(<Button shape={"circle"}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Disabled', () => {
  it('disabled=true', () => {
    const {asFragment} = render(<Button disabled={true}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('disabled=false', () => {
    const {asFragment} = render(<Button disabled={false}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Button Loading', () => {
  it('loading=true', () => {
    const {asFragment} = render(<Button loading={true}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('loading=false', () => {
    const {asFragment} = render(<Button loading={false}>children</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
