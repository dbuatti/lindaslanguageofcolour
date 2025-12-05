"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Shield, BookOpen } from 'lucide-react'; // Importing icons

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8 font-sans">
      {/* "Your Practical Guide" Section - White Background (bg-card in dark theme for contrast) */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-12 bg-card text-card-foreground rounded-lg shadow-md">
        <div className="md:w-1/2 space-y-4 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold font-serif text-foreground">Your Practical Guide to Spiritual Well-being</h2>
          <p className="text-lg">
            At Linda's Language of Colour, Linda Beckers offers grounded spiritual guidance, practical energy management, and clear teachings for those beginning or deepening their journey. Her practice weaves together various healing and spiritual development techniques, always with a focus on real-world application.
          </p>
          <p className="text-lg">
            With a wealth of experience, Linda is dedicated to empowering individuals. As she puts it, her purpose is to "**teach those first steps** and nudge people onto the path that suits" them, providing honest advice and mentorship to help you find your footing.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center px-4">
          <img
            src="/images/linda.jpeg"
            alt="Linda Beckers"
            className="w-full max-w-md h-auto rounded-lg shadow-lg object-cover"
          />
        </div>
      </section>

      <Separator className="my-8 bg-primary/50" />

      {/* 3-Column Section - Deep Cosmic Blue Background, White Text */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-background text-foreground p-8 rounded-lg shadow-md">
        <div className="p-6 rounded-lg">
          <h3 className="text-2xl font-semibold font-serif text-primary mb-4">Core Services & Modalities</h3>
          <div className="space-y-3">
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-accent" /> Aura-Soma Colour Therapy</li>
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-accent" /> Crystal Healing</li>
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-accent" /> Meditation</li>
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-accent" /> Reiki (including Level Two attunements)</li>
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-accent" /> Intuitive Readings (Tarot, Channelling, Remote/Online)</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-2xl font-semibold font-serif text-primary mb-4">Energy Management & Protection</h3>
          <div className="space-y-3">
            <p>Linda emphasises the importance of daily spiritual protection and energy management:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Shield size={18} className="text-accent" /> Essential daily protection practices.</li>
              <li className="flex items-center gap-2"><Shield size={18} className="text-accent" /> Using tools like salt across doorways.</li>
              <li className="flex items-center gap-2"><Shield size={18} className="text-accent" /> Cleansing and protecting personal spaces.</li>
              <li className="flex items-center gap-2"><Shield size={18} className="text-accent" /> Connecting to the earth to transform negativity.</li>
              <li className="flex items-center gap-2"><Shield size={18} className="text-accent" /> Awareness of personal aura and external energy influences.</li>
            </ul>
          </div>
        </div>

        <div className="p-6 rounded-lg">
          <h3 className="text-2xl font-semibold font-serif text-primary mb-4">Teaching & Mentorship</h3>
          <div className="space-y-3">
            <p>Linda is dedicated to guiding aspiring practitioners:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><BookOpen size={18} className="text-accent" /> Teaching "first steps" and nudging individuals onto their suitable path.</li>
              <li className="flex items-center gap-2"><BookOpen size={18} className="text-accent" /> Offering sessions for beginners in spiritual development.</li>
              <li className="flex items-center gap-2"><BookOpen size={18} className="text-accent" /> Providing practical advice on business and professional boundaries.</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-primary/50" />

      {/* Final Call-to-Action (CTA) - Dark Blue Container with Pink Glow, Pink Button */}
      <section className="text-center py-12 bg-secondary text-secondary-foreground rounded-lg shadow-lg border border-transparent ring-2 ring-accent ring-offset-2 ring-offset-background transition-all duration-300 hover:ring-4">
        <h2 className="text-3xl font-bold font-serif mb-4">Curious About Your Path?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          If you're seeking clarity, healing, or simply want to understand how to navigate your spiritual journey with confidence, Linda offers practical support and genuine mentorship. It's about finding what truly resonates with you.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300">
          Connect with Linda
        </Button>
      </section>
    </div>
  );
};

export default Index;