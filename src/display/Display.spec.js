// Test away!
import React from "react";
import { render, cleanup, fireEvent, getByTestId } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";
import Controls from "../controls/Controls";

afterEach(cleanup);

describe("<Display />", () => {
  afterEach(cleanup);

  it("default unlocked and open status", () => {
    const component = render(<Display />);
    component.getByText(/unlocked/i);
    component.getByText(/open/i);
  });

  it("does not display locked if open status", () => {
    const display = render(<Display />);
    const control = render(<Controls />);
    const lock = control.getByText(/lock gate/i);
    fireEvent.click(lock);
    display.getByText(/unlocked/i);
  });

  it("displays if gate is open/closed and locked/unlocked", () => {
    const component = render(<Display />);
    component.getByText(/open|closed + locked|unlocked/i);
  });

  it("displays closed if closed status is true", () => {
    const component = render(<Display closed={true} />);
    component.getByText(/closed/i);
  });

  it("displays open if closed property is false", () => {
    const component = render(<Display closed={false} />);
    component.getByText(/open/i);
  });

  it('displays "closed" if the "closed" prop is true', () => {
    const component = render(<Display locked={true} />);
    component.getByText(/locked/i);
  });

  it("displays open if closed property is false", () => {
    const component = render(<Display locked={false} />);
    component.getByText(/unlocked/i);
  });

  it('has a className of "red-led" when locked', () => {
    const component = render(<Display locked={true} />);
    const lock = component.getByTestId("lock");
    expect(lock).toHaveClass("red-led");
  });

  it('has a className of "red-led" when closed', () => {
    const component = render(<Display closed={true} />);
    const close = component.getByTestId("close");
    expect(close).toHaveClass("red-led");
  });

  it('has a className of "red-led" when locked', () => {
    const component = render(<Display locked={false} />);
    const lock = component.getByTestId("lock");
    expect(lock).toHaveClass("green-led");
  });

  it('has a className of "red-led" when closed', () => {
    const component = render(<Display closed={false} />);
    const close = component.getByTestId("close");
    expect(close).toHaveClass("green-led");
  });
});
