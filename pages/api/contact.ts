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
      const client = await clientPromise;
      const db = client.db("krishaka"); // Database Name
      const collection = db.collection("contactUs"); // Collection name

      const { name, email, phone, query } = req.body;
      await collection.insertOne({
        name,
        email,
        phone,
        query,
        createdAt: new Date(),
      });
      res.status(200).json({ message: "Contact data saved successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
