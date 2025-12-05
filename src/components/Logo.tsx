"use client";

import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      {/* Placeholder for a logo image. You can replace 'logo.png' with your actual logo file. */}
      {/* Ensure your logo is in the public/images/ directory or update the path accordingly. */}
      <img src="/images/logo.png" alt="Linda's Language of Colour Logo" className="h-8 w-auto" />
      <span className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
        Linda's Language of Colour
      </span>
    </Link>
  );
};

export default Logo;