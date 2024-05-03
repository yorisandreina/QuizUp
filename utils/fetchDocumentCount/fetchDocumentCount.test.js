import fetchDocumentCount from "./fetchDocumentCount";
import { getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";

// Mock Firebase Firestore functions
jest.mock("firebase/firestore");

describe("fetchDocumentCount function", () => {
  it("should fetch the document count from the 'data' collection", async () => {
    // Mock Firestore instance and querySnapshot
    const db = getFirestore();
    const mockQuerySnapshot = {
      size: 5, // Mocked document count
    };

    // Mock getDocs to return the mockQuerySnapshot
    getDocs.mockResolvedValueOnce(mockQuerySnapshot);

    // Call fetchDocumentCount function
    const count = await fetchDocumentCount();

    // Expect the fetched count to be the same as the mockQuerySnapshot size
    expect(count).toBe(5);
  });

  it("should handle errors and return 0 if fetching document count fails", async () => {
    // Mock Firestore instance
    const db = getFirestore();

    // Mock getDocs to throw an error
    getDocs.mockRejectedValueOnce(new Error("Failed to fetch documents"));

    // Call fetchDocumentCount function
    const count = await fetchDocumentCount();

    // Expect the count to be 0 when fetching fails
    expect(count).toBe(0);
  });
});
