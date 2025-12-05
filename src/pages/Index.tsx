"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Card components are still imported for other potential uses, but not used in the refactored section.
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      {/* The main hero section with background image, logo, title, and tagline is now handled by SiteHeader */}
      {/* This section is removed to avoid duplication. */}

      <section className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-foreground">Your Practical Guide to Spiritual Well-being</h2>
          <p className="text-lg text-foreground">
            At Linda's Language of Colour, Linda Beckers offers grounded spiritual guidance, practical energy management, and clear teachings for those beginning or deepening their journey. Her practice weaves together various healing and spiritual development techniques, always with a focus on real-world application.
          </p>
          <p className="text-lg text-foreground">
            With a wealth of experience, Linda is dedicated to empowering individuals. As she puts it, her purpose is to "teach those first steps and nudge people onto the path that suits" them, providing honest advice and mentorship to help you find your footing.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/linda.jpeg"
            alt="Linda Beckers"
            className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <Separator className="my-8" />

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-background rounded-lg"> {/* Replaced Card with div, removed shadow/hover */}
          <h3 className="text-2xl font-semibold text-primary mb-4">Core Services & Modalities</h3>
          <div className="space-y-3 text-foreground">
            <ul className="list-disc list-inside space-y-1">
              <li>Aura-Soma Colour Therapy</li>
              <li>Crystal Healing</li>
              <li>Meditation</li>
              <li>Reiki (including Level Two attunements)</li>
              <li>Intuitive Readings (Tarot, Channelling, Remote/Online)</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-background rounded-lg"> {/* Replaced Card with div, removed shadow/hover */}
          <h3 className="text-2xl font-semibold text-primary mb-4">Energy Management & Protection</h3>
          <div className="space-y-3 text-foreground">
            <p>Linda emphasises the importance of daily spiritual protection and energy management:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Essential daily protection practices.</li>
              <li>Using tools like salt across doorways.</li>
              <li>Cleansing and protecting personal spaces.</li>
              <li>Connecting to the earth to transform negativity.</li>
              <li>Awareness of personal aura and external energy influences.</li>
            </ul>
          </div>
        </div>

        <div className="p-6 bg-background rounded-lg"> {/* Replaced Card with div, removed shadow/hover */}
          <h3 className="text-2xl font-semibold text-primary mb-4">Teaching & Mentorship</h3>
          <div className="space-y-3 text-foreground">
            <p>Linda is dedicated to guiding aspiring practitioners:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Teaching "first steps" and nudging individuals onto their suitable path.</li>
              <li>Offering sessions for beginners in spiritual development.</li>
              <li>Providing practical advice on business and professional boundaries.</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      <section className="text-center py-8 bg-secondary text-secondary-foreground rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Curious About Your Path?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          If you're seeking clarity, healing, or simply want to understand how to navigate your spiritual journey with confidence, Linda offers practical support and genuine mentorship. It's about finding what truly resonates with *you*.
        </p>
        <Button size="lg" variant="outline" className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
          Connect with Linda
        </Button>
      </section>
    </div>
  );
};

export default Index;