import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import { globalStyles } from "../../styles/global";
/**
 * Button component for selecting a category.
 * Renders a button with the category name and a right arrow icon.
 *
 * @param {Object} props - The component props.
 * @param {string} props.category - The category name.
 * @param {Function} props.onPress - The function to be called when the button is pressed.
 * @returns {JSX.Element} CategoryButton component.
 */
function CategoryButton({ category, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} testID="category-button">
      <View style={globalStyles.cardButton}>
        <Text style={globalStyles.subtitle}>{category}</Text>
        <AntDesign
          testID="arrow-icon"
          name="arrowright"
          size={20}
          color={colors.icons}
        />
      </View>
    </TouchableOpacity>
  );
}

export default CategoryButton;

