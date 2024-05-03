import React from "react";
import { render } from "@testing-library/react-native";
import Progress from "./QuizProgress";

describe("Progress component", () => {
  it("renders progress bar with the correct width", () => {
    const progress = 50; // Example progress percentage
    const { getByTestId } = render(<Progress progress={progress} />);

    // Find the progress bar element by its testID
    const progressBar = getByTestId("progress-bar");

    // Assert that the progress bar width matches the provided progress percentage
    expect(progressBar.props.style[1].width).toBe(`${progress}%`);
  });
});
