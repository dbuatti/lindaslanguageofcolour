"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Linda's Language of Colour
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;