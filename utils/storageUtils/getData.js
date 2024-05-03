import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
/**
 * Retrieve quiz data from Firestore.
 * 
 * This function retrieves quiz data from a Firestore collection and passes it to a callback function.
 * 
 * @param {function} callback - The callback function to handle the retrieved data.
 * @returns {Promise<void>} A promise indicating the completion of the data retrieval process.
 */
export const getData = async (callback) => {
  const db = getFirestore(app);

  try {
    // Retrieve all documents from the "data" collection
    const querySnapshot = await getDocs(collection(db, "data"));

    const data = [];
    querySnapshot.forEach((doc) => {
      // Extract data from each document and push it to the 'data' array
      const docData = doc.data();
      data.push({
        id: doc.id,
        score: docData.score,
        category: docData.category,
        date: docData.date,
      });
    });

    // Call the callback function with the retrieved data
    callback(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};
