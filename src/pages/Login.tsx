import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import heroBannerImage from "@/components/sections/hero/hero-banner-4.webp";

const CRIMSON = "#6e1428";

const fieldClasses = cn(
  "h-12 rounded-xl border-[#e3cfd0] bg-white px-4 text-base text-foreground placeholder:text-[#9b8a88]",
  "focus-visible:border-[#b8556b] focus-visible:ring-[#b8556b]/25"
);

const linkClasses =
  "font-sans text-base underline underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] rounded-sm";

type Tab = "signin" | "signup";

/** Password input with a show/hide toggle. */
const PasswordField = ({
  id,
  value,
  onChange,
  placeholder,
}: {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <Input
        id={id}
        type={visible ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={id === "password" ? "current-password" : "new-password"}
        className={cn(fieldClasses, "pr-12")}
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-foreground/70 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96]"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </button>
    </div>
  );
};

/**
 * Login Page
 *
 * Coordinator login for the Angel Tree Twin Lakes program.
 * Static page with no authentication functionality.
 */
const Login = () => {
  const [activeTab, setActiveTab] = useState<Tab>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const isSignIn = activeTab === "signin";

  return (
    <main
      className="min-h-screen px-5 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 md:pb-20"
      style={{
        background:
          "radial-gradient(ellipse at 0% 100%, rgba(243, 211, 216, 0.5) 0%, transparent 45%), radial-gradient(ellipse at 100% 0%, rgba(246, 223, 226, 0.45) 0%, transparent 40%), #fbf4f1",
      }}
    >
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-0 sm:overflow-hidden sm:rounded-[28px] sm:border sm:border-[#efd6d8] sm:bg-[#fffbf8] sm:shadow-[0_24px_60px_-30px_rgba(110,20,40,0.35)] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)]">
        {/* Image panel */}
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl shadow-[0_18px_40px_-24px_rgba(110,20,40,0.45)] sm:min-h-[320px] sm:rounded-none sm:shadow-none lg:min-h-[640px]">
          <img
            src={heroBannerImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(94, 16, 34, 0.15) 0%, rgba(94, 16, 34, 0.25) 40%, rgba(94, 16, 34, 0.85) 72%, #5e1022 100%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-7 text-white sm:px-10 sm:pb-10 lg:pb-12">
            <svg
              className="h-10 w-10 sm:h-12 sm:w-12"
              viewBox="0 0 48 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M24 41 C 14 33, 6 26, 6 17 C 6 11, 10.5 7, 15.5 7 C 19.5 7, 22.5 9.5, 24 13 C 25.5 9.5, 28.5 7, 32.5 7 C 37.5 7, 42 11, 42 17 C 42 26, 34 33, 24 41 Z" />
            </svg>
            <p
              className="mt-3 font-serif italic leading-tight text-white"
              style={{ fontSize: "clamp(1.875rem, 3.2vw, 2.75rem)" }}
            >
              A little joy starts here.
            </p>
            <p className="mt-3 max-w-sm font-sans text-lg sm:text-xl leading-snug text-white/90">
              Together, we&rsquo;re making Christmas brighter for local children.
            </p>
          </div>
        </div>

        {/* Form panel */}
        <div className="rounded-3xl border border-[#efd6d8] bg-[#fffbf8] px-6 py-7 shadow-[0_18px_40px_-26px_rgba(110,20,40,0.35)] sm:rounded-none sm:border-0 sm:bg-transparent sm:px-12 sm:py-12 sm:shadow-none lg:px-16 lg:py-14">
          <p
            className="font-sans text-sm sm:text-base font-semibold uppercase tracking-[0.25em]"
            style={{ color: "#a2465a" }}
          >
            Angel Tree <span className="mx-2" aria-hidden="true">&bull;</span> Twin Lakes
          </p>
          <h1
            className="mt-3 font-serif italic leading-none text-[#3a2420]"
            style={{ fontSize: "clamp(2.75rem, 5vw, 4rem)" }}
          >
            {isSignIn ? "Login" : "Sign Up"}
          </h1>
          <p className="mt-2 font-sans text-base sm:mt-4 sm:text-lg text-foreground/80">
            {isSignIn
              ? "Welcome back. Sign in to manage the Angel Tree program."
              : "Create a coordinator account to help manage the Angel Tree program."}
          </p>

          {/* Sign In / Sign Up tabs */}
          <div className="mt-6 grid grid-cols-2 gap-2 sm:mt-8" role="tablist" aria-label="Account">
            {(["signin", "signup"] as const).map((tab) => {
              const active = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "rounded-xl py-3 font-sans text-lg sm:text-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96]",
                    active
                      ? "bg-[#f6e3e5] shadow-[inset_0_-3px_0_#6e1428] text-[#6e1428]"
                      : "text-foreground/80 hover:bg-[#fbeef0] hover:text-foreground"
                  )}
                >
                  {tab === "signin" ? "Sign In" : "Sign Up"}
                </button>
              );
            })}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // Static page - no actual submission
            }}
            className="mt-6 space-y-5 sm:mt-7"
          >
            {!isSignIn && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-semibold text-foreground">
                  Full name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={fieldClasses}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-semibold text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className={fieldClasses}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-base font-semibold text-foreground">
                Password
              </Label>
              <PasswordField
                id="password"
                value={password}
                onChange={setPassword}
                placeholder={isSignIn ? "Enter your password" : "Create a password"}
              />
            </div>

            {isSignIn ? (
              <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3">
                <label className="flex cursor-pointer items-center gap-2.5 font-sans text-[15px] text-foreground/85 sm:gap-3 sm:text-base">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-5 w-5 cursor-pointer rounded border-[#b9a3a3] accent-[#6e1428]"
                  />
                  Remember me
                </label>
                <button type="button" className={cn(linkClasses, "max-sm:text-[15px]")} style={{ color: "#a2465a" }}>
                  Forgot password?
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="confirm-password" className="text-base font-semibold text-foreground">
                  Confirm password
                </Label>
                <PasswordField
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={setConfirmPassword}
                  placeholder="Re-enter your password"
                />
              </div>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-xl py-4 font-sans text-lg sm:text-xl font-medium text-white shadow-[0_10px_24px_-12px_rgba(110,20,40,0.7)] transition-[filter] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c98a96] focus-visible:ring-offset-2"
              style={{ background: `linear-gradient(180deg, #7a1a30 0%, ${CRIMSON} 100%)` }}
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="mt-6 text-center font-sans text-base text-foreground/80">
            {isSignIn ? "New to JoyDrop?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setActiveTab(isSignIn ? "signup" : "signin")}
              className={linkClasses}
              style={{ color: "#a2465a" }}
            >
              {isSignIn ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
