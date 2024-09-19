import { MongoClient } from "mongodb";

export async function connectDatabase(dbName) {
  const url = process.env.MONGO_DB_URL;
  const client = new MongoClient(url);

  try {
    await client.connect();
    return { client, dbName };
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database.");
  }
}
