"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Heart, MessageSquare, Gem } from 'lucide-react'; // Example icons

interface OfferingCardProps {
  title: string;
  description: string;
  icon: React.ElementType; // Lucide icon component
}

const OfferingCard: React.FC<OfferingCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 bg-white">
      <CardHeader className="pb-4">
        <div className="mb-4 flex justify-center">
          <Icon className="h-12 w-12 text-primary" />
        </div>
        <CardTitle className="text-2xl font-serif font-bold text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default OfferingCard;