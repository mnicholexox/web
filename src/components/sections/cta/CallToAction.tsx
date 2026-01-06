import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CallToActionProps {
  primaryText?: string;
  secondaryText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export const CallToAction = ({
  primaryText = "Help Create Holiday Magic",
  secondaryText = "See our impact",
  onPrimaryClick,
  onSecondaryClick,
  className,
}: CallToActionProps) => {
  return (
    <div className={cn("flex items-center gap-4 flex-wrap", className)}>
      <Button
        onClick={onPrimaryClick}
        className={cn(
          "bg-primary text-primary-foreground",
          "rounded-[7px]",
          "px-6 py-3.5",
          "min-h-[44px]",
          "font-medium",
          "transition-transform duration-200",
          "hover:scale-[1.02] hover:bg-primary/90",
          "shadow-sm hover:shadow-md"
        )}
      >
        {primaryText}
      </Button>
      {secondaryText && (
        <button
          onClick={onSecondaryClick}
          className={cn(
            "text-primary",
            "font-medium",
            "hover:underline",
            "transition-colors duration-200",
            "flex items-center gap-1",
            "group",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
          )}
        >
          {secondaryText}
          <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">
            →
          </span>
        </button>
      )}
    </div>
  );
};

