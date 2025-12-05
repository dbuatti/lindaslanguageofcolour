"use client";

import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-16 px-4 md:px-8 min-h-[calc(100vh-200px)]"> {/* Adjusted min-height */}
      <h1 className="text-5xl font-serif font-bold text-foreground mb-8 text-center">Privacy Policy</h1>
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-6">
        <p>
          This Privacy Policy describes how Linda's Language of Colour collects, uses, and discloses your Personal Information when you visit or make a purchase from the Site.
        </p>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Collection of Personal Information</h2>
        <p>
          When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as "Personal Information". See the list below for more information about what Personal Information we collect and why.
        </p>
        <h3 className="text-2xl font-serif font-bold text-foreground mt-6 mb-3">Examples of Personal Information collected:</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Device information: version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</li>
          <li>Purpose of collection: to load the Site accurately for you, and to perform analytics on Site usage to optimise our Site.</li>
          <li>Source of collection: Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</li>
        </ul>
        <h2 className="text-3xl font-serif font-bold text-foreground mt-8 mb-4">Contact Us</h2>
        <p>
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:linda@example.com" className="text-primary hover:underline">linda@example.com</a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;