"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8">
      <section
        className="text-center py-16 md:py-24 rounded-lg shadow-lg bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/images/background-sky.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for text readability */}
        <div className="relative z-10 text-white">
          <img
            src="/images/logo-wings.png"
            alt="Linda's Language of Colour Logo"
            className="mx-auto mb-6 w-32 h-auto drop-shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Linda's Language of Colour
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Aura-Soma Colour Therapy, Meditation, Crystal Healing, Spiritual Development
          </p>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary transition-colors duration-300">
            Explore Services
          </Button>
        </div>
      </section>

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