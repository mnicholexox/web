import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Smartphone,
  Package,
  Calendar,
  ShieldCheck,
  Heart,
  CircleDollarSign,
  ChevronRight,
} from "lucide-react";

interface FAQItem {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "access",
    icon: <Smartphone className="w-5 h-5" />,
    question: "How do I get access to the Joy Drop app?",
    answer:
      "Once you've registered as a sponsor through our website, you'll receive an email invitation with instructions to download and access the Joy Drop app. The app is available for both iOS and Android devices, and your coordinator will help guide you through the setup process.",
  },
  {
    id: "shipping",
    icon: <Package className="w-5 h-5" />,
    question: "Can I have items shipped directly to a coordinator?",
    answer:
      "Yes! Many sponsors find it convenient to ship gifts directly to their local coordinator. When you're matched with a family, you'll receive your coordinator's shipping address along with any specific drop-off instructions. Just be sure to include the family's reference number on the package.",
  },
  {
    id: "wishlists",
    icon: <Calendar className="w-5 h-5" />,
    question: "When do wishlists become available?",
    answer:
      "Wishlists typically become available in early November each year. Families submit their children's wishes in October, and our team reviews everything before making them available to sponsors. You'll receive a notification as soon as wishlists are ready for browsing.",
  },
  {
    id: "vetting",
    icon: <ShieldCheck className="w-5 h-5" />,
    question: "How are families vetted for the program?",
    answer:
      "We partner with trusted community organizations, schools, and social services agencies who refer families in need. Each referral goes through a verification process to ensure resources reach those who need them most while maintaining the dignity and privacy of participating families.",
  },
  {
    id: "handmade",
    icon: <Heart className="w-5 h-5" />,
    question: "I make handmade items. Can I donate those?",
    answer:
      "We love handmade gifts! Handcrafted items like blankets, hats, scarves, and toys add such a personal touch. Please reach out to your coordinator to discuss what you'd like to contribute—they can help match your talents with families who would treasure your creations.",
  },
  {
    id: "cost",
    icon: <CircleDollarSign className="w-5 h-5" />,
    question: "Do families have to pay to participate?",
    answer:
      "Absolutely not. Joy Drop is completely free for participating families. There are no fees, no hidden costs, and no strings attached. Our mission is to remove barriers and bring joy to families during the holiday season, not add to their burden.",
  },
];

export const FAQAccordion = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-3">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "rounded-2xl transition-all duration-300 ease-out",
              "bg-white/60 backdrop-blur-sm",
              "border border-primary/10",
              isOpen && "bg-white/80"
            )}
          >
            {/* Question Row */}
            <button
              onClick={() => toggleItem(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-5 py-4 sm:px-6 sm:py-5",
                "text-left cursor-pointer",
                "group transition-colors duration-200",
                "hover:bg-white/40 rounded-2xl"
              )}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              {/* Icon */}
              <span className="flex-shrink-0 text-primary/70 group-hover:text-primary transition-colors">
                {item.icon}
              </span>

              {/* Question Text */}
              <span
                className={cn(
                  "flex-1 font-serif text-base sm:text-lg",
                  "text-primary/90 group-hover:text-primary",
                  "transition-colors duration-200"
                )}
              >
                {item.question}
              </span>

              {/* Arrow */}
              <ChevronRight
                className={cn(
                  "w-5 h-5 flex-shrink-0",
                  "text-primary/50 group-hover:text-primary/70",
                  "transition-all duration-300 ease-out",
                  isOpen && "rotate-90"
                )}
              />
            </button>

            {/* Answer Panel */}
            <div
              id={`faq-answer-${item.id}`}
              className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="px-5 pb-5 sm:px-6 sm:pb-6 pl-14 sm:pl-16">
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
