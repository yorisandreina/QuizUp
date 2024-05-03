import React from "react";
import { render } from "@testing-library/react-native";
import HistoryCard from "./HistoryCard";

describe("HistoryCard", () => {
  it("renders correctly", () => {
    const props = {
      score: "7/10",
      category: "Example Category",
      date: "2024-04-30",
    };

    const { getByText } = render(<HistoryCard {...props} />);

    // Check if category text is rendered
    const categoryText = getByText(props.category);
    expect(categoryText).toBeTruthy();

    // Check if score text is rendered
    const scoreText = getByText(`${props.score}`);
    expect(scoreText).toBeTruthy();

    // Check if date text is rendered
    const dateText = getByText(`${props.date}`);
    expect(dateText).toBeTruthy();
  });
});
