"use client";

import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Offerings", href: "/offerings" }, // Placeholder route
  { name: "About Linda", href: "/about" }, // Placeholder route
  { name: "Contact", href: "/contact" }, // Placeholder route
];

const SiteHeader = () => {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo/Site Title - Removed text */}
        <Link to="/" className="flex items-center space-x-2 font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
          {/* Linda's Language of Colour */}
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Button key={link.name} variant="ghost" asChild className="text-lg font-medium text-foreground hover:text-primary">
                <Link to={link.href}>{link.name}</Link>
              </Button>
            ))}
          </nav>
        )}

        {/* Mobile Navigation */}
        {isMobile && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
              <Link to="/" className="flex items-center space-x-2 font-serif text-2xl font-bold text-foreground mb-8">
                {/* Linda's Language of Colour */}
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Button key={link.name} variant="ghost" asChild className="justify-start text-xl font-medium text-foreground hover:text-primary">
                    <Link to={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;