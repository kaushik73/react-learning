import "@testing-library/jest-dom";
import Contact from "../Components/Contact";
import { render, screen } from "@testing-library/react";

test("should load contact us component", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading", { name: /Contact Us Page/i });
  expect(heading).toBeInTheDocument();
});

test("should render submit button", () => {
  render(<Contact />);
  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();
});

// can write it OR test (these two are same thing)
it("should render text submit", () => {
  render(<Contact />);
  const submitButton = screen.getByText("Submit");
  expect(submitButton).toBeInTheDocument();
});

describe("Input Box Testing - 2 test case", () => {
  test("should render 2 input box", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });

  test("should not render 5 input box", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).not.toBe(5);
  });
});
