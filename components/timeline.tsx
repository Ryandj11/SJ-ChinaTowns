"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define an interface for timeline event objects
interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

// Simplified timeline events focusing on Chinatowns and Chinese Exclusion Act
const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "1866",
    title: "First Market Street Chinatown",
    description:
      "The first Chinatown in San Jose is established near Market Street.",
  },
  {
    id: 2,
    year: "1870",
    title: "First Chinatown Burns",
    description: "The first Market Street Chinatown is destroyed by arson.",
  },
  {
    id: 3,
    year: "1870",
    title: "Vine Street Chinatown",
    description: "A new Chinatown is established on Vine Street.",
  },
  {
    id: 4,
    year: "1872",
    title: "Vine Street Chinatown Burns",
    description: "The Vine Street Chinatown is destroyed by fire.",
  },
  {
    id: 5,
    year: "1872",
    title: "Two New Chinatowns",
    description:
      "The Woolen Mills Chinatown and Second Market Street Chinatown are established.",
  },
  {
    id: 6,
    year: "1882",
    title: "Chinese Exclusion Act",
    description:
      "The Chinese Exclusion Act is passed, prohibiting Chinese immigration to the United States.",
  },
  {
    id: 7,
    year: "1887",
    title: "Chinatowns Destroyed",
    description:
      "Both the Woolen Mills and Second Market Street Chinatowns are destroyed by arson.",
  },
  {
    id: 8,
    year: "1887",
    title: "Heinlenville Founded",
    description:
      "John Heinlen leases land to displaced Chinese residents, establishing Heinlenville, the last of San Jose's Chinatowns.",
  },
  {
    id: 9,
    year: "1892",
    title: "Geary Act",
    description:
      "The Geary Act extends the Chinese Exclusion Act for another 10 years and requires Chinese residents to carry identification.",
  },
  {
    id: 10,
    year: "1931",
    title: "End of Heinlenville",
    description:
      "Heinlenville declines during the Great Depression and is eventually demolished.",
  },
  {
    id: 11,
    year: "1943",
    title: "Exclusion Act Repealed",
    description:
      "The Chinese Exclusion Act is repealed, but strict quotas remain.",
  },
];

// Define an interface for the styling properties
interface EventStyling {
  circleBgColor: string; // Hex color for background
  cardBorderClass: string; // Tailwind CSS class for border
}

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;

      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }

      setScrollPosition(current.scrollLeft);
    }
  };

  // Get styling based on event type
  const getEventStyling = (event: TimelineEvent): EventStyling => {
    let cardBorderClass = "border-gray-300"; // Default border for the card

    if (
      event.title.includes("Founded") ||
      event.title.includes("Established") ||
      (event.title.includes("Chinatown") &&
        !event.title.includes("Burns") &&
        !event.title.includes("Destroyed") &&
        !event.title.includes("End"))
    ) {
      cardBorderClass = "border-green-600";
    } else if (
      event.title.includes("Burns") ||
      event.title.includes("Destroyed") ||
      event.title.includes("End")
    ) {
      cardBorderClass = "border-red-600";
    } else if (
      event.title.includes("Exclusion") ||
      event.title.includes("Act")
    ) {
      cardBorderClass = "border-yellow-500";
    } else {
      cardBorderClass = "border-blue-600"; // Default card border if no specific category matches
    }
    return { circleBgColor: "#ffffff", cardBorderClass }; // Circle background is always white
  };

  return (
    <div className="relative w-full">
      {/* Navigation buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Timeline container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide py-8 px-10"
      >
        <div className="relative flex min-w-max">
          {/* Horizontal line - Adjusted to top-7 for better alignment with h-14 markers */}
          <div className="absolute top-7 left-0 right-0 h-1 bg-gray-300" />

          {/* Timeline events */}
          <div className="flex space-x-16">
            {timelineEvents.map((event) => {
              const styling = getEventStyling(event);
              return (
                <div
                  key={event.id}
                  className="relative flex flex-col items-center w-48"
                >
                  {/* Year marker - using rounded-full for circle shape */}
                  <div
                    className="z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
                    style={{
                      backgroundColor: styling.circleBgColor,
                      color: "black",
                      border: "4px solid white",
                    }}
                  >
                    <span className="font-bold text-lg">{event.year}</span>
                  </div>

                  {/* Event content */}
                  <div
                    className={`mt-4 bg-white p-4 rounded-lg shadow-md border-l-4 ${styling.cardBorderClass}`}
                  >
                    <h3 className="font-bold text-md mb-2 font-serif">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
