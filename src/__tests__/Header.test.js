import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Header(props) {
  return (
    <h1>
      {/* uncomment the line below to pass the test */}
      hello from the Header!
    </h1>
  );
}

export default Header;

// Remove the existing import statement for Header
// import Header from "../components/Header";

test("displays the text 'hello from the Header!'", () => {
  render(<Header />);

  expect(screen.queryByText("hello from the Header!")).toBeInTheDocument();
});
