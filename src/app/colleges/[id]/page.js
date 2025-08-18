

import {
  GiBasketballBall,
  GiCricketBat,
  GiRugbyConversion,
  GiSoccerBall,
  GiTennisRacket,
} from "react-icons/gi";
import { MdRowing } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CalendarDays,
  ClipboardList,
  Dumbbell,
  ExternalLink,
  FileText,
  FlaskConical,
  Sparkles,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { FaSwimmer, FaTableTennis } from "react-icons/fa";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageHeader from "@/components/shared/pageheader";

const colleges = [
  {
    id: 1,
    name: "Stellar University",
    image: "/random-college1.jpg",
    rating: 4.7,
    admissionDates: "June 1 - July 31",
    researchCount: 120,
    events: [
      "Annual Tech - Aug 20, 2025",
      "Cultural Fest - Sep 10, 2025",
      "Research Expo - Oct 5, 2025",
    ],
    researchHistory: [
      { title: "AI in Healthcare", link: "#" },
      { title: "Quantum Computing", link: "#" },
    ],
    sports: ["Soccer", "Basketball", "Swimming"],
    details: {
      description: "A leading institution fostering innovation and excellence.",
      admissionProcess: "Submit online application with transcripts and essays.",
      eventsDetails: "Engage in vibrant campus events throughout the year.",
      researchWorks: "Cutting-edge research in various fields.",
      sportsCategories: "Competitive sports programs for all students.",
    },
  },
  {
    id: 2,
    name: "Horizon College",
    image: "/random-college2.jpg",
    rating: 4.5,
    admissionDates: "June 1 - July 31",
    researchCount: 95,
    events: [
      "Science Fair - Aug 25, 2025",
      "Music Festival - Sep 15, 2025",
      "Career Fair - Oct 12, 2025",
    ],
    researchHistory: [
      { title: "Renewable Energy Solutions", link: "#" },
      { title: "Data Science Trends", link: "#" },
    ],
    sports: ["Tennis", "Volleyball", "Rugby"],
    details: {
      description: "A dynamic college with a focus on holistic education.",
      admissionProcess: "Apply online with test scores and recommendations.",
      eventsDetails: "Exciting events to enhance student life.",
      researchWorks: "Innovative projects in science and technology.",
      sportsCategories: "Diverse athletic opportunities for all.",
    },
  },
  {
    id: 3,
    name: "Luminous Institute",
    image: "/random-college3.jpg",
    rating: 4.8,
    admissionDates: "August 1 - September 30",
    researchCount: 150,
    events: [
      "Art Exhibition - Aug 30, 2025",
      "Tech Hackathon - Sep 18, 2025",
      "Career Fair - Oct 8, 2025",
    ],
    researchHistory: [
      { title: "Biomedical Engineering", link: "#" },
      { title: "Climate Change Studies", link: "#" },
    ],
    sports: ["Cricket", "Badminton", "Rugby"],
    details: {
      description: "A premier institute for academic and research excellence.",
      admissionProcess: "Complete application with portfolio and interview.",
      eventsDetails: "Rich cultural and technical events for students.",
      researchWorks: "Leading research in engineering and environmental sciences.",
      sportsCategories: "Wide range of sports to promote fitness.",
    },
  },
  {
    id: 4,
    name: "Aurora Academy",
    image: "/random-college4.jpg",
    rating: 4.6,
    admissionDates: "January 1 - January 31",
    researchCount: 80,
    events: [
      "Eco Summit - Aug 28, 2025",
      "Drama Festival - Sep 22, 2025",
      "Startup Pitch - Oct 15, 2025",
    ],
    researchHistory: [
      { title: "Sustainable Architecture", link: "#" },
      { title: "Social Impact Studies", link: "#" },
    ],
    sports: ["Football", "Hockey", "Cycling"],
    details: {
      description: "An academy dedicated to creativity and innovation.",
      admissionProcess: "Online application with creative portfolio.",
      eventsDetails: "Diverse events fostering creativity and entrepreneurship.",
      researchWorks: "Focus on sustainability and social sciences.",
      sportsCategories: "Active sports programs for student engagement.",
    },
  },
  {
    id: 5,
    name: "Celestial College",
    image: "/random-college5.jpeg",
    rating: 4.9,
    admissionDates: "June 1 - July 31",
    researchCount: 200,
    events: [
      "Robotics Expo - Sep 5, 2025",
      "Literature Fest - Sep 20, 2025",
      "Health Awareness - Oct 10, 2025",
    ],
    researchHistory: [
      { title: "Robotics Advancements", link: "#" },
      { title: "Medical Research", link: "#" },
    ],
    sports: ["Golf", "Boxing", "Athletics"],
    details: {
      description: "A top-tier college for cutting-edge education.",
      admissionProcess: "Apply with academic records and personal statement.",
      eventsDetails: "Innovative and educational campus events.",
      researchWorks: "Pioneering research in robotics and health.",
      sportsCategories: "Elite sports programs for enthusiasts.",
    },
  },
  {
    id: 6,
    name: "Nebula University",
    image: "/random-college6.avif",
    rating: 4.4,
    admissionDates: "June 1 - July 31",
    researchCount: 110,
    events: [
      "Engineering Conclave - Aug 22, 2025",
      "Dance Competition - Sep 25, 2025",
      "Science Quiz - Oct 18, 2025",
    ],
    researchHistory: [
      { title: "Aerospace Engineering", link: "#" },
      { title: "Material Science", link: "#" },
    ],
    sports: ["Table Tennis", "Baseball", "Swimming"],
    details: {
      description: "A university fostering engineering and arts.",
      admissionProcess: "Submit application with engineering portfolio.",
      eventsDetails: "Engaging events for technical and creative minds.",
      researchWorks: "Advanced research in engineering fields.",
      sportsCategories: "Competitive sports for all students.",
    },
  },
  {
    id: 7,
    name: "Eclipse Academy",
    image: "/random-college1.jpg",
    rating: 4.3,
    admissionDates: "February 1 - February 28",
    researchCount: 90,
    events: [
      "Film Festival - Aug 15, 2025",
      "Tech Workshop - Sep 5, 2025",
      "Art Showcase - Oct 20, 2025",
    ],
    researchHistory: [
      { title: "Film Technology", link: "#" },
      { title: "Digital Arts", link: "#" },
    ],
    sports: ["Swimming", "Tennis", "Volleyball"],
    details: {
      description: "An academy for creative and technical arts.",
      admissionProcess: "Apply with creative work samples.",
      eventsDetails: "Vibrant arts and technology events.",
      researchWorks: "Research in media and arts technology.",
      sportsCategories: "Recreational sports for all.",
    },
  },
  {
    id: 8,
    name: "Radiant Institute",
    image: "/random-college2.jpg",
    rating: 4.6,
    admissionDates: "March 1 - March 31",
    researchCount: 130,
    events: [
      "Science Debate - Aug 18, 2025",
      "Music Concert - Sep 12, 2025",
      "Innovation Summit - Oct 25, 2025",
    ],
    researchHistory: [
      { title: "Physics Innovations", link: "#" },
      { title: "Music Technology", link: "#" },
    ],
    sports: ["Cricket", "Football", "Badminton"],
    details: {
      description: "An institute for science and cultural excellence.",
      admissionProcess: "Apply with academic and extracurricular records.",
      eventsDetails: "Dynamic events for science and arts lovers.",
      researchWorks: "Innovative research in physics and music.",
      sportsCategories: "Active sports programs for students.",
    },
  },
  {
    id: 9,
    name: "Nova College",
    image: "/random-college3.jpg",
    rating: 4.7,
    admissionDates: "April 1 - April 30",
    researchCount: 160,
    events: [
      "Tech Expo - Aug 22, 2025",
      "Cultural Night - Sep 15, 2025",
      "Research Symposium - Oct 10, 2025",
    ],
    researchHistory: [
      { title: "AI Applications", link: "#" },
      { title: "Cultural Studies", link: "#" },
    ],
    sports: ["Soccer", "Basketball", "Rugby"],
    details: {
      description: "A college for technology and cultural studies.",
      admissionProcess: "Submit application with tech portfolio.",
      eventsDetails: "Exciting tech and cultural events.",
      researchWorks: "Research in AI and cultural sciences.",
      sportsCategories: "Competitive sports for enthusiasts.",
    },
  },
  {
    id: 10,
    name: "Pinnacle University",
    image: "/random-college4.jpg",
    rating: 4.8,
    admissionDates: "May 1 - May 31",
    researchCount: 140,
    events: [
      "Art Festival - Aug 28, 2025",
      "Tech Hackathon - Sep 20, 2025",
      "Career Expo - Oct 15, 2025",
    ],
    researchHistory: [
      { title: "Art Technology", link: "#" },
      { title: "Career Development", link: "#" },
    ],
    sports: ["Golf", "Boxing", "Athletics"],
    details: {
      description: "A university for arts and career growth.",
      admissionProcess: "Apply with art portfolio and career goals.",
      eventsDetails: "Events for artistic and professional development.",
      researchWorks: "Research in art tech and career studies.",
      sportsCategories: "Elite sports programs.",
    },
  },
  {
    id: 11,
    name: "Zenith Academy",
    image: "/random-college5.jpeg",
    rating: 4.5,
    admissionDates: "July 1 - July 31",
    researchCount: 100,
    events: [
      "Eco Fair - Aug 30, 2025",
      "Drama Play - Sep 18, 2025",
      "Startup Bootcamp - Oct 12, 2025",
    ],
    researchHistory: [
      { title: "Environmental Studies", link: "#" },
      { title: "Entrepreneurship", link: "#" },
    ],
    sports: ["Football", "Hockey", "Cycling"],
    details: {
      description: "An academy for environmental and entrepreneurial studies.",
      admissionProcess: "Apply with sustainability project ideas.",
      eventsDetails: "Events for eco-conscious and startup enthusiasts.",
      researchWorks: "Research in environmental and business fields.",
      sportsCategories: "Active sports for all students.",
    },
  },
  {
    id: 12,
    name: "Cosmic Institute",
    image: "/random-college6.avif",
    rating: 4.6,
    admissionDates: "August 1 - September 30",
    researchCount: 170,
    events: [
      "Robotics Challenge - Aug 25, 2025",
      "Literature Day - Sep 10, 2025",
      "Health Seminar - Oct 18, 2025",
    ],
    researchHistory: [
      { title: "Robotics Innovation", link: "#" },
      { title: "Health Sciences", link: "#" },
    ],
    sports: ["Table Tennis", "Baseball", "Swimming"],
    details: {
      description: "An institute for robotics and health sciences.",
      admissionProcess: "Apply with robotics or health project proposals.",
      eventsDetails: "Innovative events in tech and health.",
      researchWorks: "Leading research in robotics and health.",
      sportsCategories: "Competitive sports programs.",
    },
  },
];

export default async function Details({ params }) {
  const { id } = await params;
  const college = colleges.find((c) => c.id === parseInt(id));

  if (!college) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800">College Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">Sorry, we couldnot find a college with ID {id}.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-11/12 mx-auto bg-[#f5f5f5] py-5">

        <PageHeader title="College Details"/>



      <div className="max-w-7xl mx-auto py-6">
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="text-center">
            <div className="w-full">
              <div className="group">
                <Image
                  src={college.image || "/placeholder.svg"}
                  alt={`${college.name} campus view`}
                  height={500}
                  width={1024}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-black mt-10">{college.name}</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-5">{college.details.description}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-[#0f82fc] text-white rounded-full px-4 py-1.5 shadow-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{college.rating} Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-[#0f82fc] text-white rounded-full px-4 py-1.5 shadow-sm">
                <BookOpen className="w-4 h-4" />
                <span>{college.researchCount} Research Projects</span>
              </div>
            </div>
          </div>

          {/* Admission Section */}
          <Card className="border-blue-100 transition-shadow duration-300 mt-10 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-800">Admission Information</CardTitle>
              <CardDescription className="text-gray-600">{college.details.admissionProcess}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-gray-50 rounded-md p-5 border-2 border-gray-800 text-left">
                <h3 className="font-semibold text-blue-800 text-lg flex items-center gap-2">
                  <CalendarDays className="w-5 h-5 text-[#0f82fc]" />
                  Admission Dates: <span className="font-medium">{college.admissionDates}</span>
                </h3>
              </div>
              <div className="bg-gray-50 rounded-md p-5 border-2 border-gray-800 text-left">
                <h3 className="font-semibold text-blue-800 text-lg flex items-center gap-2">
                  <ClipboardList className="w-5 h-5 text-[#0f82fc]" />
                  Application Process: <span className="font-medium">{college.details.admissionProcess}</span>
                </h3>
              </div>
              <Link href="/admission">
                <Button className="bg-[#0f82fc] hover:bg-[#0f82fc] text-white px-6 py-2 rounded-full transition-transform duration-300 hover:scale-105">
                  Get Admission
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Events Section */}
          <Card className="border-blue-100 transition-shadow mt-10 duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center justify-center gap-3">
                <div className="p-2 bg-[#0f82fc] text-white rounded-lg">
                  <Users className="w-4 h-4" />
                </div>
                Events & Activities
              </CardTitle>
              <CardDescription className="text-gray-600 text-base max-w-2xl mx-auto">{college.details.eventsDetails}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {college.events.map((event, index) => (
                <div
                  key={index}
                  className={`bg-gray-50 rounded-lg p-5 ${
                    index % 2 === 0 ? " border-2 border-gray-800" : "border-2 border-gray-800"
                  } text-left transition-transform duration-300 hover:translate-x-1`}
                >
                  <p className="font-medium flex items-center gap-2">
                    <Sparkles className={`w-5 h-5 ${index % 2 === 0 ? "text-orange-500" : "text-blue-500"}`} />
                    {event}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Research Section */}
          <Card className="border-blue-100 transition-shadow mt-10 duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold flex items-center justify-center gap-3">
                <div className="p-2 bg-[#0f82fc] text-white rounded-lg">
                  <FlaskConical className="w-4 h-4" />
                </div>
                Research Works
              </CardTitle>
              <CardDescription className="text-gray-600 text-base max-w-2xl mx-auto">{college.details.researchWorks}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {college.researchHistory.map((research, index) => (
                <a
                  key={index}
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 rounded-lg p-5 border border-gray-200 text-left transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-blue-800 font-medium flex items-center gap-2">
                      <FileText className="w-5 h-5 text-blue-500" />
                      {research.title}
                    </p>
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Sports Section */}
          <Card className="border-blue-100 transition-shadow mt-10 duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold  flex items-center justify-center gap-3">
                <div className="p-2 bg-[#0f82fc] text-white rounded-lg">
                  <Trophy className="w-4 h-4" />
                </div>
                Sports & Recreation
              </CardTitle>
              <CardDescription className="text-gray-600 text-base max-w-2xl mx-auto">{college.details.sportsCategories}</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {college.sports.map((sport, index) => {
                let SportIcon;
                switch (sport.toLowerCase()) {
                  case "cricket":
                    SportIcon = GiCricketBat;
                    break;
                  case "football":
                  case "soccer":
                    SportIcon = GiSoccerBall;
                    break;
                  case "badminton":
                    SportIcon = FaTableTennis;
                    break;
                  case "basketball":
                    SportIcon = GiBasketballBall;
                    break;
                  case "tennis":
                    SportIcon = GiTennisRacket;
                    break;
                  case "swimming":
                    SportIcon = FaSwimmer;
                    break;
                  case "rugby":
                    SportIcon = GiRugbyConversion;
                    break;
                  case "rowing":
                    SportIcon = MdRowing;
                    break;
                  default:
                    SportIcon = Dumbbell;
                }
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 border border-gray-200 flex items-center gap-2 justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <SportIcon className="w-6 h-6 text-blue-600" />
                    <p className="text-blue-800 font-medium">{sport}</p>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}