import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to avoid creating multiple connections
  if ((global as any)._mongoClientPromise) {
    clientPromise = (global as any)._mongoClientPromise;
  } else {
    client = new MongoClient(uri);
    (global as any)._mongoClientPromise = client.connect();
    clientPromise = (global as any)._mongoClientPromise;
  }
} else {
  // In production mode, create a new connection on each request
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
