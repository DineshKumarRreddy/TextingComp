import React from "react";
import { render, screen, fireEvent  } from "@testing-library/react";
import { InputText } from ".";
const args = {
  onChange: jest.fn(),
  type: 'text',
  value: '',
  placeholder: 'Mention',
};

const mountApp = (props = args) => {
  return render(<InputText {...props} />);
};

describe('InputText component', () => {
  beforeEach(() => {
    args.onChange.mockClear();
    mountApp();
  });

  it('component should render', () => {
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
  it('pass the value and find the element', () => {
    mountApp({...args, value: "Dinesh"});
    const input = screen.getByDisplayValue('Dinesh');
    expect(input).toBeInTheDocument();
  })
  it('onchange text should call the onchage event', () => {
    const input = screen.getByPlaceholderText(args.placeholder);
    fireEvent.change(input, { target: { value: "Knight" } });
    expect(args.onChange).toBeCalledTimes(1);
  });
});


