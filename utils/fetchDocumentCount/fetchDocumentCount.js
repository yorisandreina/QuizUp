import { getDocs, collection, getFirestore } from "firebase/firestore";
import { app } from "../../firebase.config";
/**
 * Fetch the count of documents in the "data" collection.
 * 
 * This function retrieves the count of documents stored in the "data" collection
 * in the Firestore database.
 * 
 * @returns {Promise<number>} A promise that resolves to the count of documents.
 */
const fetchDocumentCount = async () => {
  // Get a reference to the Firestore database
  const db = getFirestore(app);

  try {
    // Retrieve the query snapshot of documents in the "data" collection
    const querySnapshot = await getDocs(collection(db, "data"));
    
    // Return the size of the query snapshot, which represents the count of documents
    return querySnapshot.size;
  } catch (error) {
    // Handle errors and log them to the console
    console.error("Error fetching document count:", error);
    
    // If an error occurs, return 0 as the count of documents
    return 0;
  }
};

export default fetchDocumentCount;

