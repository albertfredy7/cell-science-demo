"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type React from "react";

interface TeamMember {
  id: string;
  url: string;
  name: string; // Store the team member's name
  title: string; // Primary role
  description: string; // Detailed description
}

interface TeamsAccordionProps {
  items: TeamMember[];
  className?: string;
}

export const TeamsAccordion: React.FC<TeamsAccordionProps> = ({ items, className = "" }) => {
  return (
    <>
      {/* Desktop/Tablet Accordion View */}
      <div className={`group hidden md:flex max-md:flex-col justify-center gap-4 w-[90%] mx-auto mb-12 mt-6 ${className}`}>
        {items.map((item) => (
          <article
            key={`desktop-${item.id}`}
            className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[18%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[18%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30  after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300 shadow-lg hover:shadow-xl"
          >
            <div
              className="absolute inset-0 text-white z-10 p-5 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent"  
            >
              <h2 className="text-3xl sm:text-4xl font-normal text-white md:whitespace-normal md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                {item.name}
              </h2>
              <h3 className="text-xl sm:text-2xl font-light text-muted-white md:whitespace-normal md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                {item.title}
              </h3>
              <span className="text-lg sm:text-xl font-light text-muted-white md:whitespace-normal md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-700 group-focus-within/article:delay-700">
                {item.description}
              </span>
             
            </div>
            <Image
              className="object-cover h-80 md:h-[450px] w-full"
              src={item.url || "/placeholder.svg"}
              width={960}
              height={480}
              alt={`${item.name} - ${item.title}`}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4="
            />
          </article>
        ))}
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mx-auto">
        {items.map((item) => (
          <Card key={`mobile-${item.id}`} className="bg-card rounded-xl overflow-hidden shadow-none duration-200">
            <div className="relative w-full aspect-square">
              <Image
                className="object-cover"
                src={item.url || "/placeholder.svg"}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                alt={`${item.name} - ${item.title}`}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmMWYxZjEiLz48L3N2Zz4="
              />
            </div>
            <CardContent className="p-3">
              <CardTitle className="text-2xl sm:text-3xl font-normal text-gray-900">{item.name}</CardTitle>
              <div className="text-lg sm:text-xl font-light text-gray-700 mb-1">{item.title}</div>
              <CardDescription className="text-base sm:text-lg font-light text-gray-600 mb-1">{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TeamsAccordion;