import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    try {
      const { name, email, phone, query } = req.body;

      // Basic validation to check if the required fields are present
      if (!name || !email || !phone) {
        return res.status(400).json({ message: "Name, email, and phone are required." });
      }

      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DATABASE_NAME || ""); // Database Name
      const collection = db.collection(process.env.MONGODB_COLLECTION_NAME|| ""); // Collection name

      // Insert the contact data into the collection
      await collection.insertOne({
        name,
        email,
        phone,
        query: query || "", // Optional field, default to empty string if not provided
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Contact details saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
