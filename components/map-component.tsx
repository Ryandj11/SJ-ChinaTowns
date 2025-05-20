"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for Leaflet marker icons in Next.js
const fixLeafletIcon = () => {
  // @ts-ignore
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });
};

// Custom icon for Chinatown markers
const createChinatownIcon = (color: string) => {
  return new L.Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
};

// Chinatown data
const chinatowns: Array<{
  id: number;
  name: string;
  years: string;
  location: [number, number];
  description: string;
  destruction: string;
  currentSite: string;
  color: string;
  radius: number;
  population: string;
  businesses: string;
  significance: string;
}> = [
  {
    id: 1,
    name: "First Market Street Chinatown",
    years: "1866-1870",
    location: [37.338, -121.894],
    description:
      "The first Chinatown in San Jose was established near Market Street. It was destroyed by arson in 1870.",
    destruction: "Arson",
    currentSite:
      "Now part of downtown San Jose near the San Jose Museum of Art.",
    color: "red",
    radius: 200,
    population: "~500 residents",
    businesses: "General stores, laundries, restaurants, temples",
    significance: "First established Chinese community in San Jose",
  },
  {
    id: 2,
    name: "Vine Street Chinatown",
    years: "1870-1872",
    location: [37.34, -121.896],
    description:
      "After the destruction of the first Chinatown, a new one was established on Vine Street. It was also destroyed by fire.",
    destruction: "Fire",
    currentSite: "Now part of downtown San Jose near St. James Park.",
    color: "orange",
    radius: 180,
    population: "~400 residents",
    businesses: "Grocery stores, herbalists, boarding houses",
    significance: "Established after the destruction of the first Chinatown",
  },
  {
    id: 3,
    name: "Woolen Mills Chinatown",
    years: "1872-1887",
    location: [37.342, -121.899],
    description:
      "This Chinatown was established near the woolen mills where many Chinese immigrants worked. It was destroyed by arson in 1887.",
    destruction: "Arson",
    currentSite: "Now near the Guadalupe River Park.",
    color: "green",
    radius: 220,
    population: "~300 residents",
    businesses: "Textile shops, worker housing, small markets",
    significance: "Located near employment center for Chinese workers",
  },
  {
    id: 4,
    name: "Second Market Street Chinatown",
    years: "1872-1887",
    location: [37.336, -121.892],
    description:
      "This was the largest of San Jose's Chinatowns, with a population of over 1,000. It was deliberately burned down in 1887.",
    destruction: "Arson",
    currentSite:
      "Now the site of the Fairmont Hotel and part of downtown San Jose.",
    color: "blue",
    radius: 300,
    population: "Over 1,000 residents",
    businesses: "Theaters, temples, merchants, restaurants, gambling houses",
    significance:
      "Largest and most economically significant of San Jose's Chinatowns",
  },
  {
    id: 5,
    name: "Heinlenville",
    years: "1887-1931",
    location: [37.345, -121.897],
    description:
      "The last of San Jose's Chinatowns, named after John Heinlen who leased the land to Chinese residents. It survived until the Great Depression.",
    destruction: "Economic decline and urban renewal",
    currentSite: "Now part of Japantown in San Jose.",
    color: "gold",
    radius: 250,
    population: "~1,000 residents at peak",
    businesses: "Temple, school, stores, professional services",
    significance:
      "Longest-lasting Chinatown, established with help from a German businessman",
  },
];

export function MapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    fixLeafletIcon();
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center">
          <svg
            className="animate-spin h-8 w-8 text-chinese-red mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <p className="text-chinese-red font-medium">
            Loading historical map...
          </p>
        </div>
      </div>
    );
  }

  const getCircleColor = (color: string) => {
    const colorMap: Record<string, string> = {
      red: "#B91C1C",
      orange: "#D97706",
      green: "#059669",
      blue: "#2563EB",
      gold: "#D97706",
    };
    return colorMap[color] || "#B91C1C";
  };

  return (
    <MapContainer
      center={[37.34, -121.895]}
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {chinatowns.map((chinatown) => (
        <div key={chinatown.id}>
          <Circle
            center={chinatown.location}
            radius={chinatown.radius}
            pathOptions={{
              fillColor: getCircleColor(chinatown.color),
              fillOpacity: 0.2,
              color: getCircleColor(chinatown.color),
              weight: 1,
            }}
          />
          <Marker
            position={chinatown.location}
            icon={createChinatownIcon(chinatown.color)}
          >
            <Popup className="chinatown-popup">
              <div className="p-1">
                <div
                  className="border-b-2 pb-2 mb-2"
                  style={{ borderColor: getCircleColor(chinatown.color) }}
                >
                  <h3 className="font-bold text-lg font-serif">
                    {chinatown.name}
                  </h3>
                  <p className="text-sm text-gray-600">{chinatown.years}</p>
                </div>
                <p className="my-2">{chinatown.description}</p>
                <div className="grid grid-cols-2 gap-2 mt-3 text-sm">
                  <div>
                    <p className="font-bold text-xs text-gray-500">
                      POPULATION
                    </p>
                    <p>{chinatown.population}</p>
                  </div>
                  <div>
                    <p className="font-bold text-xs text-gray-500">
                      DESTRUCTION
                    </p>
                    <p>{chinatown.destruction}</p>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-200">
                  <p className="text-sm">
                    <strong>Current Site:</strong> {chinatown.currentSite}
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  );
}
