import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative w-full pt-4 sm:pt-6 md:pt-8 pb-20 sm:pb-24 md:pb-32 bg-muted/30 overflow-hidden"
    >
      {/* Divider */}
      <div className="max-w-[200px] mx-auto mb-10 sm:mb-12 md:mb-16">
        <div className="h-px bg-border/60" />
      </div>

      {/* Soft background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-24 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          {/* Eyebrow label */}
          <span className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.2em] text-primary/60 mb-4">
            Reach Out
          </span>

          {/* Main headline */}
          <h2 className="font-serif text-[28px] sm:text-[36px] md:text-[42px] text-foreground leading-tight tracking-tight mb-4 sm:mb-6">
            Let's Get in Touch
          </h2>

          {/* Intro copy */}
          <p className="text-foreground/70 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question, want to volunteer, or just curious about Joy Drop? 
            We'd love to hear from you. Drop us a message and we'll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground/80">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className={cn(
                "bg-background/80 border-border/60",
                "focus-visible:bg-background"
              )}
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground/80">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className={cn(
                "bg-background/80 border-border/60",
                "focus-visible:bg-background"
              )}
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground/80">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us how you'd like to get involved."
              value={formData.message}
              onChange={handleChange}
              required
              className={cn(
                "bg-background/80 border-border/60",
                "focus-visible:bg-background"
              )}
            />
            <p className="text-muted-foreground text-xs sm:text-sm mt-1.5">
              Tell us how you'd like to get involved.
            </p>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              size="lg"
              className={cn(
                "w-full sm:w-auto",
                "px-8 py-3",
                "font-medium",
                "transition-transform duration-200",
                "hover:scale-[1.02]"
              )}
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
