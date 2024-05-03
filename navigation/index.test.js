import * as React from "react";
import { render, fireEvent, waitFor, act } from "@testing-library/react-native";
import MyStack from ".";
import { NavigationContainer } from "@react-navigation/native";
import renderer from "react-test-renderer";

describe("MyStack", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", async () => {
    const { getByText } = render(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );

    await act(async () => {
      // Simulate pressing the "Home" screen button
      fireEvent.press(getByText("Welcome to QuizUp"));

      // Wait for the component to update after the button press
      await waitFor(() => {
        // Assert that the message from the "Home" screen is displayed
        expect(
          getByText("Start testing your knowledge by playing a quiz!")
        ).toBeDefined();
      });
    });
  });

  it("renders correctly", async () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );

    await act(async () => {
      // Simulate navigating to the "Results" screen
      fireEvent.press(getByText("Welcome to QuizUp"));
      fireEvent.press(getByTestId("go-to-results"));

      // Wait for the component to update after the navigation
      await waitFor(() => {
        // Assert that the message from the "Results" screen is displayed
        expect(getByText("My history")).toBeDefined();
      });
    });
  });
});
