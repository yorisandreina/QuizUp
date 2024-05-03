import React from "react";
import { render } from "@testing-library/react-native";
import Score from "./Score";

describe("Score component", () => {
  it("renders the score correctly", () => {
    const score = 7; // Example score
    const { getByText } = render(<Score score={score} />);

    // Assert that the score text is rendered with the correct value
    expect(getByText("Score")).toBeDefined();
    expect(getByText(`${score} / 10`)).toBeDefined();
  });
});
