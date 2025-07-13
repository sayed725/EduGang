"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaBookOpen } from "react-icons/fa";

const researchPapers = [
  {
    id: 1,
    title: "Machine Learning Approaches for Predictive Analytics in Finance",
    authors: "Dr. Laura Thompson, Prof. David Lee",
    college: "MIT",
    year: "2025",
    category: "Finance",
    abstract:
      "This paper explores advanced machine learning techniques for predicting financial market trends, focusing on neural networks and ensemble methods.",
    link: "https://example.com/finance-research",
    downloads: 890,
  },
  {
    id: 2,
    title: "Urban Green Spaces and Mental Health Outcomes",
    authors: "Dr. Priya Sharma, Dr. John Evans",
    college: "Yale University",
    year: "2024",
    category: "Psychology",
    abstract:
      "An investigation into how urban green spaces influence mental health, with emphasis on stress reduction and community well-being.",
    link: "https://example.com/psychology-research",
    downloads: 1100,
  },
  {
    id: 3,
    title: "Advancements in CRISPR Gene Editing for Rare Diseases",
    authors: "Prof. Anna Kowalski, Dr. Mark Patel",
    college: "Cambridge University",
    year: "2025",
    category: "Biotechnology",
    abstract:
      "This study reviews recent breakthroughs in CRISPR technology for treating rare genetic disorders, including case studies and ethical considerations.",
    link: "https://example.com/biotech-research",
    downloads: 670,
  },
];

export default function Research() {
  return (
  <div className="w-11/12 mx-auto">
      <section className="max-w-7xl mx-auto  mb-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Top <span className="text-[#0f82fc]">Research</span> Papers
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore cutting-edge research from leading institutions across various fields.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {researchPapers.map((paper) => (
          <Card
            key={paper.id}
            className="flex flex-col h-full border border-gray-200 rounded-md shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <CardHeader className="pb-2">
              <Badge className="mb-4 bg-indigo-100 text-[#0f82fc] font-medium">
                {paper.category}
              </Badge>
              <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                {paper.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2">{paper.authors}</p>
              <p className="text-sm font-medium text-[#0f82fc]">
                {paper.college} • {paper.year}
              </p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {paper.abstract}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="flex items-center gap-2 text-sm text-gray-500">
                  <FaBookOpen className="w-4 h-4" />
                  {paper.downloads} downloads
                </span>
                <Button
                  size="sm"
                  className="bg-[#0f82fc] hover:bg-[#0f82fc] text-white font-medium rounded-lg transition-colors duration-200"
                  onClick={() => window.open(paper.link, "_blank")}
                >
                  Read Paper
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  </div>
  );
}