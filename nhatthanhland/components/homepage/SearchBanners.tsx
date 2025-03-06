"use client";

import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    label: "Buy",
    heading: "Find the right home at the right price",
    placeholder: "City, Address, School, Agent, ZIP",
  },
  {
    label: "Rent",
    heading: "Local rentals at your fingertips",
    placeholder: "City, Address, School, Building, ZIP",
  },
  {
    label: "Sell",
    heading: "Sell your home with confidence",
    placeholder: "Enter your home address",
  },
  {
    label: "Mortgage",
    heading: "Find the best mortgage rates",
    placeholder: "Enter city or ZIP code",
  },
  {
    label: "My Home Value",
    heading: "Get your home’s value estimate",
    placeholder: "Enter your home address",
  },
];

export default function SearchBanner() {
  const [activeTab, setActiveTab] = useState("Buy");

  const activeTabData = tabs.find((tab) => tab.label === activeTab);

  return (
    <div className="relative w-full bg-cover bg-center text-white p-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 h-full">
        <Image
          src="/images/search-banner.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Search Banner"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Dynamic Heading */}
        <h1 className="text-3xl font-bold">{activeTabData?.heading}</h1>

        {/* Tabs */}
        <div className="mt-4 flex justify-center space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-4 py-2 rounded-md border ${
                activeTab === tab.label
                  ? "bg-white text-black font-semibold"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="mt-4 flex items-center bg-white rounded-lg p-2 shadow-lg">
          <input
            type="text"
            placeholder={activeTabData?.placeholder}
            className="flex-1 p-2 text-gray-800 outline-none"
          />
          <button className="p-3 bg-red-600 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
