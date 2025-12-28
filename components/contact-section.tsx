"use client";

import React, { useRef, useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "Daniyal Ijaz",
        "template_ypyb80q",
        formRef.current,
        "ycE9btg8rQQ7gfj4o"
      )
      .then(
        () => {
          toast.success("Your message has been sent successfully!", {
            position: "top-right",
          });
          formRef.current?.reset();
        },
        (error: { text: any }) => {
          console.error("EmailJS Error:", error.text);
          toast.error("Failed to send your message. Please try again.", {
            position: "top-right",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="hidden sm:block absolute top-32 left-0 w-72 h-72 bg-accent/20 blur-3xl rounded-full dark:bg-accent/10" />
      <div className="hidden sm:block absolute bottom-32 right-0 w-96 h-96 bg-accent/10 blur-3xl rounded-full dark:bg-accent/5" />

      <ToastContainer />
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto text-balance">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <Card className="p-4 sm:p-6 border-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Email</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground transition-colors">
                    daniyalijaz922@gmail.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 border-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Phone</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground transition-colors">
                    +92 (309) 6770806
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-6 border-border">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-accent/10 rounded-lg">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm sm:text-base">Location</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Skyland Waterpark Society, Lahore
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card
            className={`lg:col-span-2 p-4 sm:p-6 sm:p-8 border-border transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1">
                  <label htmlFor="user_name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="user_name"
                    name="user_name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="user_email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="user_email"
                    name="user_email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="user_message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="user_message"
                  name="user_message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto cursor-pointer"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
