import calculateScore from "./scoreCalculator";
import checkAnswer from "../checkAnswerUtils/checkAnswer";

// Mock the checkAnswer function
jest.mock("../checkAnswerUtils/CheckAnswer", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("calculateScore", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should update score when the correct answer is selected for the first time", () => {
    const questions = ["Question 1", "Question 2"];
    const currentQuestionIndex = 0;
    const selectedAnswer = "Correct Answer";
    const score = [0, 0]; // Initial score

    // Mock the checkAnswer function to return correct: true
    checkAnswer.mockReturnValue({ correct: true });

    // Call the calculateScore function
    const updatedScore = calculateScore(
      questions,
      currentQuestionIndex,
      selectedAnswer,
      score
    );

    // Expect the score to be updated correctly
    expect(updatedScore).toEqual([1, 0]); // Score of the first question should be updated to 1
  });

  it("should not update score when the correct answer is selected again", () => {
    const questions = ["Question 1", "Question 2"];
    const currentQuestionIndex = 0;
    const selectedAnswer = "Correct Answer";
    const score = [1, 0]; // Score with the first question already answered correctly

    // Mock the checkAnswer function to return correct: true
    checkAnswer.mockReturnValue({ correct: true });

    // Call the calculateScore function
    const updatedScore = calculateScore(
      questions,
      currentQuestionIndex,
      selectedAnswer,
      score
    );

    // Expect the score to remain the same
    expect(updatedScore).toEqual([1, 0]); // Score should not change
  });

  it("should not update score when the wrong answer is selected", () => {
    const questions = ["Question 1", "Question 2"];
    const currentQuestionIndex = 0;
    const selectedAnswer = "Incorrect Answer";
    const score = [0, 0]; // Initial score

    // Mock the checkAnswer function to return correct: false
    checkAnswer.mockReturnValue({ correct: false });

    // Call the calculateScore function
    const updatedScore = calculateScore(
      questions,
      currentQuestionIndex,
      selectedAnswer,
      score
    );

    // Expect the score to remain the same
    expect(updatedScore).toEqual([0, 0]); // Score should not change
  });
});
