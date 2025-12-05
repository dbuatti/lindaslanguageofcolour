"use client";

import React from "react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 py-8 text-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-8">
        <div className="text-center text-sm md:text-left">
          &copy; {currentYear} Linda's Language of Colour. All rights reserved.
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <Link to="/privacy" className="hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary transition-colors">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact Us
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;