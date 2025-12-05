"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom'; // Import Link

const Index = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Aspect ratio container for background and logo */}
        {/* Assuming a 16:9 aspect ratio (height is 56.25% of width). Adjust pt-[...] if images have a different aspect ratio. */}
        <div className="relative pt-[56.25%]"> 
          {/* Background Image */}
          <img
            src="/images/hero-background.png"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover" // Fills the container, potentially cropping
          />

          {/* Linda with Wings Logo - positioned over the background, scaled to be bigger */}
          <img
            src="/images/linda-with-wings-logo.png"
            alt="Linda with Wings Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       w-full h-full object-contain scale-125 md:scale-150 lg:scale-175 
                       animate-fade-in-up drop-shadow-lg" // Centered, scaled up, object-contain to prevent cropping the logo itself
          />

          {/* The button is positioned absolutely at the bottom of the hero section */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4 md:px-8 animate-fade-in-up delay-300">
            <Button
              size="lg"
              asChild
              className="px-10 py-6 text-xl font-bold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Link to="/offerings">Explore My Offerings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction: The Guide (Warm Off-White Background) */}
      <section className="py-24 bg-background text-foreground"> {/* Generous padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-4 md:px-8"> {/* Increased gap */}
          <div className="md:w-1/2 space-y-8 text-center md:text-left"> {/* Increased spacing */}
            <h2 className="text-4xl font-serif font-bold leading-tight">Your Practical Guide to Spiritual Well-being</h2>
            <p className="text-xl leading-relaxed">
              At Linda's Language of Colour, <span className="font-bold">I offer grounded spiritual guidance</span>, drawing on deep experience and comfort. My purpose is to <span className="font-bold">"teach those first steps and nudge people onto the path that suits"</span> them.
            </p>
            <p className="text-xl leading-relaxed">
              As a respected <span className="font-bold">"powerful master and channeller"</span>, I provide the tools and advice needed to <span className="font-bold">empower individuals</span> and help them find their footing.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/linda.jpeg"
              alt="Linda Beckers"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105" // Added hover:scale-105
            />
          </div>
        </div>
      </section>

      {/* Core Offerings: The Modalities (Soft Sage Background) */}
      <section className="py-24 bg-secondary text-foreground"> {/* Generous padding */}
        <div className="container mx-auto px-4 md:px-8 text-center space-y-16"> {/* Increased spacing */}
          <h3 className="text-5xl font-serif font-bold leading-tight">My Core Offerings</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"> {/* Bento grid style, increased gap */}
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Unified transition */}
              <h4 className="text-2xl font-serif font-bold text-primary">Aura-Soma Colour Therapy</h4>
              <p className="text-lg leading-relaxed">Guidance using colour for <span className="font-bold">transformation and self-discovery</span>.</p>
            </div>
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Unified transition */}
              <h4 className="text-2xl font-serif font-bold text-primary">Reiki Healing & Attunements</h4>
              <p className="text-lg leading-relaxed">Healing sessions and <span className="font-bold">Reiki training (Level Two attunements)</span>.</p>
            </div>
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Unified transition */}
              <h4 className="text-2xl font-serif font-bold text-primary">Intuitive Readings & Channelling</h4>
              <p className="text-lg leading-relaxed">Receiving <span className="font-bold">clear, strong guidance</span> through Tarot and remote sessions.</p>
            </div>
            <div className="space-y-4 p-6 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"> {/* Unified transition */}
              <h4 className="text-2xl font-serif font-bold text-primary">Meditation & Crystal Healing</h4>
              <p className="text-lg leading-relaxed"><span className="font-bold">Foundational practices</span> for spiritual development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Management & Protection (Muted Lavender Background with Image/Quote) */}
      <section className="py-24 bg-muted text-foreground"> {/* Generous padding */}
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-4 md:px-8"> {/* Increased gap */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/linda.jpeg"
              alt="Hands holding a seedling"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105" // Added hover:scale-105
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
            className="px-12 py-7 text-2xl font-bold rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Connect with Linda
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;