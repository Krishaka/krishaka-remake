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
      console.log(1);
      const client = await clientPromise;
      console.log(2);
      const db = client.db("krishaka"); // Database Name
      const collection = db.collection("contactUs"); // Collection name

      const { name, email, phone, query } = req.body;
      console.log(3);
      await collection.insertOne({
        name,
        email,
        phone,
        query,
        createdAt: new Date(),
      });
      console.log(4);
      res.status(200).json({ message: "Contact data saved successfully" });
    } catch (error) {
      console.log(5);
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    console.log(6);
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
