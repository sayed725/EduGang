"use server";

import { collections, dbConnect } from "@/lib/dbConnent";
import { revalidatePath } from "next/cache";



export async function addReview({
  admissionId,
  rating,
  review,
  userName,
  userCollege,
  userAvatar,
}) {
  if (!admissionId || !rating || !review) {
    throw new Error("All fields are required");
  }

  const reviewCollection = await dbConnect(collections.reviews);

  const newReview = {
    admissionId,
    rating,
    comment: review,
    createdAt: new Date(),
    name: userName || "Anonymous",
    college: userCollege || "Unknown College",
    avatar: userAvatar || "https://randomuser.me/api/portraits/lego/1.jpg",
  };

  await reviewCollection.insertOne(newReview);

  revalidatePath("/");
}