import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the contact page", () => {
  render(<App />);

  expect(screen.getByRole("heading", { name: /let's work together/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /send message/i })).toBeInTheDocument();
});
