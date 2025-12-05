"use client";

import React from 'react';

const SiteHeader = () => {
  return (
    <header className="w-full overflow-hidden relative">
      <img
        src="/images/header-banner.jpeg"
        alt="Linda's Language of Colour Banner"
        className="w-full h-auto object-cover"
      />
      {/* Subtle dark blue to black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-center justify-center">
        {/* Removed: <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg px-4">
          Practical Protection. Powerful Guidance. Profound Healing.
        </h1> */}
      </div>
    </header>
  );
};

export default SiteHeader;