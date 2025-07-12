import React from 'react'
import CollegeCard from '../collegecard/collegecard'
import { Divide } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function College  ()  {

   const colleges = 
   [
  {
    "id": 1,
    "name": "Stellar University",
    "image": "https://via.placeholder.com/300x200?text=Stellar+University",
    "rating": 4.7,
    "admissionDate": "June 1 - July 31",
    "researchCount": 120,
    "details": {
      "events": [
        "Annual Tech - Aug 20, 2025",
        "Cultural Fest - Sep 10, 2025",
        "Research Expo - Oct 5, 2025"
      ],
      "sports": [
        "Soccer",
        "Basketball",
        "Swimming"
      ]
    }
  },
  {
    "id": 2,
    "name": "Horizon College",
    "image": "https://via.placeholder.com/300x200?text=Horizon+College",
    "rating": 4.5,
    "admissionDate": "June 1 - July 31",
    "researchCount": 95,
    "details": {
      "events": [
        "Science Fair - Aug 25, 2025",
        "Music Festival - Sep 15, 2025",
        "Career Fair - Oct 12, 2025"
      ],
      "sports": [
        "Tennis",
        "Volleyball",
        "Rugby"
      ]
    }
  },
  {
    "id": 3,
    "name": "Luminous Institute",
    "image": "https://via.placeholder.com/300x200?text=Luminous+Institute",
    "rating": 4.8,
    "admissionDate": "August 1 - September 30",
    "researchCount": 150,
    "details": {
      "events": [
        "Art Exhibition - Aug 30, 2025",
        "Tech Hackathon - Sep 18, 2025",
        "Career Fair - Oct 8, 2025"
      ],
      "sports": [
        "Cricket",
        "Badminton",
        "Rugby"
      ]
    }
  },
  {
    "id": 4,
    "name": "Aurora Academy",
    "image": "https://via.placeholder.com/300x200?text=Aurora+Academy",
    "rating": 4.6,
    "admissionDate": "January 1 - January 31",
    "researchCount": 80,
    "details": {
      "events": [
        "Eco Summit - Aug 28, 2025",
        "Drama Festival - Sep 22, 2025",
        "Startup Pitch - Oct 15, 2025"
      ],
      "sports": [
        "Football",
        "Hockey",
        "Cycling"
      ]
    }
  },
  {
    "id": 5,
    "name": "Celestial College",
    "image": "https://via.placeholder.com/300x200?text=Celestial+College",
    "rating": 4.9,
    "admissionDate": "June 1 - July 31",
    "researchCount": 200,
    "details": {
      "events": [
        "Robotics Expo - Sep 5, 2025",
        "Literature Fest - Sep 20, 2025",
        "Health Awareness - Oct 10, 2025"
      ],
      "sports": [
        "Golf",
        "Boxing",
        "Athletics"
      ]
    }
  },
  {
    "id": 6,
    "name": "Nebula University",
    "image": "https://via.placeholder.com/300x200?text=Nebula+University",
    "rating": 4.4,
    "admissionDate": "June 1 - July 31",
    "researchCount": 110,
    "details": {
      "events": [
        "Engineering Conclave - Aug 22, 2025",
        "Dance Competition - Sep 25, 2025",
        "Science Quiz - Oct 18, 2025"
      ],
      "sports": [
        "Table Tennis",
        "Baseball",
        "Synchronized Swimming"
      ]
    }
  },
  {
    "id": 7,
    "name": "Eclipse Academy",
    "image": "https://via.placeholder.com/300x200?text=Eclipse+Academy",
    "rating": 4.3,
    "admissionDate": "February 1 - February 28",
    "researchCount": 90,
    "details": {
      "events": [
        "Film Festival - Aug 15, 2025",
        "Tech Workshop - Sep 5, 2025",
        "Art Showcase - Oct 20, 2025"
      ],
      "sports": [
        "Swimming",
        "Tennis",
        "Volleyball"
      ]
    }
  },
  {
    "id": 8,
    "name": "Radiant Institute",
    "image": "https://via.placeholder.com/300x200?text=Radiant+Institute",
    "rating": 4.6,
    "admissionDate": "March 1 - March 31",
    "researchCount": 130,
    "details": {
      "events": [
        "Science Debate - Aug 18, 2025",
        "Music Concert - Sep 12, 2025",
        "Innovation Summit - Oct 25, 2025"
      ],
      "sports": [
        "Cricket",
        "Football",
        "Badminton"
      ]
    }
  },
  {
    "id": 9,
    "name": "Nova College",
    "image": "https://via.placeholder.com/300x200?text=Nova+College",
    "rating": 4.7,
    "admissionDate": "April 1 - April 30",
    "researchCount": 160,
    "details": {
      "events": [
        "Tech Expo - Aug 22, 2025",
        "Cultural Night - Sep 15, 2025",
        "Research Symposium - Oct 10, 2025"
      ],
      "sports": [
        "Soccer",
        "Basketball",
        "Rugby"
      ]
    }
  },
  {
    "id": 10,
    "name": "Pinnacle University",
    "image": "https://via.placeholder.com/300x200?text=Pinnacle+University",
    "rating": 4.8,
    "admissionDate": "May 1 - May 31",
    "researchCount": 140,
    "details": {
      "events": [
        "Art Festival - Aug 28, 2025",
        "Tech Hackathon - Sep 20, 2025",
        "Career Expo - Oct 15, 2025"
      ],
      "sports": [
        "Golf",
        "Boxing",
        "Athletics"
      ]
    }
  },
  {
    "id": 11,
    "name": "Zenith Academy",
    "image": "https://via.placeholder.com/300x200?text=Zenith+Academy",
    "rating": 4.5,
    "admissionDate": "July 1 - July 31",
    "researchCount": 100,
    "details": {
      "events": [
        "Eco Fair - Aug 30, 2025",
        "Drama Play - Sep 18, 2025",
        "Startup Bootcamp - Oct 12, 2025"
      ],
      "sports": [
        "Football",
        "Hockey",
        "Cycling"
      ]
    }
  },
  {
    "id": 12,
    "name": "Cosmic Institute",
    "image": "https://via.placeholder.com/300x200?text=Cosmic+Institute",
    "rating": 4.6,
    "admissionDate": "August 1 - September 30",
    "researchCount": 170,
    "details": {
      "events": [
        "Robotics Challenge - Aug 25, 2025",
        "Literature Day - Sep 10, 2025",
        "Health Seminar - Oct 18, 2025"
      ],
      "sports": [
        "Table Tennis",
        "Baseball",
        "Swimming"
      ]
    }
  }
]
  return (
 <div className='w-11/12 mx-auto mb-10'>

    <div>
        <h2 className='text-black text-5xl text-center py-10 tracking-wider font-semibold'>Explore Our Latest <span className='text-[#0f82fc]'>Colleges</span></h2>
    </div>







      <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
    {colleges.slice(0,3).map((college) => (
      <CollegeCard key={college.id} college={college} />
    ))}
  </div>

  <Link href="/colleges" className='text-center flex justify-center mt-2'>
    <Button className="p-5 bg-[#0f82fc] text-white hover:bg-[#0f82fc]">
        View All Colleges
    </Button>
  </Link>
 </div>
  )
}
