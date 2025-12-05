"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"; // Social media icons

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 py-8 text-foreground">
      <div className="container flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="text-center text-sm md:text-left space-y-2">
          <p>&copy; {currentYear} Linda's Language of Colour. All rights reserved.</p>
          <p className="text-muted-foreground italic">"Guiding your journey to inner harmony."</p>
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

        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="text-foreground hover:text-primary transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-foreground hover:text-primary transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" aria-label="YouTube" className="text-foreground hover:text-primary transition-colors">
            <Youtube className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;