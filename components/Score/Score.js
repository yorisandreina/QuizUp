import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
/**
 * Component to display the score in the quiz.
 * Renders the score container with the current score out of 10.
 *
 * @param {Object} props - The component props.
 * @param {number} props.score - The current score in the quiz.
 * @returns {JSX.Element} Score component.
 */
const Score = ({ score }) => {
  return (
    <View testID="score-container" style={globalStyles.scoreContainer}>
      <Text style={globalStyles.text}>Score</Text>
      <Text style={globalStyles.text}>{score + " / 10"}</Text>
    </View>
  );
};

export default Score;

