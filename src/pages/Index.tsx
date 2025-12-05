"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4 md:p-8 space-y-12 font-sans"> {/* Increased overall vertical spacing */}
      {/* Introduction: The Guide (White Background in light theme, lighter deep blue in dark theme) */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 bg-card text-card-foreground rounded-lg shadow-xl"> {/* Added px-6, increased shadow */}
        <div className="md:w-1/2 space-y-6 text-center md:text-left"> {/* Increased internal spacing */}
          <h2 className="text-4xl font-bold font-sans text-foreground leading-tight">Your Practical Guide to Spiritual Well-being</h2> {/* Adjusted line height, changed to font-sans */}
          <p className="text-lg leading-relaxed"> {/* Adjusted line height */}
            At Linda's Language of Colour, **I offer grounded spiritual guidance**, drawing on deep experience and comfort. My purpose is to **"teach those first steps and nudge people onto the path that suits"** them.
          </p>
          <p className="text-lg leading-relaxed">
            As a respected **"powerful master and channeler"**, I provide the tools and advice needed to **empower individuals** and help them find their footing.
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

      <Separator className="my-12 h-1 bg-primary/70" /> {/* Thicker, more prominent separator */}

      {/* Core Offerings: The Modalities (Deep Cosmic Blue Background, White Text) */}
      <section className="bg-background text-foreground p-10 rounded-lg shadow-xl space-y-12"> {/* Increased padding, shadow, and internal spacing */}
        <div>
          <h3 className="text-4xl font-semibold font-sans text-primary mb-8 text-center leading-tight">Core Services & Spiritual Modalities</h3> {/* Larger heading, increased margin, changed to font-sans */}
          <div className="grid md:grid-cols-2 gap-10"> {/* Increased gap */}
            <div className="space-y-4"> {/* Increased internal spacing */}
              <h4 className="text-2xl font-bold text-primary">Aura-Soma Colour Therapy</h4> {/* Larger sub-heading */}
              <p className="text-lg leading-relaxed">Guidance using the unique language of colour for **transformation and self-discovery**.</p>

              <h4 className="text-2xl font-bold text-primary mt-8">Intuitive Readings & Channelling</h4> {/* Increased margin-top */}
              <p className="text-lg leading-relaxed">Receiving **clear, strong guidance** through Tarot, channelling, and remote sessions.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-primary">Reiki Healing & Attunements</h4>
              <p className="text-lg leading-relaxed">Offering both healing sessions and **Reiki training (including Level Two attunements)**.</p>

              <h4 className="text-2xl font-bold text-primary mt-8">Meditation & Crystal Healing</h4>
              <p className="text-lg leading-relaxed">**Foundational practices** for deepening spiritual development.</p>
            </div>
          </div>
        </div>

        <Separator className="bg-primary/50 h-px" /> {/* Subtle separator within the section */}

        <div>
          <h3 className="text-3xl font-semibold font-sans text-primary mb-8 text-center leading-tight">Energy Management & Protection</h3> {/* Larger heading, increased margin, changed to font-sans */}
          <div className="space-y-6"> {/* Increased internal spacing */}
            <p className="text-lg leading-relaxed">I emphasise that **"Protection is something that you have to do everyday if you’re working in spirituality"**.</p>
            <ul className="list-disc list-inside space-y-3 pl-4 text-lg leading-relaxed"> {/* Increased list item spacing */}
              <li>**Essential Daily Protection:** Learn practical techniques for clearing and protecting yourself and your space.</li>
              <li>**Grounded Boundaries:** Advice on **standing firm in your boundaries** while approaching situations with compassion.</li>
              <li>**Specific Tools:** Guidance on using practical tools like **salt across doorways** and energetic methods for pulling your aura in.</li>
              <li>**Connecting to Earth:** Instruction on transforming negative energy by **connecting to the mother (Earth)** in your garden.</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator className="my-12 h-1 bg-primary/70" /> {/* Thicker, more prominent separator */}

      {/* Call to Action (CTA) Footer - Dark Blue Container with Pink Glow, Pink Button */}
      <section className="text-center py-16 bg-secondary text-secondary-foreground rounded-lg shadow-xl border border-transparent ring-4 ring-accent ring-offset-4 ring-offset-background transition-all duration-300 hover:ring-8"> {/* Increased padding, shadow, ring thickness, and hover effect */}
        <h2 className="text-4xl font-bold font-sans mb-6 leading-tight">Ready to Own Your Energy?</h2> {/* Larger heading, increased margin, changed to font-sans */}
        <p className="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"> {/* Larger text, increased margin */}
          Whether you're seeking clarity, healing, or simply wanting to understand how to navigate your spiritual journey with confidence, **I offer practical support and genuine mentorship**.
        </p>
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors duration-300 px-10 py-6 text-xl font-bold rounded-full shadow-lg hover:shadow-xl"> {/* Larger button, rounded, bold text, shadow */}
          Connect with Linda
        </Button>
      </section>
    </div>
  );
};

export default Index;