"use client";

import React from 'react';

const TermsOfService = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 min-h-[calc(100vh-200px)]"> {/* Adjusted min-height */}
      <h1 className="text-5xl font-serif font-bold text-foreground mb-8 text-center">Terms of Service</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-6">
        <p>
          Welcome to Linda's Language of Colour. These Terms of Service govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms.
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Use of Our Services</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images, and software, is the property of Linda's Language of Colour or its content suppliers and protected by international copyright laws.
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
        <p>
          Linda's Language of Colour will not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms of Service at any time. Your continued use of the website after any such changes constitutes your acceptance of the new Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;