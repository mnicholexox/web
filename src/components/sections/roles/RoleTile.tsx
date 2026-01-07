import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface RoleTileProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export const RoleTile = ({ icon, title, description, index }: RoleTileProps) => {
  return (
    <div
      className={cn(
        "p-5 sm:p-6 md:p-8 space-y-3 sm:space-y-4",
        // Border styling for grid layout
        "sm:border-border/8",
        // Right border for left column items
        index % 2 === 0 && "sm:border-r",
        // Bottom border for top row items
        index < 2 && "sm:border-b"
      )}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="font-serif text-lg sm:text-xl text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm sm:text-[0.9375rem] text-foreground/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

