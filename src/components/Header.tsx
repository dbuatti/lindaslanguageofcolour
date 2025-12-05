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
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Home
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Services
              </Button>
            </li>
            <li>
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10">
                Contact
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;