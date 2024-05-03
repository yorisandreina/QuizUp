import { getData } from "./getData";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Mock the Firebase Firestore module
jest.mock("firebase/firestore");

describe("getData function", () => {
  it("should fetch data from Firestore and call the callback with the retrieved data", async () => {
    // Mock Firestore instance
    const db = getFirestore();

    // Mock Firestore collection and querySnapshot
    const mockData = [
      { score: 1, category: "Category1", date: "2024-04-28" },
      { score: 4, category: "Category2", date: "2024-04-29" },
    ];
    const mockQuerySnapshot = {
      forEach: jest.fn((callback) => {
        mockData.forEach((data) => callback({ id: data.id, data: () => data }));
      }),
    };

    // Mock getDocs to return the mockQuerySnapshot
    getDocs.mockResolvedValueOnce(mockQuerySnapshot);

    // Create a mock callback function
    const callback = jest.fn();

    // Call the getData function with the mock callback
    await getData(callback);

    // Expect callback to have been called with the mock data
    expect(callback).toHaveBeenCalledWith(mockData);
  });

  it("should handle errors when fetching data from Firestore", async () => {
    // Mock console.error
    const consoleErrorMock = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Mock Firestore instance
    const db = getFirestore();

    // Mock getDocs to throw an error
    const errorMessage = "Failed to fetch data from Firestore";
    getDocs.mockRejectedValueOnce(new Error(errorMessage));

    // Create a mock callback function
    const callback = jest.fn();

    // Call the getData function with the mock callback
    await getData(callback);

    // Expect callback not to have been called
    expect(callback).not.toHaveBeenCalled();

    // Expect an error message to have been logged
    expect(consoleErrorMock).toHaveBeenCalledWith(
      "Error retrieving data:",
      new Error(errorMessage)
    );

    // Restore console.error
    consoleErrorMock.mockRestore();
  });
});
