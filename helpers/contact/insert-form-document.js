export async function insertFormDocument(
  client,
  dbName,
  collectionName,
  document
) {
  try {
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const insertResult = await collection.insertOne(document);
    return insertResult;
  } catch (error) {
    console.error("Form Document insertion error:", error);
    throw new Error("Failed to insert form document.");
  }
}
