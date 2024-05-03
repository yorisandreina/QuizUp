import checkAnswer from "./checkAnswer";

describe("checkAnswer function", () => {
  const questions = [
    { correct_answer: "Answer 1" },
    { correct_answer: "Answer 2" },
  ];

  it("should return correct message when the selected answer is correct", () => {
    const result = checkAnswer(questions, 0, "Answer 1");
    expect(result).toEqual({ correct: true });
  });

  it("should return correct message when the selected answer is incorrect", () => {
    const result = checkAnswer(questions, 1, "Incorrect Answer");
    expect(result).toEqual({
      correct: false,
    });
  });

  // Add more test cases as needed to cover different scenarios
});
