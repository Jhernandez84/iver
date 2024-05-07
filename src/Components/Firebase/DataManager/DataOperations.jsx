"use client";

import { db } from "@/Components/Firebase/firebase";

export const GetFireBaseData = async (DBEvento) => {
  try {
    if (!DBEvento || typeof DBEvento !== "string") {
      throw new Error("Invalid DBEvento parameter");
    }

    const collectionRef = db.collection(`${DBEvento}`);
    const querySnapshot = await collectionRef.limit(100).get(); // Limit to 100 records

    if (querySnapshot.empty) {
      throw new Error(`Sin registros para el evento: ${DBEvento}`);
    }

    const records = querySnapshot.docs
      .map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      .filter((record) => record.EventoEstado !== "eliminado");

    records.sort((a, b) => a.Rut.localeCompare(b.Rut));

    return records;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const GetFireBaseDataCount = async (DBEvento) => {
  try {
    if (!DBEvento || typeof DBEvento !== "string") {
      throw new Error("Invalid DBEvento parameter");
    }

    const collectionRef = db.collection(`${DBEvento}`);
    const querySnapshot = await collectionRef.get(); // Fetch metadata about documents

    // Get the count of documents in the collection from the metadata
    const count = querySnapshot.size;

    return count;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Re-throw the error to be caught by the caller
  }
};

export const checkValueExists = async (collectionName, fieldName, value) => {
  try {
    if (
      !collectionName ||
      typeof collectionName !== "string" ||
      !fieldName ||
      typeof fieldName !== "string"
    ) {
      throw new Error("Invalid collectionName or fieldName parameter");
    }

    const collectionRef = db.collection(collectionName);
    const querySnapshot = await collectionRef
      .where(fieldName, "==", value)
      .get();

    return !querySnapshot.empty;
  } catch (error) {
    console.error("Error checking value existence:", error);
    throw error;
  }
};

export const CreateRecord = async (collectionName, newData) => {
  try {
    const docRef = db.collection(collectionName).doc();
    await docRef.set(newData);
    console.log("Document created successfully.");
    return docRef.id; // Return the ID of the newly created document
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

export const UpdateRecord = async (collectionName, id, newData) => {
  try {
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      // Document exists, update its data
      await docRef.update(newData);
      console.log(`Document with ID ${id} updated successfully.`);
    } else {
      throw new Error(`Document with ID ${id} does not exist.`);
    }
  } catch (error) {
    console.error("Error updating record:", error);
    throw error;
  }
};

export const DeleteRecord = async (collectionName, id) => {
  try {
    const docRef = db.collection(collectionName).doc(id);
    const doc = await docRef.get();

    if (doc.exists) {
      // Document exists, delete it
      await docRef.delete();
      console.log(`Document with ID ${id} deleted successfully.`);
    } else {
      throw new Error(`Document with ID ${id} does not exist.`);
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    throw error;
  }
};
