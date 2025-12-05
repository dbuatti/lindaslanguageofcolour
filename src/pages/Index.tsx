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

      {/* Core Services & Spiritual Modalities - Chunky Block 1 */}
      <section className="py-20 bg-light-blue-1 text-foreground"> {/* Increased padding for chunky feel */}
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h3 className="text-3xl font-semibold font-sans text-primary mb-8 leading-tight">Core Services & Spiritual Modalities</h3>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 max-w-4xl mx-auto">
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Aura-Soma Colour Therapy</h4>
              <p className="text-base leading-relaxed">Guidance using colour for <span className="font-bold">transformation and self-discovery</span>.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Reiki Healing & Attunements</h4>
              <p className="text-base leading-relaxed">Healing sessions and <span className="font-bold">Reiki training (Level Two attunements)</span>.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Intuitive Readings & Channelling</h4>
              <p className="text-base leading-relaxed">Receiving <span className="font-bold">clear, strong guidance</span> through Tarot and remote sessions.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-primary mb-2">Meditation & Crystal Healing</h4>
              <p className="text-base leading-relaxed"><span className="font-bold">Foundational practices</span> for spiritual development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Management & Protection - Chunky Block 2 with Image/Quote */}
      <section className="py-20 bg-light-blue-2 text-foreground"> {/* Increased padding for chunky feel */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 md:px-8">
          <div className="md:w-1/2 flex justify-center">
            {/* Reusing Linda's image here */}
            <img
              src="/images/linda.jpeg"
              alt="Hands holding a seedling"
              className="w-full max-w-sm h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h3 className="text-3xl font-semibold font-sans text-primary mb-4 leading-tight">Energy Management & Protection</h3>
            <p className="text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
              I emphasise that <span className="font-bold">"Protection is something that you have to do everyday if you’re working in spirituality"</span>.
            </p>
            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Learn practical techniques for clearing and protecting yourself and your space, including <span className="font-bold">standing firm in your boundaries</span> and using tools like <span className="font-bold">salt across doorways</span>. Transform negative energy by <span className="font-bold">connecting to the mother (Earth)</span> in your garden.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;