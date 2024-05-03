import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Answer from "./Answer";

describe("Answer component", () => {
  it("renders answer text correctly", () => {
    const answer = "Option A";
    const { getByText } = render(<Answer answer={answer} />);
    expect(getByText(answer)).toBeDefined();
  });

  it("calls onPress function when TouchableOpacity is pressed", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Answer answer="Option A" onPress={onPressMock} />
    );
    fireEvent.press(getByText("Option A"));
    expect(onPressMock).toHaveBeenCalled();
  });
});
