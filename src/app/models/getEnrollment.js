import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function getEnrollment() {
  const postsCollection = collection(db, "enroll");
  const snapshot = await getDocs(postsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}