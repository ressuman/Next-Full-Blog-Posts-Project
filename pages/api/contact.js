// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectDatabase } from "@/helpers/contact/connect-database";
import { insertFormDocument } from "@/helpers/contact/insert-form-document";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });

      return;
    }

    const newMessage = {
      email,
      name,
      message,
      date: new Date(),
    };

    console.log(newMessage);

    let client;

    try {
      const { client, dbName } = await connectDatabase("Contact-Form");
      const insertResult = await insertFormDocument(
        client,
        dbName,
        "messages",
        newMessage
      );

      newMessage._id = insertResult.insertedId;

      res.status(201).json({
        message: "Successfully stored message!.",
        message: newMessage,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    } finally {
      if (client) {
        await client.close();
      }
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
