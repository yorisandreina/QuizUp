import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
/**
 * Component to display history card.
 * Renders the score, category, and date of a quiz.
 *
 * @param {Object} props - The component props.
 * @param {string} props.score - The score of the quiz.
 * @param {string} props.category - The category of the quiz.
 * @param {string} props.date - The date of the quiz.
 * @returns {JSX.Element} HistoryCard component.
 */
const HistoryCard = ({ score, category, date }) => {
  return (
    <View style={globalStyles.containerThree}>
      <Text style={globalStyles.historyText}>{category}</Text>
      <View style={globalStyles.historyText}>
        <Text>Score </Text>
        <Text style={globalStyles.dataText}>{score}</Text>
      </View>
      <View style={globalStyles.historyText}>
        <Text>Date </Text>
        <Text style={globalStyles.dataText}>{date}</Text>
      </View>
    </View>
  );
};

export default HistoryCard;

