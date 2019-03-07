// Test away!
import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId,
  getByText
} from "react-testing-library";
import Controls from "./Controls";
import "jest-dom/extend-expect";

afterEach(cleanup);

describe("<Controls />", () => {
  afterEach(cleanup);

  it("checks if buttons change state", () => {
    const component = render(<Controls />);
    component.getByTestId(/lockbutton/i);
    component.getByTestId(/closebutton/i);
  });

  it("button displays close gate, lock gate status if open and unlocked", () => {
    const component = render(<Controls />);
    component.getByText(/close gate/i);
    component.getByText(/lock gate/i);
  });
});
