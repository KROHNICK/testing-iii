// Test away
import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  getByText
} from "react-testing-library";
import Dashboard from "./Dashboard";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Dashboard />", () => {
  afterEach(cleanup);

  it("contains <Display /> and <Controls />", () => {
    const component = render(<Dashboard />);
    component.getByText(/open/i);
    component.getByText(/unlocked/i);
  });

  it("button switches text", () => {
    const component = render(<Dashboard />);
    const button = component.getByText(/close gate/i);
    fireEvent.click(button);
    expect(button).toHaveTextContent(/open gate/i);
  });
});
