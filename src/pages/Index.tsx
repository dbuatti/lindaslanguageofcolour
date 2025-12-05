"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-8 font-sans">
      {/* Introduction: The Guide (White Background in light theme, lighter deep blue in dark theme) */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-12 bg-card text-card-foreground rounded-lg shadow-md">
        <div className="md:w-1/2 space-y-4 text-center md:text-left px-4">
          <h2 className="text-4xl font-bold font-serif text-foreground">Your Practical Guide to Spiritual Well-being</h2>
          <p className="text-lg">
            At Linda's Language of Colour, Linda Beckers offers grounded spiritual guidance, drawing on deep experience and comfort. Her purpose is to **"teach those first steps and nudge people onto the path that suits"** them.
          </p>
          <p className="text-lg">
            Linda, a respected **"powerful master and channeler"**, provides the tools and advice needed to empower individuals and help them find their footing.
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

      {/* Core Offerings: The Modalities (Deep Cosmic Blue Background, White Text) */}
      <section className="bg-background text-foreground p-8 rounded-lg shadow-md space-y-10">
        <div>
          <h3 className="text-3xl font-semibold font-serif text-primary mb-6 text-center">Core Services & Spiritual Modalities</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-primary">Aura-Soma Colour Therapy</h4>
              <p>Guidance using the unique language of colour for transformation and self-discovery.</p>

              <h4 className="text-xl font-bold text-primary mt-6">Intuitive Readings & Channelling</h4>
              <p>Receiving clear, strong guidance through Tarot, channelling, and remote sessions.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-bold text-primary">Reiki Healing & Attunements</h4>
              <p>Offering both healing sessions and **Reiki training (including Level Two attunements)**.</p>

              <h4 className="text-xl font-bold text-primary mt-6">Meditation & Crystal Healing</h4>
              <p>Foundational practices for deepening spiritual development.</p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/50" />

        <div>
          <h3 className="text-3xl font-semibold font-serif text-primary mb-6 text-center">Energy Management & Protection</h3>
          <div className="space-y-4">
            <p className="text-lg">Linda emphasises that **"Protection is something that you have to do everyday if you’re working in spirituality"**.</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>**Essential Daily Protection:** Learn practical techniques for clearing and protecting yourself and your space.</li>
              <li>**Grounded Boundaries:** Advice on **standing firm in your boundaries** while approaching situations with compassion.</li>
              <li>**Specific Tools:** Guidance on using practical tools like **salt across doorways** and energetic methods for pulling your aura in.</li>
              <li>**Connecting to Earth:** Instruction on transforming negative energy by connecting to the mother (Earth) in your garden.</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-primary/50" />

      {/* Call to Action (CTA) Footer - Dark Blue Container with Pink Glow, Pink Button */}
      <section className="text-center py-12 bg-secondary text-secondary-foreground rounded-lg shadow-lg border border-transparent ring-2 ring-accent ring-offset-2 ring-offset-background transition-all duration-300 hover:ring-4">
        <h2 className="text-3xl font-bold font-serif mb-4">Ready to Own Your Energy?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you're seeking clarity, healing, or simply wanting to understand how to navigate your spiritual journey with confidence, Linda offers practical support and genuine mentorship.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300">
          Connect with Linda
        </Button>
      </section>
    </div>
  );
};

export default Index;