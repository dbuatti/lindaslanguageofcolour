"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground p-4 text-center mt-8">
      <div className="container mx-auto">
        <p className="text-sm">&copy; {new Date().getFullYear()} Linda's Language of Colour. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;