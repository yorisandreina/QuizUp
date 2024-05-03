import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import CategoryButton from "./CategoryButton";

describe("CategoryButton", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <CategoryButton category="Example" onPress={() => {}} />
    );

    // Check if the category text is rendered
    const categoryText = getByText("Example");
    expect(categoryText).toBeTruthy();
  });

  it("calls onPress when pressed", () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CategoryButton category="Example" onPress={onPressMock} />
    );
    const button = getByTestId("category-button");

    act(() => {
        fireEvent.press(button);
    })

    // Check if onPress function is called
    expect(onPressMock).toHaveBeenCalled();
  });
});
