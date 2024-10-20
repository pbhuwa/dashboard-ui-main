import { db } from "./Firebase";

export const addData = async (data) => {
  try {
    await db.collection("posts").add(data);
    console.log("Data added successfully!");
  } catch (error) {
    console.error("Error adding data:", error);
  }
};
