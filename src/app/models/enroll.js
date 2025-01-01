// lib/addPost.js
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function enrollscholarship(
  comment,
  email,
  phoneNumber,
  category,
  state,
  fullName,
  course
) {
  const postsCollection = collection(db, "enroll");

  try {
    // Attempt to add a new document to Firebase Firestore
    await addDoc(postsCollection, {
      comment,
      email,
      phoneNumber,
      category,
      state,
      fullName,
      course,
      createdAt: serverTimestamp(),
    });
    // Optionally return success response or message
    return {
      success: true,
      message:
        "Rquest submitted successfully!",
    };
  } catch (error) {
    // Handle errors and log them
    console.error("Error adding document: ", error);
    // Return error response with message
    return {
      success: false,
      message: "Failed to submit request. Please try again.",
    };
  }
}
