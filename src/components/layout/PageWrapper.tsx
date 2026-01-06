import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

/**
 * PageWrapper component
 * 
 * Provides consistent page layout structure including header, footer,
 * and main content area with proper spacing.
 */
export const PageWrapper = ({ children, className }: PageWrapperProps) => {
  return (
    <div className={className}>
      {/* Header can be added here when needed */}
      <main>{children}</main>
      {/* Footer can be added here when needed */}
    </div>
  );
};

