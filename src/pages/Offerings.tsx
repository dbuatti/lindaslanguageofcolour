"use client";

import React from 'react';
import OfferingCard from '@/components/OfferingCard';
import { Lightbulb, Heart, MessageSquare, Gem, Sparkles, Shield } from 'lucide-react';

const offeringsData = [
  {
    title: "Aura-Soma Colour Therapy",
    description: "Guidance using colour for transformation, self-discovery, and balancing your energy.",
    icon: Lightbulb,
  },
  {
    title: "Reiki Healing & Attunements",
    description: "Experience profound healing sessions and receive Level Two Reiki attunements for your own practice.",
    icon: Heart,
  },
  {
    title: "Intuitive Readings & Channelling",
    description: "Receive clear, strong guidance through Tarot readings and remote channelling sessions.",
    icon: MessageSquare,
  },
  {
    title: "Meditation & Crystal Healing",
    description: "Learn foundational practices for spiritual development, inner peace, and energetic alignment.",
    icon: Gem,
  },
  {
    title: "Spiritual Development Mentorship",
    description: "Personalised guidance to help you navigate your spiritual path and unlock your full potential.",
    icon: Sparkles,
  },
  {
    title: "Energy Management & Protection",
    description: "Practical techniques for clearing and protecting your energy and space in daily life.",
    icon: Shield,
  },
];

const Offerings = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 text-center">
      <h1 className="text-5xl font-serif font-bold text-foreground mb-8">Our Offerings</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
        Explore Linda's diverse range of services designed to support your spiritual well-being, personal growth, and energetic balance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {offeringsData.map((offering, index) => (
          <OfferingCard
            key={index}
            title={offering.title}
            description={offering.description}
            icon={offering.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Offerings;