import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { getData } from "../utils/storageUtils/getData";
import HistoryCard from "../components/HistoryCard/HistoryCard";
import { globalStyles } from "../styles/global";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
/**
 * Component to display quiz results history.
 * Retrieves and displays historical quiz data.
 * Allows users to navigate back to the home screen.
 */
const Results = () => {
  // State to store retrieved historical quiz data
  const [data, setData] = useState([]);
  // Navigation hook to enable navigation actions
  const navigation = useNavigation();

  // Effect hook to fetch historical quiz data on component mount
  useEffect(() => {
    // Call getData function with a callback to handle retrieved data
    getData((retrievedData) => {
      // Update state with retrieved data
      setData(retrievedData);
    });
  }, []);

  // Function to format date string into a more readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Function to navigate back to the home screen
  const goBack = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={globalStyles.container}>
      {/* Header with navigation back button and title */}
      <View style={globalStyles.goBack}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={globalStyles.title}>My history</Text>
      </View>
      {/* Scrollable container to display quiz history cards */}
      <ScrollView>
        {/* Iterate through historical quiz data and render history cards */}
        {data.map((item) => (
          <HistoryCard
            key={item.id}
            score={item.score.filter((value) => value === 1).length + " / 10"}
            category={item.category}
            date={formatDate(item.date)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Results;

