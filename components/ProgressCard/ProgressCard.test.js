import React from "react";
import { render } from "@testing-library/react-native";
import ProgressCard from "./ProgressCard";

describe("ProgressCard", () => {
  it("renders correctly with docAmount prop", () => {
    const docAmount = "5"; // Mock docAmount value

    const { getByText } = render(<ProgressCard docAmount={docAmount} />);

    // Check if "Completed quizzes" text is rendered
    const completedQuizzesText = getByText("Completed quizzes");
    expect(completedQuizzesText).toBeTruthy();

    // Check if docAmount text is rendered
    const docAmountText = getByText(docAmount);
    expect(docAmountText).toBeTruthy();
  });
});
