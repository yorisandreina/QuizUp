import calculateProgress from "./calculateProgress";

describe("calculateProgress", () => {
  it("should return 0 when currentQuestionIndex is 0", () => {
    const currentQuestionIndex = 0;
    const totalQuestions = 10;
    const progress = calculateProgress(currentQuestionIndex, totalQuestions);
    expect(progress).toBe(0);
  });

  it("should return 100 when currentQuestionIndex is equal to totalQuestions", () => {
    const currentQuestionIndex = 10;
    const totalQuestions = 10;
    const progress = calculateProgress(currentQuestionIndex, totalQuestions);
    expect(progress).toBe(100);
  });

  it("should return the correct progress when currentQuestionIndex is between 0 and totalQuestions", () => {
    const currentQuestionIndex = 5;
    const totalQuestions = 10;
    const progress = calculateProgress(currentQuestionIndex, totalQuestions);
    expect(progress).toBe(50);
  });

  it("should return 0 when totalQuestions is 0 to avoid division by zero", () => {
    const currentQuestionIndex = 5;
    const totalQuestions = 0;
    const progress = calculateProgress(currentQuestionIndex, totalQuestions);
    expect(progress).toBe(0);
  });
});
