/**
 * Calculates the progress percentage of the quiz based on the current question index and total number of questions.
 * @param {number} currentQuestionIndex - The index of the current question.
 * @param {number} totalQuestions - The total number of questions in the quiz.
 * @returns {number} - The progress percentage of the quiz.
 */
const calculateProgress = (currentQuestionIndex, totalQuestions) => {
  if (totalQuestions === 0) {
    return 0; // Return 0 if there are no questions
  }

  const progress = (currentQuestionIndex / totalQuestions) * 100;
  return Math.round(progress);
};

export default calculateProgress;
