import { handleCategorySelection } from "./categorySelection";

describe("handleCategorySelection", () => {
  it("should return the correct URL for category 1", () => {
    const categoryId = 1;
    const expectedUrl =
      "https://opentdb.com/api.php?amount=10&category=27&type=multiple";
    const result = handleCategorySelection(categoryId);
    expect(result).toEqual(expectedUrl);
  });

  it("should return the correct URL for category 2", () => {
    const categoryId = 2;
    const expectedUrl =
      "https://opentdb.com/api.php?amount=10&category=9&type=multiple";
    const result = handleCategorySelection(categoryId);
    expect(result).toEqual(expectedUrl);
  });

  it("should return default category  if an invalid ID is passed in", () => {
    const categoryId = -5;
    const expectedUrl =
      "https://opentdb.com/api.php?amount=10";
    const result = handleCategorySelection(categoryId);
    expect(result).toEqual(expectedUrl);
  });
});
