import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Post from "./Post";

test("renders button text", () => {
  //Arrange
  render(<Post />);
  //   act
  // .. nothing

  // assert
  const postbtn = screen.getByText("Bring post");
  expect(postbtn).toBeInTheDocument();
});
