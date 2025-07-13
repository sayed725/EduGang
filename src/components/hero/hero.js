"use client"

import Image from "next/image";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const colleges = [
    {
      id: 1,
      name: "Stellar University",
      image: "/random-college1.jpg",
      rating: 4.7,
      admissionDate: "June 1 - July 31",
      researchCount: 120,
      details: {
        events: [
          "Annual Tech - Aug 20, 2025",
          "Cultural Fest - Sep 10, 2025",
          "Research Expo - Oct 5, 2025",
        ],
        sports: ["Soccer", "Basketball", "Swimming"],
      },
    },
    {
      id: 2,
      name: "Horizon College",
      image: "/random-college2.jpg",
      rating: 4.5,
      admissionDate: "June 1 - July 31",
      researchCount: 95,
      details: {
        events: [
          "Science Fair - Aug 25, 2025",
          "Music Festival - Sep 15, 2025",
          "Career Fair - Oct 12, 2025",
        ],
        sports: ["Tennis", "Volleyball", "Rugby"],
      },
    },
    {
      id: 3,
      name: "Luminous Institute",
      image: "/random-college3.jpg",
      rating: 4.8,
      admissionDate: "August 1 - September 30",
      researchCount: 150,
      details: {
        events: [
          "Art Exhibition - Aug 30, 2025",
          "Tech Hackathon - Sep 18, 2025",
          "Career Fair - Oct 8, 2025",
        ],
        sports: ["Cricket", "Badminton", "Rugby"],
      },
    },
    {
      id: 4,
      name: "Aurora Academy",
      image: "/random-college4.jpg",
      rating: 4.6,
      admissionDate: "January 1 - January 31",
      researchCount: 80,
      details: {
        events: [
          "Eco Summit - Aug 28, 2025",
          "Drama Festival - Sep 22, 2025",
          "Startup Pitch - Oct 15, 2025",
        ],
        sports: ["Football", "Hockey", "Cycling"],
      },
    },
    {
      id: 5,
      name: "Celestial College",
      image: "/random-college5.jpeg",
      rating: 4.9,
      admissionDate: "June 1 - July 31",
      researchCount: 200,
      details: {
        events: [
          "Robotics Expo - Sep 5, 2025",
          "Literature Fest - Sep 20, 2025",
          "Health Awareness - Oct 10, 2025",
        ],
        sports: ["Golf", "Boxing", "Athletics"],
      },
    },
    {
      id: 6,
      name: "Nebula University",
      image: "/random-college6.avif",
      rating: 4.4,
      admissionDate: "June 1 - July 31",
      researchCount: 110,
      details: {
        events: [
          "Engineering Conclave - Aug 22, 2025",
          "Dance Competition - Sep 25, 2025",
          "Science Quiz - Oct 18, 2025",
        ],
        sports: ["Table Tennis", "Baseball", "Swimming"],
      },
    },
    {
      id: 7,
      name: "Eclipse Academy",
      image: "/random-college1.jpg",
      rating: 4.3,
      admissionDate: "February 1 - February 28",
      researchCount: 90,
      details: {
        events: [
          "Film Festival - Aug 15, 2025",
          "Tech Workshop - Sep 5, 2025",
          "Art Showcase - Oct 20, 2025",
        ],
        sports: ["Swimming", "Tennis", "Volleyball"],
      },
    },
    {
      id: 8,
      name: "Radiant Institute",
      image: "/random-college2.jpg",
      rating: 4.6,
      admissionDate: "March 1 - March 31",
      researchCount: 130,
      details: {
        events: [
          "Science Debate - Aug 18, 2025",
          "Music Concert - Sep 12, 2025",
          "Innovation Summit - Oct 25, 2025",
        ],
        sports: ["Cricket", "Football", "Badminton"],
      },
    },
    {
      id: 9,
      name: "Nova College",
      image: "/random-college3.jpg",
      rating: 4.7,
      admissionDate: "April 1 - April 30",
      researchCount: 160,
      details: {
        events: [
          "Tech Expo - Aug 22, 2025",
          "Cultural Night - Sep 15, 2025",
          "Research Symposium - Oct 10, 2025",
        ],
        sports: ["Soccer", "Basketball", "Rugby"],
      },
    },
    {
      id: 10,
      name: "Pinnacle University",
      image: "/random-college4.jpg",
      rating: 4.8,
      admissionDate: "May 1 - May 31",
      researchCount: 140,
      details: {
        events: [
          "Art Festival - Aug 28, 2025",
          "Tech Hackathon - Sep 20, 2025",
          "Career Expo - Oct 15, 2025",
        ],
        sports: ["Golf", "Boxing", "Athletics "],
      },
    },
    {
      id: 11,
      name: "Zenith Academy",
      image: "/random-college5.jpeg",
      rating: 4.5,
      admissionDate: "July 1 - July 31",
      researchCount: 100,
      details: {
        events: [
          "Eco Fair - Aug 30, 2025",
          "Drama Play - Sep 18, 2025",
          "Startup Bootcamp - Oct 12, 2025",
        ],
        sports: ["Football", "Hockey", "Cycling"],
      },
    },
    {
      id: 12,
      name: "Cosmic Institute",
      image: "/random-college6.avif",
      rating: 4.6,
      admissionDate: "August 1 - September 30",
      researchCount: 170,
      details: {
        events: [
          "Robotics Challenge - Aug 25, 2025",
          "Literature Day - Sep 10, 2025",
          "Health Seminar - Oct 18, 2025",
        ],
        sports: ["Table Tennis", "Baseball", "Swimming"],
      },
    },
  ];

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return colleges.filter((college) =>
      college.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setShowResults(true);
    }
  };

  return (
    <div className="h-full bg-[#f2f3fc] rounded-md w-11/12 mx-auto mb-10">
      <div className="max-w-7xl mx-auto py-5 lg:py-14">
        {/* header */}
        <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-10 items-center">
          <div className="w-full lg:w-[50%] space-y-5">
            <h1 className="text-[40px] dark:text-[#abc2d3] sm:text-[60px] font-[600] leading-[45px] sm:leading-[70px]">
              World Best College Booking Platform{" "}
              <span className="text-[#0f82fc]">EduGang.</span>
            </h1>
            <p className="text-[18px] text-gray-700 dark:text-slate-400 mt-2">
              Through a combination of lectures, readings, and discussions,
              students will gain a solid foundation in educational psychology.
            </p>
            <div className="relative my-5">
              <input
                placeholder="Search here"
                className="py-3 px-4 dark:text-[#abc2d3] bg-white dark:placeholder:text-slate-500 dark:bg-transparent dark:border-slate-700 dark:border w-full outline-none rounded-md"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(false); // Hide results when typing
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
              />
              <button
                className="h-full absolute top-0 right-0 bg-[#0f82fc] px-3 text-white text-[1.3rem] rounded-r-md"
                onClick={handleSearch}
              >
                <CiSearch />
              </button>
            </div>

            {showResults && (
              <div className="mt-4 bg-white dark:bg-slate-800 rounded-md p-4 shadow-lg">
                {searchResults.length > 0 ? (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold dark:text-white">
                      Search Results
                    </h3>
                    {searchResults.map((college) => (
                      <Link href={`/colleges/${college.id}`} key={college.id}>
                        <div
                          className="flex items-center space-x-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md cursor-pointer"
                        >
                          <Image
                            src={college.image}
                            alt={college.name}
                            width={80}
                            height={80}
                            className="rounded-md"
                          />
                          <div>
                            <h4 className="text-md font-medium dark:text-white">
                              {college.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-slate-400">
                              Rating: {college.rating} | Admission: {college.admissionDate}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-slate-400">
                              Research Projects: {college.researchCount}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 dark:text-slate-400">
                    No colleges found matching your search.
                  </p>
                )}
              </div>
            )}

            <div>
              <p>
                Have any questions?{" "}
                <span className="text-[#0f82fc]">Get Free Example</span>
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "98%", label: "Student Satisfaction" },
                { value: "24/7", label: "Support Available" },
                { value: "100+", label: "Colleges" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 bg-[#0f82fc] backdrop-blur-sm rounded-lg"
                >
                  <div className="text-2xl md:text-1xl xl:text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs xl:text-sm text-white/80">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full sm:w-[50%]">
            <Image
              src="/banner-bg.png"
              alt="image"
              width="610"
              height="600"
              className="w-full h-full"
            />
          </div>
        </header>
      </div>
    </div>
  );
}