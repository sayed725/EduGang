"use client";

import { StarIcon, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { addReview } from "../actions/addReview";
import { Button } from "@/components/ui/button";

export default function ReviewModal({
  admissionId,
  userName,
  userCollege,
  userAvatar,
  onReviewAdded,
}) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate admissionId, rating, and review
    if (!admissionId) {
      toast.error("Admission ID is missing!");
      return;
    }
    if (!rating || !review) {
      toast.error("Please provide both a rating and a review!");
      return;
    }

    try {
      setIsSubmitting(true);

      await addReview({
        admissionId: admissionId.toString(), // Ensure admissionId is a string
        rating: Number(rating), // Ensure rating is a number
        review,
        userName,
        userCollege,
        userAvatar,
      });

      toast.success("Review submitted successfully");
      setIsOpen(false);
      setRating(0);
      setReview("");

      if (onReviewAdded) onReviewAdded();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {/* Trigger Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="mx-auto block w-3/5 bg-[#0f82fc] hover:bg-[#0b6cd6] text-white font-medium py-2 rounded-md transition-transform duration-300 hover:scale-105"
      >
        Add Review
      </Button>

      {/* Dialog Overlay and Content */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl py-5  max-w-[425px] mx-4">

           <div className="flex justify-between items-center px-6 pt-6">

            {/* Dialog Header */}
            <div className="pt-6">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white">
                Add Your Review
              </h2>
            </div>
              {/* CLOSE BUTTON */}
            <button
              className="top-0 text-gray-900 hover:text-gray-800"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
              <span className="sr-only">Close</span>
            </button>
           </div>

            

            {/* Dialog Content */}
            <form
              onSubmit={handleSubmit}
              className="-mt-2 pt-4 px-6 pb-6 space-y-4"
            >
              {/* Rating Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rating
                </label>
                <div className="flex space-x-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className={`w-6 h-6 cursor-pointer ${
                        star <= rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                </div>
              </div>

              {/* Review Textarea */}
              <div>
                <label
                  htmlFor="review"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Review
                </label>
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  placeholder="Write your review here..."
                  className="mt-2 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting || !rating || !review}
                className={`w-full py-2 px-4 rounded-md text-sm font-medium text-white ${
                  isSubmitting || !rating || !review
                    ? "bg-[#0f82fc] cursor-not-allowed"
                    : "bg-[#0f82fc] hover:bg-[#0b6cd6]"
                } transition-colors duration-200`}
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}