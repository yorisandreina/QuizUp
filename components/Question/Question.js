import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
/**
 * Component to display a question in the quiz.
 * Renders the question text.
 *
 * @param {Object} props - The component props.
 * @param {string} props.question - The text of the question.
 * @returns {JSX.Element} Question component.
 */
const Question = ({ question }) => {
  return (
    <View>
      <Text style={globalStyles.title}>{question}</Text>
    </View>
  );
};

export default Question;

