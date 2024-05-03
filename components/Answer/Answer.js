import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { globalStyles } from "../../styles/global";
/**
 * Component representing an answer option in the quiz.
 * Renders a touchable answer option with the provided text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.answer - The answer option text.
 * @param {Function} props.onPress - The function to be called when the answer is pressed.
 * @returns {JSX.Element} Answer component.
 */
const Answer = ({ answer, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={globalStyles.containerThree}>
      <Text style={globalStyles.historyText}>{answer}</Text>
    </TouchableOpacity>
  );
};

export default Answer;

