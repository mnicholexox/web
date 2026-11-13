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
    icon: <Smartphone className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
    question: "How do I get access to the Joy Drop app?",
    answer:
      "Contact an administrator to get access. You'll receive an email invitation with instructions to access the Joy Drop app.",
  },
  {
    id: "shipping",
    icon: <Package className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
    question: "Can I have items shipped directly to a coordinator?",
    answer:
      "Yes! Many sponsors find it convenient to ship gifts directly to their local coordinator. When you're matched with a family, you'll receive your coordinator's shipping address along with any specific drop-off instructions. Just be sure to include the family's reference number on the package.",
  },
  {
    id: "wishlists",
    icon: <Calendar className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
    question: "When do wishlists become available?",
    answer:
      "Wishlists typically become available in early November each year. Families submit their children's wishes in October, and our team reviews everything before making them available to sponsors. You'll receive a notification as soon as wishlists are ready for browsing.",
  },
  {
    id: "vetting",
    icon: <ShieldCheck className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
    question: "How are families vetted for the program?",
    answer:
      "We partner with trusted community organizations, schools, and social services agencies who refer families in need. Each referral goes through a verification process to ensure resources reach those who need them most while maintaining the dignity and privacy of participating families.",
  },
  {
    id: "handmade",
    icon: <Heart className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
    question: "I make handmade items. Can I donate those?",
    answer:
      "We love handmade gifts! Handcrafted items like blankets, hats, scarves, and toys add such a personal touch. Please reach out to your coordinator to discuss what you'd like to contribute—they can help match your talents with families who would treasure your creations.",
  },
  {
    id: "cost",
    icon: <CircleDollarSign className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.6} />,
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
    <div className="space-y-3 sm:space-y-5">
      {faqItems.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className={cn(
              "group rounded-2xl border transition-colors duration-200",
              "shadow-[0_10px_30px_-18px_rgba(110,20,40,0.25)]",
              isOpen
                ? "border-[#efd3d8] bg-[#f6e3e5]"
                : "border-[#f3e3e1] bg-[#fffcfa] hover:border-[#efd3d8] hover:bg-[#f6e3e5]"
            )}
          >
            {/* Question Row */}
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-center gap-4 rounded-2xl px-4 py-3 text-left sm:gap-6 sm:px-7 sm:py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
            >
              {/* Icon */}
              <span
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[#8a2e45] transition-colors sm:h-16 sm:w-16",
                  isOpen ? "bg-transparent" : "bg-[#f8e4e6] group-hover:bg-transparent"
                )}
              >
                {item.icon}
              </span>

              {/* Question Text */}
              <span className="flex-1 font-sans text-[17px] font-medium leading-snug text-[#3a2420] sm:text-xl md:text-2xl">
                {item.question}
              </span>

              {/* Arrow */}
              <ChevronRight
                className={cn(
                  "h-6 w-6 shrink-0 text-[#8a1f38] transition-transform duration-300 ease-out",
                  isOpen && "rotate-90"
                )}
                strokeWidth={2}
              />
            </button>

            {/* Answer Panel */}
            <div
              id={`faq-answer-${item.id}`}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
              aria-hidden={!isOpen}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 font-sans text-base leading-relaxed text-foreground/75 sm:pb-6 sm:pl-[118px] sm:pr-16 sm:text-lg">
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
