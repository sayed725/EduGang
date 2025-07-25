
"use client";

import { useState } from "react";
import { FaStar, FaCalendarAlt, FaBook, FaTrophy } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function CollegeCard({ college }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className=" w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <Image src={college.image} alt={college.name} height={250} width={415} className="w-full h-64 object-cover bg-gray-600 opacity-80 " />
       
        <div className="absolute top-2 right-2 bg-yellow-300 text-gray-800 text-sm font-bold px-2 py-1 rounded flex items-center">
          <FaStar className="mr-1" /> {college.rating}
        </div>
       
      </div>



      

      <div className="p-4 mt-5 ">

        <div className="text-2xl font-bold mb-4 ">{college.name}</div>

        <div className="flex items-center text-black mb-3">
          <FaCalendarAlt className="mr-2 text-green-500" />
          <span>Admission</span>
          <span className="ml-auto text-gray-700">{college.admissionDate}</span>
        </div>


        <div className="flex items-center text-black mb-4">
          <FaBook className="mr-2 text-yellow-400"  />
          <span>Research</span>
          <span className="ml-auto text-gray-700">{college.researchCount} Papers</span>
        </div>


        <div className="mb-4">
          <h4 className="text-black font-semibold">Upcoming Events</h4>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            {college.details.events.slice(0,2).map((event, index) => (
              <li key={index}>{event}</li>
            ))}
          </ul>
        </div>


        <div className="mb-2 space-y-3">
          <h4 className="text-black font-semibold">Sports</h4>
          <div className="flex space-x-2 flex-wrap">
            {college.details.sports.map((sport, index) => (
              <span key={index} className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                <FaTrophy className="mr-1" /> {sport}
              </span>
            ))}
          </div>
        </div>
      <Link href={`/colleges/${college.id}`}>

        <Button
          className="w-full bg-[#0f82fc] rounded-lg hover: hover:bg-[#0f82fc] mt-3 text-white transition duration-300"
        >
          View Details
        </Button>
      </Link>
      </div>
    </div>
  );
}