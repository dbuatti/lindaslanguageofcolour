"use client";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Frown } from "lucide-react"; // Import a relevant icon
import { Button } from "@/components/ui/button"; // Import Button component

const NotFound = () => {
  const location = useLocation();

  // Optional: Log 404 errors for debugging or analytics
  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center bg-background text-foreground py-16 px-4 md:px-8">
      <div className="text-center space-y-8 p-8 bg-card rounded-lg shadow-xl max-w-md w-full">
        <Frown className="h-24 w-24 text-primary mx-auto animate-bounce-slow" /> {/* Animated icon */}
        <h1 className="text-6xl font-serif font-bold mb-4 text-foreground">404</h1>
        <p className="text-2xl text-muted-foreground mb-6 leading-relaxed">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Button asChild size="lg" className="px-8 py-4 text-xl font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;