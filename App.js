import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import MyStack from "./navigation";
/**
 * Main entry point of the application.
 * 
 * This component renders the navigation container and sets up the navigation stack.
 * 
 * @returns {JSX.Element} The rendered application component.
 */
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
};

