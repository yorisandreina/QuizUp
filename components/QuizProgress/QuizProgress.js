import React from "react";
import { View } from "react-native";
import { globalStyles } from "../../styles/global";
/**
 * Component to display the progress bar in the quiz.
 * Renders a progress bar indicating the progress of the quiz.
 *
 * @param {Object} props - The component props.
 * @param {number} props.progress - The progress of the quiz as a percentage.
 * @returns {JSX.Element} Progress component.
 */
const Progress = ({ progress }) => {
  return (
    <View>
      <View style={globalStyles.progressBarContainer}>
        <View
          testID="progress-bar"
          style={[globalStyles.progressBar, { width: `${progress}%` }]}
        />
      </View>
    </View>
  );
};

export default Progress;

