import { render, screen } from "@testing-library/react";
import FeedPage from "./Pages/FeedPage";

test("renders learn react link", () => {
  render(<FeedPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
