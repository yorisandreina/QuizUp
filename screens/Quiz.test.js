import React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import Quiz from "./Quiz";
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useNavigation: jest.fn(),
}));

describe("Quiz component", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () =>
        Promise.resolve({
          results: [
            {
              question: "Question 1",
              correct_answer: "Answer 1",
              incorrect_answers: ["Incorrect Answer 1"],
            },
            {
              question: "Question 2",
              correct_answer: "Answer 2",
              incorrect_answers: ["Incorrect Answer 2"],
            },
          ],
        }),
    });
  });

  afterEach(() => {
    global.fetch.mockClear(); // Reset the mock after each test
    jest.clearAllMocks(); // Clear all mock calls
  });

  it("renders the current question", async () => {
    const url = "https://example.com/api"; // Mock URL

    const { getByText } = render(
      <Quiz route={{ params: { categoryUrl: url } }} />
    );

    // Wait for the component to fetch data and update the state
    await waitFor(() => {
      // Assert that the questions state is set correctly
      expect(getByText("Question 1")).toBeDefined();
    });
  });

  it("updates currentQuestionIndex state when correct answer is selected", async () => {
    const url = "https://example.com/api"; // Mock URL
    useNavigation.mockReturnValue({ navigate: jest.fn() }); // Mock the return value of useNavigation

    const { getByText } = render(
      <Quiz route={{ params: { categoryUrl: url } }} />
    );

    // Wait for the component to fetch data and update the state
    await waitFor(() => {
      // Assert that the questions state is set correctly
      expect(getByText("Question 1")).toBeDefined();
    });

    // Find the correct answer option and simulate pressing it
    let correctAnswer = getByText("Answer 1");
    await act(async () => {
      fireEvent.press(correctAnswer);
    });

    // Wait for the component to update
    await waitFor(() => {
      // Assert that the current question index is updated
      expect(getByText("Question 2")).toBeDefined();
    });

    // Find the second correct answer option and simulate pressing it
    correctAnswer = getByText("Answer 2");
    await act(async () => {
      fireEvent.press(correctAnswer);
    });

    // Wait for the component to update
    await waitFor(() => {
      // Assert that the completion message is displayed
      expect(
        getByText("Congratulations! You have completed the quiz.")
      ).toBeDefined();
      // Assert that the correct score is displayed
      expect(getByText("Your score is 2 / 2.")).toBeDefined();
    });
  });
});
