"use client";

import { TeamsAccordion } from "../components/TeamsAccordion";

const teamMembers = [
  {
    id: "1",
    url: "/team/sample.png", // Placeholder URL
    name: "Ani B",
    title: "CEO & Founder",
    description: "",

  },
  {
    id: "2",
    url: "/team/sample2.png", // Placeholder URL
    name: "Anupama Thampy",
    title: "Director",
    description: "",
  },
  {
    id: "3",
    url: "/team/cherianThomas.png", // Placeholder URL
    name: "Cherian Thomas",
    title: "Tech Advisor and Mentor",
    description: "CEO at impending Inc. San Francisco, California, United States",
  },
  {
    id: "4",
    url: "/team/claus-anderson.png", // Placeholder URL
    name: "Claus Anderson",
    title: "Medical Director",
    description: "Leading IVM & Egg freezing Researcher",
  },
  {
    id: "5",
    url: "/team/soni-deshwal.png", // Placeholder URL
    name: "Soni Deshwal",
    title: "Research & Scientific Advisor",
    description: "Group leader at Helmholtz Munich & TUM. Fellow at larger lab. Primary Researcher on mitochondrial Ferroptosis Cell death",
  },
  {
    id: "6",
    url: "/team/guillermo-lopez-lluch.png", // Placeholder URL
    name: "Guillermo Lopez Lluch",
    title: "Professor of Cell Biology",
    description: "Universidad Pablo de Olavide, Sevilla, Spain . President International CoQ10 Association",
  },
];

export default function Team() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl sm:text-2xl md:text-2xl font-light text-gray-700 max-w-3xl mx-auto">
            CellScience Biotech Inc. collaborate with Scientists, institutions,
            academic organisations, reproductive specialist, experts and
            Tech leaders who believe to make a difference in women's
            health and reproductive science.
          </p>
        </div>

        <TeamsAccordion items={teamMembers} className="max-w-6xl" />
      </div>
    </section>
  );
}