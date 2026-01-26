import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Image import for general inquiries
import generalInquiriesImage from "@/pages/general inquiries.png";

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
      className="relative w-full pt-4 sm:pt-6 md:pt-8 pb-20 sm:pb-24 md:pb-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(38 67% 97%) 0%, hsl(36 45% 94%) 100%)",
      }}
    >
      {/* Divider */}
      <div className="max-w-[200px] mx-auto mb-10 sm:mb-12 md:mb-16">
        <div className="h-px bg-border/60" />
      </div>

      {/* Soft dreamy background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Warm burgundy glow - top left */}
        <div 
          className="absolute -top-20 -left-32 w-80 h-80 rounded-full blur-[100px] opacity-[0.08]"
          style={{ background: "hsl(348 70% 21%)" }}
        />
        {/* Soft cream glow - center */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px] opacity-[0.15]"
          style={{ background: "hsl(36 60% 90%)" }}
        />
        {/* Burgundy accent glow - bottom right */}
        <div 
          className="absolute -bottom-20 -right-32 w-80 h-80 rounded-full blur-[100px] opacity-[0.06]"
          style={{ background: "hsl(348 70% 21%)" }}
        />
        {/* Subtle watercolor texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(ellipse at 20% 30%, hsl(348 50% 35%) 0%, transparent 50%),
                              radial-gradient(ellipse at 80% 70%, hsl(348 50% 35%) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 text-center mb-10 sm:mb-14 md:mb-16 px-6">
        {/* Eyebrow label */}
        <span 
          className="inline-block text-xs md:text-sm font-sans uppercase tracking-[0.25em] mb-4"
          style={{ color: "hsl(348 45% 35%)" }}
        >
          Reach Out
        </span>

        {/* Main headline */}
        <h2 
          className="font-serif text-[28px] sm:text-[36px] md:text-[44px] leading-tight tracking-tight"
          style={{ color: "hsl(348 55% 22%)" }}
        >
          Let's Get in Touch
        </h2>
      </div>

      {/* Two-Card Asymmetrical Layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Card - General Inquiries (60-65% width, narrative & emotional) */}
          <div 
            className={cn(
              "relative flex flex-col",
              "lg:flex-[1.7]", // ~63% of container
              "bg-gradient-to-br from-white/85 via-white/75 to-[hsl(36_60%_97%)/60]",
              "backdrop-blur-sm",
              "rounded-2xl lg:rounded-3xl",
              "p-8 sm:p-10 lg:p-14",
              "border border-white/60",
              "shadow-[0_8px_40px_-8px_rgba(85,17,28,0.08)]",
              "transition-all duration-500",
              "hover:shadow-[0_16px_56px_-12px_rgba(85,17,28,0.12)]",
            )}
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 rounded-2xl lg:rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 30% 20%, hsl(36 60% 95% / 0.7) 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, hsl(348 40% 92% / 0.3) 0%, transparent 50%)",
              }}
            />

            {/* Content wrapper for horizontal layout on larger screens */}
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              {/* Image */}
              <div className="relative flex-shrink-0 mx-auto lg:mx-0">
                <div 
                  className="absolute inset-0 rounded-full blur-3xl opacity-15 scale-125"
                  style={{ background: "hsl(348 60% 30%)" }}
                />
                <img
                  src={generalInquiriesImage}
                  alt="General Inquiries"
                  className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 object-contain drop-shadow-xl"
                />
              </div>

              {/* Text content - more narrative and editorial */}
              <div className="flex flex-col text-center lg:text-left">
                {/* Eyebrow */}
                <span 
                  className="text-xs font-sans uppercase tracking-[0.2em] mb-3 lg:mb-4"
                  style={{ color: "hsl(348 45% 45%)" }}
                >
                  REACH OUT
                </span>

                {/* Headline */}
                <h3 
                  className="font-serif text-[24px] sm:text-[28px] lg:text-[32px] tracking-tight mb-4 lg:mb-5 leading-tight"
                  style={{ color: "hsl(348 55% 22%)" }}
                >
                  General Inquiries
                </h3>

                {/* Body Text - more narrative, emotional */}
                <p 
                  className="text-base sm:text-[17px] lg:text-[18px] leading-relaxed mb-6 lg:mb-8"
                  style={{ color: "hsl(24 15% 35%)" }}
                >
                  Have a question, want to volunteer, or just curious about Joy Drop? 
                  We'd love to hear from you.
                </p>

                {/* Additional narrative element */}
                <p 
                  className="text-sm sm:text-[15px] leading-relaxed italic"
                  style={{ color: "hsl(24 12% 50%)" }}
                >
                  "Connection is at the heart of everything we do. 
                  Drop us a message and let's start a conversation."
                </p>

                {/* Decorative flourish */}
                <div className="mt-8 lg:mt-10 flex items-center gap-3 opacity-40 justify-center lg:justify-start">
                  <div className="w-10 h-px" style={{ background: "hsl(348 45% 40%)" }} />
                  <div 
                    className="w-1.5 h-1.5 rounded-full" 
                    style={{ background: "hsl(348 45% 40%)" }} 
                  />
                  <div className="w-10 h-px" style={{ background: "hsl(348 45% 40%)" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Card - Contact Form (35-40% width, functional & compact) */}
          <div 
            className={cn(
              "relative",
              "lg:flex-1", // ~37% of container
              "bg-gradient-to-b from-white/90 to-white/75",
              "backdrop-blur-sm",
              "rounded-2xl lg:rounded-3xl",
              "p-6 sm:p-8 lg:p-8",
              "border border-white/60",
              "shadow-[0_8px_32px_-8px_rgba(85,17,28,0.08)]",
              "transition-all duration-500",
              "hover:shadow-[0_12px_48px_-12px_rgba(85,17,28,0.12)]",
            )}
          >
            {/* Subtle inner glow */}
            <div 
              className="absolute inset-0 rounded-2xl lg:rounded-3xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, hsl(36 60% 95% / 0.5) 0%, transparent 60%)",
              }}
            />

            {/* Form Header - compact */}
            <div className="relative text-center mb-6">
              <h3 
                className="font-serif text-[20px] sm:text-[22px] lg:text-[24px] tracking-tight mb-1.5"
                style={{ color: "hsl(348 55% 22%)" }}
              >
                Send a Message
              </h3>
              <p 
                className="text-sm"
                style={{ color: "hsl(24 12% 50%)" }}
              >
                We'll get back to you soon
              </p>
            </div>

            {/* Contact Form - compact spacing */}
            <form onSubmit={handleSubmit} className="relative space-y-4">
              {/* Name Field */}
              <div className="space-y-1.5">
                <Label 
                  htmlFor="name" 
                  className="text-sm font-medium"
                  style={{ color: "hsl(348 40% 28%)" }}
                >
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
                    "bg-white/70 border-[hsl(348_20%_85%)] placeholder:text-[hsl(24_10%_60%)]",
                    "focus-visible:bg-white focus-visible:border-[hsl(348_40%_60%)] focus-visible:ring-[hsl(348_40%_60%)/20]",
                    "rounded-xl h-11 px-4 text-sm",
                    "transition-all duration-300"
                  )}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <Label 
                  htmlFor="email" 
                  className="text-sm font-medium"
                  style={{ color: "hsl(348 40% 28%)" }}
                >
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
                    "bg-white/70 border-[hsl(348_20%_85%)] placeholder:text-[hsl(24_10%_60%)]",
                    "focus-visible:bg-white focus-visible:border-[hsl(348_40%_60%)] focus-visible:ring-[hsl(348_40%_60%)/20]",
                    "rounded-xl h-11 px-4 text-sm",
                    "transition-all duration-300"
                  )}
                />
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <Label 
                  htmlFor="message" 
                  className="text-sm font-medium"
                  style={{ color: "hsl(348 40% 28%)" }}
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how you'd like to get involved..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className={cn(
                    "bg-white/70 border-[hsl(348_20%_85%)] placeholder:text-[hsl(24_10%_60%)]",
                    "focus-visible:bg-white focus-visible:border-[hsl(348_40%_60%)] focus-visible:ring-[hsl(348_40%_60%)/20]",
                    "rounded-xl px-4 py-2.5 resize-none text-sm",
                    "transition-all duration-300"
                  )}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  className={cn(
                    "w-full",
                    "h-11 sm:h-12",
                    "rounded-xl",
                    "font-serif text-base font-normal tracking-wide",
                    "shadow-[0_4px_16px_-4px_rgba(85,17,28,0.25)]",
                    "transition-all duration-300",
                    "hover:shadow-[0_8px_24px_-6px_rgba(85,17,28,0.35)]",
                    "hover:scale-[1.02]",
                    "active:scale-[0.98]"
                  )}
                  style={{
                    background: "linear-gradient(180deg, hsl(348 55% 32%) 0%, hsl(348 60% 25%) 100%)",
                    color: "hsl(36 50% 95%)",
                  }}
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
