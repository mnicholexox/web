import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/**
 * Login Page
 *
 * Coordinator login page for Angel Tree Twin Lakes program management.
 * Static page with no authentication functionality.
 */
const Login = () => {
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <h1 
            className="text-4xl sm:text-5xl text-foreground mb-1" 
            style={{ 
              fontFamily: "serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Angel Tree
          </h1>
          <p className="font-sans text-sm sm:text-base text-foreground/70">
            Twin Lakes
          </p>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-8">
          <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground mb-2">
            Coordinator Login
          </h2>
          <p className="font-sans text-sm sm:text-base" style={{ color: "hsl(24 15% 35%)" }}>
            Sign in to manage the Angel Tree program
          </p>
        </div>

        {/* Login Card */}
        <div
          className="rounded-xl p-6 sm:p-8"
          style={{
            backgroundColor: "hsl(36 52% 92%)", // card color
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          {/* Sign In / Sign Up Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab("signin")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-colors",
                activeTab === "signin"
                  ? "text-foreground"
                  : "bg-transparent text-foreground/70 hover:text-foreground"
              )}
              style={
                activeTab === "signin"
                  ? { backgroundColor: "hsl(36 30% 85%)", color: "hsl(24 15% 22%)" }
                  : {}
              }
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab("signup")}
              className={cn(
                "flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-colors",
                activeTab === "signup"
                  ? "text-foreground"
                  : "bg-transparent text-foreground/70 hover:text-foreground"
              )}
              style={
                activeTab === "signup"
                  ? { backgroundColor: "hsl(36 30% 85%)", color: "hsl(24 15% 22%)" }
                  : {}
              }
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Static page - no actual submission
            }}
            className="space-y-5"
          >
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="bg-white border-input rounded-lg"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="bg-white border-input rounded-lg"
              />
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full py-3 text-base font-medium rounded-lg"
              style={{
                backgroundColor: "hsl(344 35% 35%)", // Dark reddish-brown
                color: "hsl(38 67% 98%)", // White text
              }}
            >
              Sign In
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-4 text-center">
            <button
              type="button"
              className="text-sm font-medium hover:underline transition-colors"
              style={{ color: "hsl(24 15% 22%)" }}
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
