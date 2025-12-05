"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      {/* The main hero section with background image, logo, title, and tagline is now handled by SiteHeader */}
      {/* This section is removed to avoid duplication. */}

      <section className="flex flex-col md:flex-row items-center gap-8 py-12">
        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900">My Approach to Spiritual Well-being</h2>
          <p className="text-lg text-gray-700">
            Linda Beckers operates under the name "Linda's Language of Colour," focusing on spiritual guidance, energy management, and teaching beginners. Her practice is centered around various healing and spiritual development techniques.
          </p>
          <p className="text-lg text-gray-700">
            With extensive experience, Linda is dedicated to guiding aspiring practitioners and individuals on their spiritual journey. Her purpose is to "teach those first steps and nudge people onto the path that suits" them, offering practical advice and mentorship.
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
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Core Services & Modalities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <ul className="list-disc list-inside space-y-1">
              <li>Aura-Soma Colour Therapy</li>
              <li>Crystal Healing</li>
              <li>Meditation</li>
              <li>Reiki (including Level Two attunements)</li>
              <li>Intuitive Readings (Tarot, Channeling, Remote/Online)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Energy Management & Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <p>Linda emphasizes the importance of daily spiritual protection and energy management:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Essential daily protection practices.</li>
              <li>Using tools like salt across doorways.</li>
              <li>Cleansing and protecting personal spaces.</li>
              <li>Connecting to the earth to transform negativity.</li>
              <li>Awareness of personal aura and external energy influences.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-primary">Teaching & Mentorship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700">
            <p>Linda is dedicated to guiding aspiring practitioners:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Teaching "first steps" and nudging individuals onto their suitable path.</li>
              <li>Offering sessions for beginners in spiritual development.</li>
              <li>Providing practical advice on business and professional boundaries.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      <section className="text-center py-8 bg-secondary text-secondary-foreground rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you're seeking guidance, healing, or looking to develop your spiritual practice, Linda is here to support you.
        </p>
        <Button size="lg" variant="outline" className="text-secondary-foreground border-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
          Contact Linda
        </Button>
      </section>
    </div>
  );
};

export default Index;