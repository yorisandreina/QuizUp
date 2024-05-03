import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { handleCategorySelection } from "../utils/categorySelection/categorySelection";
import { globalStyles } from "../styles/global";
import CategoryButton from "../components/CategoryButton/CategoryButton";
import ProgressCard from "../components/ProgressCard/ProgressCard";
import fetchDocumentCount from "../utils/fetchDocumentCount/fetchDocumentCount";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../styles/colors";
/**
 * Component representing the home screen of the quiz application.
 * Displays welcome message, progress card, and category buttons for starting quizzes.
 * Allows refreshing the data and navigating to the history screen.
 */
const Home = () => {
  // State to store document count and refreshing status
  const [docCount, setDocCount] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  // Navigation hook to enable navigation actions
  const navigation = useNavigation();

  // Effect hook to fetch initial data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch document count data from the database
  const fetchData = async () => {
    const count = await fetchDocumentCount();
    setDocCount(count);
  };

  // Function to navigate to the quiz screen with the selected category
  const goToQuizScreen = (categoryId) => {
    const categoryUrl = handleCategorySelection(categoryId);
    navigation.navigate("Quiz", { categoryUrl });
  };

  // Function to handle the refresh action
  const onRefresh = () => {
    setRefreshing(true); // Set refreshing to true to indicate start of refresh action
    fetchData(); // Fetch data again
    setRefreshing(false); // Set refreshing to false to indicate end of refresh action
  };

  return (
    <View style={globalStyles.container}>
      {/* ScrollView component with RefreshControl for pull-to-refresh functionality */}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing} // Pass the refreshing state
            onRefresh={onRefresh} // Pass the function to handle refresh action
          />
        }
      >
        {/* Welcome message */}
        <Text style={globalStyles.title} testID="home">
          Welcome to QuizUp
        </Text>
        {/* Instruction message */}
        <Text style={globalStyles.h2} testID="home">
          Start testing your knowledge by playing a quiz!
        </Text>
        {/* Display progress card with document count */}
        <ProgressCard docAmount={docCount} />
        {/* Button to navigate to history screen */}
        <TouchableOpacity
          testID="go-to-results"
          style={globalStyles.button}
          onPress={() => navigation.navigate("Results")}
        >
          <Text style={globalStyles.button.text}>View History</Text>
          <AntDesign name="arrowright" size={20} color={colors.white} />
        </TouchableOpacity>
        {/* Container for category buttons */}
        <View style={globalStyles.containerTwo}>
          {/* Category selection buttons */}
          <Text style={globalStyles.h3}>
            Choose a category to start playing
          </Text>
          <CategoryButton category="Animals" onPress={() => goToQuizScreen(1)} />
          <CategoryButton category="General Knowledge" onPress={() => goToQuizScreen(2)} />
          <CategoryButton category="Science & Nature" onPress={() => goToQuizScreen(3)} />
          <CategoryButton category="History" onPress={() => goToQuizScreen(4)} />
          <CategoryButton category="Sports" onPress={() => goToQuizScreen(5)} />
          <CategoryButton category="Politics" onPress={() => goToQuizScreen(6)} />
          <CategoryButton category="Mythology" onPress={() => goToQuizScreen(7)} />
          <CategoryButton category="Art" onPress={() => goToQuizScreen(8)} />
          <CategoryButton category="Vehicles" onPress={() => goToQuizScreen(9)} />
          <CategoryButton category="Celebrities" onPress={() => goToQuizScreen(10)} />
          <CategoryButton category="Books" onPress={() => goToQuizScreen(11)} />
          <CategoryButton category="Television" onPress={() => goToQuizScreen(12)} />
          <CategoryButton category="Musicals & Theaters" onPress={() => goToQuizScreen(13)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;


