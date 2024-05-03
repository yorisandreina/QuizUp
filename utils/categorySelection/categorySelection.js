/**
 * Generates the API URL for a selected category based on its ID.
 * @param {number} categoryId - The ID of the selected category.
 * @returns {string} - The API URL for the selected category.
 */
export const handleCategorySelection = (categoryId) => {
  let categoryUrl;
  switch (categoryId) {
    case 1:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=27&type=multiple";
      break;
    case 2:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=9&type=multiple";
      break;
    case 3:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=17&type=multiple";
      break;
    case 4:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=23&type=multiple";
      break;
    case 5:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=21&type=multiple";
      break;
    case 6:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=24&type=multiple";
      break;
    case 7:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=20&type=multiple";
      break;
    case 8:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=25&type=multiple";
      break;
    case 9:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=28&type=multiple";
      break;
    case 10:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=26&type=multiple";
      break;
    case 11:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=10&type=multiple";
      break;
    case 12:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=14&type=multiple";
      break;
    case 13:
      categoryUrl =
        "https://opentdb.com/api.php?amount=10&category=13&type=multiple";
      break;
    default:
      //random category
      categoryUrl = "https://opentdb.com/api.php?amount=10";
      break;
  }
  return categoryUrl;
};
