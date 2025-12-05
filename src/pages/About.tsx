"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section for About Page */}
      <section className="relative py-24 bg-gradient-to-br from-background to-secondary text-foreground text-center">
        <div className="container mx-auto px-4 md:px-8 space-y-6">
          <h1 className="text-6xl font-serif font-bold leading-tight">Meet Linda Beckers</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your compassionate guide on the path to spiritual well-being and self-discovery.
          </p>
        </div>
      </section>

      {/* Linda's Journey Section */}
      <section className="py-24 bg-card text-foreground">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-16 px-4 md:px-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/linda.jpeg"
              alt="Linda Beckers"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="md:w-1/2 space-y-8 text-center md:text-left">
            <h2 className="text-4xl font-serif font-bold leading-tight text-primary">My Journey & Philosophy</h2>
            <p className="text-lg leading-relaxed">
              For over two decades, I've dedicated my life to spiritual exploration and guiding others. My journey began with a deep curiosity about the unseen world, leading me to master various healing modalities and intuitive practices. I believe that true well-being comes from understanding and nurturing our energetic selves.
            </p>
            <p className="text-lg leading-relaxed">
              My approach is grounded and practical, focusing on empowering you to take your "first steps" and find the spiritual path that truly resonates with you. I'm here to provide clear guidance, support, and the tools you need to navigate your spiritual development with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise and Passion Section */}
      <section className="py-24 bg-muted text-foreground">
        <div className="container mx-auto px-4 md:px-8 text-center space-y-12">
          <h2 className="text-4xl font-serif font-bold leading-tight text-primary">My Expertise & Passion</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4 p-8 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-foreground">Aura-Soma & Colour Therapy</h3>
              <p className="text-lg leading-relaxed">
                As a certified Aura-Soma practitioner, I use the vibrant language of colour to help you unlock deeper self-understanding and facilitate profound energetic shifts.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-foreground">Reiki & Energy Healing</h3>
              <p className="text-lg leading-relaxed">
                I offer powerful Reiki healing sessions and attunements, guiding you to harness universal life force energy for balance and restoration.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-foreground">Intuitive Guidance</h3>
              <p className="text-lg leading-relaxed">
                Through intuitive readings and channelling, I provide clear, strong messages to illuminate your path and offer insights into your questions.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-card rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <h3 className="text-2xl font-serif font-bold text-foreground">Spiritual Mentorship</h3>
              <p className="text-lg leading-relaxed">
                I offer personalized mentorship to help you develop your own spiritual gifts, manage your energy, and live a more aligned life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4 md:px-8 space-y-8">
          <h2 className="text-5xl font-serif font-bold leading-tight">Ready to Connect?</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Whether you're curious about a specific offering or seeking guidance on your spiritual journey, I'm here to help.
          </p>
          <Button
            size="lg"
            asChild
            className="mt-8 px-12 py-7 text-2xl font-bold rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          ><Link to="/contact">Get in Touch</Link></Button>
        </div>
      </section>
    </div>
  );
};

export default About;