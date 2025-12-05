"use client";

import React from 'react';
// Separator is no longer imported as it's being removed.

const Index = () => {
  return (
    <div className="w-full font-sans"> {/* Removed space-y-12 for more control over section spacing */}
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

      {/* Core Services & Spiritual Modalities - Main Heading */}
      <section className="py-10 bg-card text-card-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-semibold font-sans text-primary mb-10 text-center leading-tight">Core Services & Spiritual Modalities</h3>
        </div>
      </section>

      {/* Individual Core Service Modules */}
      <div className="space-y-0"> {/* No vertical gap between these modules */}
        <section className="py-10 bg-light-blue-1 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Aura-Soma Colour Therapy</h4>
            <p className="text-base leading-relaxed">Guidance using colour for <span className="font-bold">transformation and self-discovery</span>.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-2 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Reiki Healing & Attunements</h4>
            <p className="text-base leading-relaxed">Healing sessions and <span className="font-bold">Reiki training (Level Two attunements)</span>.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-3 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Intuitive Readings & Channelling</h4>
            <p className="text-base leading-relaxed">Receiving <span className="font-bold">clear, strong guidance</span> through Tarot and remote sessions.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-4 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Meditation & Crystal Healing</h4>
            <p className="text-base leading-relaxed"><span className="font-bold">Foundational practices</span> for spiritual development.</p>
          </div>
        </section>
      </div>

      {/* Energy Management & Protection - Main Heading */}
      <section className="py-10 bg-card text-card-foreground">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-3xl font-semibold font-sans text-primary mb-10 text-center leading-tight">Energy Management & Protection</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-6">I emphasise that <span className="font-bold">"Protection is something that you have to do everyday if you’re working in spirituality"</span>.</p>
        </div>
      </section>

      {/* Individual Energy Management Modules */}
      <div className="space-y-0"> {/* No vertical gap between these modules */}
        <section className="py-10 bg-light-blue-1 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Daily Protection</h4>
            <p className="text-base leading-relaxed">Learn techniques for clearing and protecting yourself and your space.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-2 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Grounded Boundaries</h4>
            <p className="text-base leading-relaxed">Advice on <span className="font-bold">standing firm in your boundaries</span> with compassion.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-3 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Specific Tools</h4>
            <p className="text-base leading-relaxed">Guidance on using <span className="font-bold">salt across doorways</span> and energetic aura methods.</p>
          </div>
        </section>

        <section className="py-10 bg-light-blue-4 text-foreground">
          <div className="container mx-auto px-4 md:px-8">
            <h4 className="text-xl font-bold text-primary mb-2">Connecting to Earth</h4>
            <p className="text-base leading-relaxed">Transform negative energy by <span className="font-bold">connecting to the mother (Earth)</span> in your garden.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;