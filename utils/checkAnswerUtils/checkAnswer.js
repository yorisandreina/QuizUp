/**
 * Check if the selected answer matches the correct answer for the current question.
 *
 * This function compares the selected answer with the correct answer for the current question
 * to determine whether the answer is correct or not.
 *
 * @param {Array<Object>} questions - An array of question objects.
 * @param {number} questionIndex - The index of the current question.
 * @param {string} selectedAnswer - The answer selected by the user.
 * @returns {Object} An object containing information about the correctness of the answer.
 *                   It includes a boolean value indicating whether the answer is correct,
 *                   and a message providing feedback to the user.
 */
const checkAnswer = (questions, questionIndex, selectedAnswer) => {
  // Get the correct answer for the current question
  const correctAnswer = questions[questionIndex].correct_answer;

  // Compare the selected answer with the correct answer
  if (selectedAnswer === correctAnswer) {
    // If the selected answer is correct, return an object with correct=true
    return { correct: true };
  } else {
    // If the selected answer is incorrect, return an object with correct=false
    return {
      correct: false,
    };
  }
};

export default checkAnswer;
