import { shuffleAnswers } from "./shuffleAnswers";

describe("shuffleAnswers", () => {
  it("shuffles the answers array correctly", () => {
    const answers = [
      "Answer 1",
      "Answer 2",
      "Answer 3",
      "Answer 4",
      "Answer 5",
    ];

    // Call the shuffleAnswers function with the answers array
    const shuffledAnswers = shuffleAnswers(answers);

    // Assert that the length of the shuffled array is the same as the original array
    expect(shuffledAnswers).toHaveLength(answers.length);

    // Assert that the shuffled array is not equal to the original array, indicating shuffling
    expect(shuffledAnswers).not.toEqual(answers);

    // You can add additional assertions here if needed
  });
});
