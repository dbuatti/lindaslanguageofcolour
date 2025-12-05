"use client";

import React from 'react';
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="w-full space-y-12 font-sans">
      {/* Introduction: The Guide */}
      <section className="py-12 bg-card text-card-foreground">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold font-sans text-foreground leading-tight">Linda's Language of Colour</h2>
            <p className="text-lg leading-relaxed">
              At Linda's Language of Colour, <span className="font-bold">I offer grounded spiritual guidance</span>, drawing on deep experience and comfort. My purpose is to <span className="font-bold">"teach those first steps and nudge people onto the path that suits"</span> them.
            </p>
            <p className="text-lg leading-relaxed">
              As a respected <span className="font-bold">"powerful master and channeler"</span>, I provide the tools and advice needed to <span className="font-bold">empower individuals</span> and help them find their footing.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center px-4">
            <img
              src="/images/linda.jpeg"
              alt="Linda Beckers"
              className="w-full max-w-md h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <Separator className="h-px bg-primary/50" /> {/* Thin separator */}

      {/* Core Offerings: The Modalities */}
      <section className="bg-card text-card-foreground py-10">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-3xl font-semibold font-sans text-primary mb-10 text-center leading-tight">Core Services & Spiritual Modalities</h3> {/* Adjusted font size and margin */}
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10"> {/* Adjusted gaps */}
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Aura-Soma Colour Therapy</h4> {/* Adjusted font size */}
              <p className="text-base leading-relaxed">Guidance using colour for <span className="font-bold">transformation and self-discovery</span>.</p> {/* More concise */}
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Reiki Healing & Attunements</h4>
              <p className="text-base leading-relaxed">Healing sessions and <span className="font-bold">Reiki training (Level Two attunements)</span>.</p> {/* More concise */}
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Intuitive Readings & Channelling</h4>
              <p className="text-base leading-relaxed">Receiving <span className="font-bold">clear, strong guidance</span> through Tarot and remote sessions.</p> {/* More concise */}
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Meditation & Crystal Healing</h4>
              <p className="text-base leading-relaxed"><span className="font-bold">Foundational practices</span> for spiritual development.</p> {/* More concise */}
            </div>
          </div>
        </div>
      </section>

      <Separator className="h-px bg-primary/50" /> {/* Thin separator */}

      {/* Energy Management & Protection */}
      <section className="bg-card text-card-foreground py-10">
        <div className="container mx-auto px-4 md:px-8 space-y-12">
          <h3 className="text-3xl font-semibold font-sans text-primary mb-10 text-center leading-tight">Energy Management & Protection</h3> {/* Adjusted font size and margin */}
          <div className="space-y-6 max-w-3xl mx-auto"> {/* Centered and constrained width for readability */}
            <p className="text-lg leading-relaxed mb-6">I emphasise that <span className="font-bold">"Protection is something that you have to do everyday if you’re working in spirituality"</span>.</p> {/* Added margin-bottom */}
            <ul className="list-disc list-inside space-y-4 pl-4 text-lg leading-relaxed"> {/* Increased list item spacing */}
              <li><span className="font-bold">Daily Protection:</span> Learn techniques for clearing and protecting yourself and your space.</li> {/* More concise */}
              <li><span className="font-bold">Grounded Boundaries:</span> Advice on <span className="font-bold">standing firm in your boundaries</span> with compassion.</li> {/* More concise */}
              <li><span className="font-bold">Specific Tools:</span> Guidance on using <span className="font-bold">salt across doorways</span> and energetic aura methods.</li> {/* More concise */}
              <li><span className="font-bold">Connecting to Earth:</span> Transform negative energy by <span className="font-bold">connecting to the mother (Earth)</span> in your garden.</li> {/* More concise */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;