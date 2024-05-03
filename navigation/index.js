import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Quiz from "../screens/Quiz";
import Results from "../screens/Results";
/**
 * Stack navigator configuration for the screens of the quiz application.
 * Uses createStackNavigator from @react-navigation/stack.
 */
const Stack = createStackNavigator();

/**
 * Component defining the stack navigator for the quiz application.
 * Configures the navigation stack with screens for Home, Quiz, and Results.
 */
const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Screen for the Home component */}
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }} // Hide header for the Home screen
      />
      {/* Screen for the Quiz component */}
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerShown: false }} // Hide header for the Quiz screen
      />
      {/* Screen for the Results component */}
      <Stack.Screen
        name="Results"
        component={Results}
        options={{ headerShown: false }} // Hide header for the Results screen
      />
    </Stack.Navigator>
  );
}

export default MyStack;
