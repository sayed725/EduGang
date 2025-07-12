
"use client"
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Alex Thompson",
      college: "Harvard University",
      rating: 5,
      comment:
        "Harvard gave me top-class education and great research opportunities. Campus life was truly remarkable.",
      year: "Class of 2023",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      college: "Stanford University",
      rating: 5,
      comment:
        "Stanford's innovative learning style and modern labs helped me grow both academically and personally.",
      year: "Class of 2024",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 3,
      name: "Mohammed Hassan",
      college: "Dhaka College",
      rating: 4,
      comment:
        "Dhaka College offers strong academic support and a close-knit community that helps students succeed.",
      year: "Class of 2022",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 4,
      name: "Emma Johnson",
      college: "Oxford University",
      rating: 5,
      comment:
        "Oxford's historic campus and rigorous academics made it the most fulfilling experience of my student life.",
      year: "Class of 2023",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 5,
      name: "Lucas Müller",
      college: "Stanford University",
      rating: 5,
      comment:
        "Stanford empowered me to explore ideas freely, collaborate with experts, and build a global mindset.",
      year: "Class of 2023",
      avatar: "https://randomuser.me/api/portraits/men/59.jpg",
    },
    {
      id: 6,
      name: "Amina Rahman",
      college: "Oxford University",
      rating: 5,
      comment:
        "Oxford helped sharpen my critical thinking and gave me access to unmatched academic resources and support.",
      year: "Class of 2024",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto mb-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Listen to our <span className="text-[#0f82fc]"> Student Reviews</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore cutting-edge research from leading institutions across various
          fields.
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-6xl mx-auto"
      >
        <CarouselContent>
          {reviews.map((review) => (
            <CarouselItem
              key={review.id}
              className="md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <div className="bg-white border border-gray-200 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 p-10 h-full">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-100"
                    />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#0f82fc] text-white rounded-full flex items-center justify-center text-xs">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <div className="flex justify-center mb-10">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm text-center mb-10 line-clamp-3">
                  {review.comment}
                </p>
                <h3 className="text-gray-900 text-lg font-semibold text-center">
                  {review.name}
                </h3>
                <p className="text-gray-500 text-sm text-center">
                  {review.college} • {review.year}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white border-none hidden lg:flex" />
        <CarouselNext className="bg-[#0f82fc] text-white hover:bg-[#0f82fc] hover:text-white border-none hidden lg:flex" />
      </Carousel>
    </div>
  );
}
