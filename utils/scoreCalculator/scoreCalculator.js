import checkAnswer from "../checkAnswerUtils/checkAnswer";
/**
 * Calculate the updated score based on the selected answer.
 * 
 * This function calculates the updated score based on whether the selected answer
 * is correct or incorrect for the current question.
 * 
 * @param {Array} questions - The array of quiz questions.
 * @param {number} currentQuestionIndex - The index of the current question.
 * @param {string} selectedAnswer - The answer selected by the user.
 * @param {Array} score - The array representing the user's score.
 * @returns {Array} The updated score after evaluating the selected answer.
 */
const calculateScore = (
  questions,
  currentQuestionIndex,
  selectedAnswer,
  score
) => {
  // Check if the selected answer is correct for the current question
  const isCorrectAnswer = checkAnswer(
    questions,
    currentQuestionIndex,
    selectedAnswer
  ).correct;
  
  // Create a copy of the score array to avoid mutating the original array
  const updatedScore = [...score];

  // If the answer is correct and the question has not been previously answered correctly,
  // update the score for the current question
  if (isCorrectAnswer && score[currentQuestionIndex] === 0) {
    updatedScore[currentQuestionIndex] = 1;
  }

  // Return the updated score
  return updatedScore;
};

export default calculateScore;

