import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../../firebase.config";
/**
 * Store quiz data in Firestore.
 * 
 * This function stores the score, category, and date of a quiz in a Firestore collection.
 * 
 * @param {number} score - The score achieved in the quiz.
 * @param {string} category - The category of the quiz.
 * @param {string} date - The date and time when the quiz was completed.
 * @returns {Promise<void>} A promise indicating the completion of the data storage process.
 */
export const storeData = async (score, category, date) => {
  const data = {
    score,
    category,
    date,
  };

  const db = getFirestore(app);

  try {
    // Add a new document to the "data" collection with the provided data
    await addDoc(collection(db, "data"), data);
    console.log("Data stored successfully:", data);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
