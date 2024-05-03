/**
 * Shuffle the order of answers.
 *
 * This function shuffles the order of answers provided in an array.
 *
 * @param {Array} answers - The array of answers to be shuffled.
 * @returns {Array} The shuffled array of answers.
 */
export const shuffleAnswers = (answers) => {
  // Create a copy of the answers array to avoid mutating the original array
  const shuffledAnswers = [...answers];

  // Iterate over the array in reverse order
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    // Generate a random index within the range of the array
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at positions i and j
    [shuffledAnswers[i], shuffledAnswers[j]] = [
      shuffledAnswers[j],
      shuffledAnswers[i],
    ];
  }

  // Return the shuffled array
  return shuffledAnswers;
};
