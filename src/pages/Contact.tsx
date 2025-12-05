"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"; // Using sonner for toasts
import { Mail, Phone, MapPin } from 'lucide-react'; // Icons for contact details

// Define the schema for the contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // In a real application, you would send this data to a backend API
    console.log("Form submitted:", data);
    toast.success("Your message has been sent successfully!");
    form.reset(); // Reset the form after successful submission
  };

  return (
    <div className="w-full font-sans py-16 px-4 md:px-8">
      {/* Hero Section for Contact Page */}
      <section className="relative py-24 bg-gradient-to-br from-warm-off-white to-soft-sage text-charcoal text-center mb-16 rounded-lg shadow-lg">
        <div className="container mx-auto space-y-6">
          <h1 className="text-6xl font-serif font-bold leading-tight">Get in Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            I'd love to hear from you. Please fill out the form below or use the contact details provided.
          </p>
        </div>
      </section>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center lg:text-left">Send a Message</h2>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-lg">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                {...form.register("name")}
                className="mt-2 p-3 text-lg"
              />
              {form.formState.errors.name && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...form.register("email")}
                className="mt-2 p-3 text-lg"
              />
              {form.formState.errors.email && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="subject" className="text-lg">Subject</Label>
              <Input
                id="subject"
                type="text"
                placeholder="Subject of your inquiry"
                {...form.register("subject")}
                className="mt-2 p-3 text-lg"
              />
              {form.formState.errors.subject && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.subject.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message" className="text-lg">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={6}
                {...form.register("message")}
                className="mt-2 p-3 text-lg"
              />
              {form.formState.errors.message && (
                <p className="text-destructive text-sm mt-1">{form.formState.errors.message.message}</p>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full px-8 py-4 text-xl font-bold rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col justify-between">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-8 text-center lg:text-left">Contact Details</h2>
          <div className="space-y-8 text-lg text-muted-foreground">
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-xl text-foreground">Email</h3>
                <a href="mailto:linda@example.com" className="hover:text-primary transition-colors">linda@example.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-xl text-foreground">Phone</h3>
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">+1 (234) 567-890</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-bold text-xl text-foreground">Address</h3>
                <p>123 Spiritual Path, Serenity City, ST 98765</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center lg:text-left">
            <p className="text-xl text-foreground font-serif italic">
              "I look forward to connecting with you and supporting your journey."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;