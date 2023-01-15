import React from "react";
import {cleanup, render} from "test";
import Text from '../text'

afterEach(cleanup)

describe('Test Text UI', () => {
  it('Default', () => {
    const {asFragment} = render(<Text color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with className prop', () => {
    const {asFragment} = render(<Text className={"test-class-name"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Test with style prop', () => {
    const {asFragment} = render(<Text style={{}} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Colors', () => {
  it('color=primary', () => {
    const {asFragment} = render(<Text color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=secondary', () => {
    const {asFragment} = render(<Text color={"secondary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=tertiary', () => {
    const {asFragment} = render(<Text color={'tertiary'}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=grey', () => {
    const {asFragment} = render(<Text color={'grey'}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=light', () => {
    const {asFragment} = render(<Text color={'light'}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('color=dark', () => {
    const {asFragment} = render(<Text color={'dark'}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Typographies', () => {
  it('typography=sm', () => {
    const {asFragment} = render(<Text typography={'sm'} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('typography=base', () => {
    const {asFragment} = render(<Text typography={'base'} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('typography=lg', () => {
    const {asFragment} = render(<Text typography={'lg'} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Types', () => {
  it('type=regular', () => {
    const {asFragment} = render(<Text type={"regular"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('type=bold', () => {
    const {asFragment} = render(<Text type={"bold"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('type=light', () => {
    const {asFragment} = render(<Text type={"light"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('type=medium', () => {
    const {asFragment} = render(<Text type={"medium"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Aligns', () => {
  it('align="center', () => {
    const {asFragment} = render(<Text align={"center"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('align="justify', () => {
    const {asFragment} = render(<Text align={"justify"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('align="left', () => {
    const {asFragment} = render(<Text align={"left"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('align="right', () => {
    const {asFragment} = render(<Text align={"right"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Variants', () => {
  it('variant=span', () => {
    const {asFragment} = render(<Text variant={"span"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant=h1', () => {
    const {asFragment} = render(<Text variant={"h1"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('variant=p', () => {
    const {asFragment} = render(<Text variant={"p"} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Test Text Disabled', () => {
  it('disabled=true', () => {
    const {asFragment} = render(<Text disabled={true} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('disabled=false', () => {
    const {asFragment} = render(<Text disabled={false} color={"primary"}>children</Text>);
    expect(asFragment()).toMatchSnapshot();
  });
});
