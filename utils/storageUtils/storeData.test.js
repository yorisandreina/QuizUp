// storeData.test.js

import { storeData } from "./storeData";
import { addDoc, collection, getFirestore } from "firebase/firestore"; // Import the necessary Firestore functions

jest.mock("firebase/firestore"); // Mock Firestore functions

describe("storeData function", () => {
  it('should add a document to the "data" collection', async () => {
    const mockData = {
      score: 100,
      category: "Test Category",
      date: "2024-04-28",
    };

    // Mock the Firestore getFirestore function to return a dummy Firestore instance
    const db = getFirestore();

    // Mock the Firestore collection function to return a dummy collection reference
    const mockCollection = collection(db, "data");

    // Mock the Firestore addDoc function to return a Promise resolved with a dummy docRef
    addDoc.mockResolvedValueOnce({ id: "dummyDocId" });

    await storeData(mockData.score, mockData.category, mockData.date);

    // Expect addDoc to have been called with the correct arguments
    expect(addDoc).toHaveBeenCalledWith(mockCollection, mockData);
  });
});
