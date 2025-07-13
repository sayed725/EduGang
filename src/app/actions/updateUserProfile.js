"use server";


import { dbConnect } from "@/lib/dbConnent";
import { revalidatePath } from "next/cache";



export async function updateUserProfile({
  userId,
  name,
  university,
  address,
  phone,
  dob,
}) {
  const profileCollection = await dbConnect("profiles");

  const updateDoc = {
    $set: {
      name,
      university,
      address,
      phone,
      dob,
      updatedAt: new Date(),
    },
    $setOnInsert: {
      createdAt: new Date(),
    },
  };

  await profileCollection.updateOne({ userId }, updateDoc, { upsert: true });

  revalidatePath("/profile");
}