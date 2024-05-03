import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Question from "./Question";

describe("Question Component", () => {
  it("renders question text", () => {
    // Define the question text
    const questionText = "What is the capital of France?";

    // Render the component with the question text
    const { getByText } = render(<Question question={questionText} />);

    // Check if the question text is rendered correctly
    const questionElement = getByText(questionText);
    expect(questionElement).toBeDefined();
  });
});
