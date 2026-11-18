import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the Recipe Book heading and empty state", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /recipe book/i })).toBeInTheDocument();
  expect(screen.getByText(/no recipes added yet/i)).toBeInTheDocument();
});