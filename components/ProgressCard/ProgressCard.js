import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../styles/global';
/**
 * Component to display the progress card.
 * Renders the number of completed quizzes.
 *
 * @param {Object} props - The component props.
 * @param {number} props.docAmount - The number of completed quizzes.
 * @returns {JSX.Element} ProgressCard component.
 */
const ProgressCard = ({ docAmount }) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.h2}>Completed quizzes</Text>
      <View style={globalStyles.textIcon}>
        <Text style={globalStyles.text}>{docAmount}</Text>
      </View>
    </View>
  );
}

export default ProgressCard;
