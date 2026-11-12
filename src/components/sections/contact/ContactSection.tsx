import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

// Envelope-with-heart illustration
import generalInquiriesImage from "@/pages/general inquiries.png";

const CRIMSON = "#6e1428";

const fieldClasses = cn(
  "bg-[#f8e9ea] border-[#e6c4c9] text-foreground placeholder:text-[#9b8a88]",
  "focus-visible:bg-white focus-visible:border-[#b8556b] focus-visible:ring-[#b8556b]/25",
  "rounded-xl px-4 text-base",
  "transition-colors duration-200"
);

/** Satin ribbon flowing along the bottom of the inquiries card. */
const CardRibbon = () => (
  <svg
    className="absolute bottom-0 left-0 w-full h-auto pointer-events-none"
    viewBox="0 0 800 220"
    preserveAspectRatio="xMidYMax meet"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="contact-ribbon" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#c86a7e" stopOpacity="0.85" />
        <stop offset="55%" stopColor="#e39aaa" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#b8556b" stopOpacity="0.7" />
      </linearGradient>
    </defs>
    <path
      d="M0 205 C 60 160, 120 120, 200 150 C 270 176, 300 200, 360 160 C 410 125, 380 85, 340 105 C 300 125, 330 190, 420 170 C 520 148, 600 120, 820 140
         L 820 152 C 600 132, 520 162, 422 184 C 322 206, 282 130, 336 96 C 392 62, 436 118, 372 172 C 310 222, 268 192, 196 164 C 124 136, 70 176, 0 220 Z"
      fill="url(#contact-ribbon)"
    />
  </svg>
);

/** Small four-point sparkles. */
const Sparkles = () => (
  <svg
    className="absolute right-[18%] top-[16%] hidden h-24 w-24 pointer-events-none text-[#f7d9de] lg:block"
    viewBox="0 0 100 100"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M40 20 C 42 38, 44 40, 62 42 C 44 44, 42 46, 40 64 C 38 46, 36 44, 18 42 C 36 40, 38 38, 40 20 Z" opacity="0.9" />
    <path d="M78 4 C 79 11, 80 12, 87 13 C 80 14, 79 15, 78 22 C 77 15, 76 14, 69 13 C 76 12, 77 11, 78 4 Z" opacity="0.8" />
    <circle cx="74" cy="56" r="1.6" opacity="0.7" />
    <circle cx="12" cy="74" r="1.4" opacity="0.6" />
  </svg>
);

/** Faint ribbon lines drifting across the section background. */
const BackgroundRibbons = () => (
  <svg
    className="absolute inset-0 h-full w-full pointer-events-none"
    viewBox="0 0 1440 900"
    preserveAspectRatio="none"
    aria-hidden="true"
  >
    <path d="M-40 260 C 200 120, 380 40, 720 -20" fill="none" stroke="#d9a3ad" strokeOpacity="0.35" strokeWidth="1.5" />
    <path d="M-40 300 C 220 150, 420 80, 760 0" fill="none" stroke="#d9a3ad" strokeOpacity="0.2" strokeWidth="1" />
    <path d="M1000 920 C 1180 860, 1320 780, 1480 640" fill="none" stroke="#d9a3ad" strokeOpacity="0.35" strokeWidth="1.5" />
  </svg>
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      className="relative w-full overflow-hidden py-14 md:py-20"
      style={{
        background:
          "radial-gradient(ellipse at 85% 0%, rgba(232, 176, 186, 0.35) 0%, transparent 45%), linear-gradient(180deg, #f9efea 0%, #f5e4e0 100%)",
      }}
    >
      <BackgroundRibbons />

      {/* Header */}
      <div className="relative z-10 px-4 text-center">
        <div className="flex items-center justify-center gap-5">
          <span className="h-px w-12 sm:w-20 bg-[#b8556b]/50" aria-hidden="true" />
          <span
            className="font-sans text-sm sm:text-base font-medium uppercase tracking-[0.3em]"
            style={{ color: CRIMSON }}
          >
            Reach out
          </span>
          <span className="h-px w-12 sm:w-20 bg-[#b8556b]/50" aria-hidden="true" />
        </div>
        <h2
          className="mt-4 font-serif leading-[1.05] tracking-tight"
          style={{ color: CRIMSON, fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
        >
          Let&rsquo;s Get in Touch
        </h2>
      </div>

      {/* Cards */}
      <div className="relative z-10 mx-auto mt-10 md:mt-14 max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-5">
          {/* General inquiries */}
          <div
            className="relative overflow-hidden rounded-3xl px-7 pt-10 pb-64 sm:px-10 sm:pt-12 sm:pb-72 lg:pb-12 text-white shadow-xl"
            style={{
              background:
                "radial-gradient(ellipse at 80% 20%, rgba(214, 120, 140, 0.35) 0%, transparent 50%), linear-gradient(160deg, #8a2e45 0%, #742038 50%, #651a30 100%)",
            }}
          >
            <Sparkles />

            <h3 className="relative font-serif text-xl sm:text-2xl uppercase tracking-[0.2em] text-white">
              General inquiries
            </h3>
            <span className="relative mt-4 block h-0.5 w-14 bg-[#e8a3ae]" aria-hidden="true" />

            <p className="relative mt-6 font-sans text-xl sm:text-2xl leading-snug text-white lg:max-w-[68%]">
              Have a question, want to volunteer, or just curious about Joy Drop?
              <span className="block mt-1 font-normal text-white/85">We&rsquo;d love to hear from you.</span>
            </p>

            <blockquote className="relative mt-8 rounded-2xl border border-white/20 bg-white/10 px-6 py-5 font-sans text-base sm:text-lg italic leading-relaxed text-white/90 backdrop-blur-[2px] lg:max-w-[60%]">
              &ldquo;Connection is at the heart of everything we do. Drop us a message and let&rsquo;s
              start a conversation.&rdquo;
            </blockquote>

            {/* Ribbon + envelope */}
            <CardRibbon />
            <img
              src={generalInquiriesImage}
              alt=""
              aria-hidden="true"
              className="absolute bottom-6 right-4 w-56 sm:w-64 lg:w-[44%] lg:max-w-[300px] drop-shadow-2xl"
            />
          </div>

          {/* Send a message */}
          <div className="relative rounded-3xl border border-[#e9cdd1] bg-[#fdf8f6] p-6 sm:p-9 shadow-[0_12px_40px_-16px_rgba(110,20,40,0.25)]">
            <div className="flex items-start gap-4">
              <img
                src={generalInquiriesImage}
                alt=""
                aria-hidden="true"
                className="mt-1 h-12 w-14 object-contain"
              />
              <div>
                <h3
                  className="font-serif text-2xl sm:text-[32px] uppercase leading-tight tracking-wide"
                  style={{ color: CRIMSON }}
                >
                  Send a message
                </h3>
                <p className="mt-1 font-sans text-base sm:text-lg text-foreground/70">
                  We&rsquo;ll get back to you soon.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold text-foreground">
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
                  className={cn(fieldClasses, "h-12")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold text-foreground">
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
                  className={cn(fieldClasses, "h-12")}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how you'd like to get involved..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={cn(fieldClasses, "py-3 resize-none")}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-xl py-4 font-sans text-lg font-medium text-white shadow-[0_8px_20px_-8px_rgba(110,20,40,0.6)] transition-[filter,transform] hover:brightness-110 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8556b] focus-visible:ring-offset-2"
                style={{ background: "linear-gradient(180deg, #8a1f38 0%, #6a1228 100%)" }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
