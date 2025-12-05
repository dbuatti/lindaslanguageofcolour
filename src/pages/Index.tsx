"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section
        className="relative text-center bg-no-repeat bg-top bg-contain // bg-top for mobile, bg-contain for mobile
                   min-h-[50vh] sm:h-[calc(100vw_/_1)] sm:bg-[length:100%_auto] sm:bg-top" // Mobile: min-h, bg-top, bg-contain. Desktop: precise height, bg-top, bg-[length:100%_auto]
        style={{ backgroundImage: "url('/images/header-banner.jpeg')" }}
      >
        {/* The text block is now absolutely positioned at the bottom of the hero section */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full bg-foreground text-white py-8 px-4 md:px-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-lg">
              Linda's Language of Colour
            </h1>
            <p className="text-lg md:text-xl font-sans leading-relaxed drop-shadow-md">
              Aura-Soma Colour Therapy, Meditation, Crystal Healing, Spiritual Development
            </p>
            <p className="text-2xl md:text-3xl font-serif leading-snug drop-shadow-md">
              Practical Protection. Powerful Guidance. Profound Healing.
            </p>
            <Button
              size="lg"
              className="mt-6 px-8 py-5 text-lg font-bold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Offerings
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction: The Guide (Warm Off-White Background) */}
      <section className="py-24 bg-warm-off-white text-charcoal"> {/* Generous padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-4 md:px-8"> {/* Increased gap */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left"> {/* Increased spacing */}
            <h2 className="text-4xl font-serif font-bold leading-tight">Your Practical Guide to Spiritual Well-being</h2>
            <p className="text-xl leading-relaxed">
              At Linda's Language of Colour, <span className="font-bold">I offer grounded spiritual guidance</span>, drawing on deep experience and comfort. My purpose is to <span className="font-bold">"teach those first steps and nudge people onto the path that suits"</span> them.
            </p>
            <p className="text-xl leading-relaxed">
              As a respected <span className="font-bold">"powerful master and channeler"</span>, I provide the tools and advice needed to <span className="font-bold">empower individuals</span> and help them find their footing.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/linda.jpeg"
              alt="Linda Beckers"
              className="w-full max-w-md h-auto object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Core Offerings: The Modalities (Soft Sage Background) */}
      <section className="py-24 bg-soft-sage text-charcoal"> {/* Generous padding */}
        <div className="container mx-auto px-4 md:px-8 text-center space-y-16"> {/* Increased spacing */}
          <h3 className="text-5xl font-serif font-bold leading-tight">My Core Offerings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Bento grid style, increased gap */}
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-serif font-bold text-primary">Aura-Soma Colour Therapy</h4>
              <p className="text-lg leading-relaxed">Guidance using colour for <span className="font-bold">transformation and self-discovery</span>.</p>
            </div>
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-serif font-bold text-primary">Reiki Healing & Attunements</h4>
              <p className="text-lg leading-relaxed">Healing sessions and <span className="font-bold">Reiki training (Level Two attunements)</span>.</p>
            </div>
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-serif font-bold text-primary">Intuitive Readings & Channelling</h4>
              <p className="text-lg leading-relaxed">Receiving <span className="font-bold">clear, strong guidance</span> through Tarot and remote sessions.</p>
            </div>
            <div className="space-y-4 p-6 bg-white rounded-lg shadow-md hover:hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl font-serif font-bold text-primary">Meditation & Crystal Healing</h4>
              <p className="text-lg leading-relaxed"><span className="font-bold">Foundational practices</span> for spiritual development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Management & Protection (Muted Lavender Background with Image/Quote) */}
      <section className="py-24 bg-muted-lavender text-charcoal"> {/* Generous padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-4 md:px-8"> {/* Increased gap */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/linda.jpeg"
              alt="Hands holding a seedling"
              className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-8 text-center md:text-left"> {/* Increased spacing */}
            <h3 className="text-4xl font-serif font-bold leading-tight">Energy Management & Protection</h3>
            <p className="text-xl leading-relaxed max-w-xl mx-auto md:mx-0">
              I emphasise that <span className="font-bold">"Protection is something that you have to do everyday if you’re working in spirituality"</span>.
            </p>
            <p className="text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Learn practical techniques for clearing and protecting yourself and your space, including <span className="font-bold">standing firm in your boundaries</span> and using tools like <span className="font-bold">salt across doorways</span>. Transform negative energy by <span className="font-bold">connecting to the mother (Earth)</span> in your garden.
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action (Warm Gold Background) */}
      <section className="py-24 bg-accent text-accent-foreground text-center"> {/* Generous padding */}
        <div className="container mx-auto px-4 md:px-8 space-y-8">
          <h2 className="text-5xl font-serif font-bold leading-tight">Ready to Begin Your Journey?</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            If you're seeking clarity, healing, or simply want to understand how to navigate your spiritual journey with confidence, I offer practical support and genuine mentorship.
          </p>
          <Button
            size="lg"
            className="mt-8 px-12 py-7 text-2xl font-bold rounded-lg bg-charcoal text-warm-off-white hover:bg-charcoal/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Connect with Linda
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;