import clientPromise from "./mongodb";

export const dbConnect = async (collectionName) => {
  const client = await clientPromise;
  return client.db("edugang_DB").collection(collectionName);
};

export const collections = { admissions: "admissions" };