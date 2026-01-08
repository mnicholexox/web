import * as React from "react";
import { ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface NewsletterSignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type NotificationPreference = "email" | "text" | "both";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  notificationPreference: NotificationPreference;
  heardAboutUs: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  notificationPreference?: string;
}

const HEARD_ABOUT_OPTIONS = [
  { value: "friend", label: "Friend or family" },
  { value: "social", label: "Social media" },
  { value: "church", label: "Church or community group" },
  { value: "event", label: "Event or fundraiser" },
  { value: "search", label: "Online search" },
  { value: "other", label: "Other" },
];

export const NewsletterSignupModal = ({
  open,
  onOpenChange,
}: NewsletterSignupModalProps) => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    notificationPreference: "email",
    heardAboutUs: "",
  });
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [touched, setTouched] = React.useState<Record<string, boolean>>({});

  // Reset form when modal closes
  React.useEffect(() => {
    if (!open) {
      // Delay reset to allow close animation
      const timeout = setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          notificationPreference: "email",
          heardAboutUs: "",
        });
        setErrors({});
        setTouched({});
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Full name is always required
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    // Email is required if notification preference includes email
    if (
      (formData.notificationPreference === "email" ||
        formData.notificationPreference === "both") &&
      !formData.email.trim()
    ) {
      newErrors.email = "Email is required for email notifications";
    } else if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone is required if notification preference includes text
    if (
      (formData.notificationPreference === "text" ||
        formData.notificationPreference === "both") &&
      !formData.phone.trim()
    ) {
      newErrors.phone = "Phone number is required for text notifications";
    } else if (
      formData.phone.trim() &&
      !/^[\d\s\-()]+$/.test(formData.phone)
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateForm();
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleNotificationChange = (value: NotificationPreference) => {
    setFormData((prev) => ({ ...prev, notificationPreference: value }));
    // Revalidate to update required fields
    setTimeout(() => validateForm(), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      notificationPreference: true,
    });

    if (validateForm()) {
      // TODO: Send form data to backend
      console.log("Newsletter signup:", formData);
      setIsSubmitted(true);
    }
  };

  const isFormValid = (): boolean => {
    const { fullName, email, phone, notificationPreference } = formData;

    if (!fullName.trim()) return false;

    if (
      (notificationPreference === "email" || notificationPreference === "both") &&
      !email.trim()
    ) {
      return false;
    }

    if (
      (notificationPreference === "text" || notificationPreference === "both") &&
      !phone.trim()
    ) {
      return false;
    }

    return true;
  };

  // Format phone number as user types
  const formatPhoneNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhoneNumber(value);
    handleInputChange("phone", formatted);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          // Success State
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <span className="text-5xl">💛</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3">
              You're on the list!
            </h3>
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
              We'll let you know as soon as wishlists open. Thank you for being
              part of Joy Drop.
            </p>
            <Button
              onClick={() => onOpenChange(false)}
              className="mt-6 rounded-full px-6"
            >
              Close
            </Button>
          </div>
        ) : (
          // Form State
          <>
            <DialogHeader className="pr-8">
              <DialogTitle>Get Added to Our Newsletter</DialogTitle>
              <DialogDescription>
                Be the first to know when wishlists open, donation windows
                begin, and new ways to help become available.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-5 mt-2">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  onBlur={() => handleBlur("fullName")}
                  className={cn(
                    errors.fullName && touched.fullName && "border-destructive"
                  )}
                />
                {errors.fullName && touched.fullName && (
                  <p className="text-destructive text-xs">{errors.fullName}</p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email Address{" "}
                  {(formData.notificationPreference === "email" ||
                    formData.notificationPreference === "both") && (
                    <span className="text-primary">*</span>
                  )}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  onBlur={() => handleBlur("email")}
                  className={cn(
                    errors.email && touched.email && "border-destructive"
                  )}
                />
                {errors.email && touched.email && (
                  <p className="text-destructive text-xs">{errors.email}</p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone">
                  Phone Number (for text alerts){" "}
                  {(formData.notificationPreference === "text" ||
                    formData.notificationPreference === "both") && (
                    <span className="text-primary">*</span>
                  )}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="XXX-XXX-XXXX"
                  value={formData.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  onBlur={() => handleBlur("phone")}
                  className={cn(
                    errors.phone && touched.phone && "border-destructive"
                  )}
                />
                {errors.phone && touched.phone && (
                  <p className="text-destructive text-xs">{errors.phone}</p>
                )}
              </div>

              {/* Notification Preference */}
              <div className="space-y-3">
                <Label>How would you like to receive notifications?</Label>
                <RadioGroup
                  value={formData.notificationPreference}
                  onValueChange={handleNotificationChange}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="pref-email" />
                    <Label
                      htmlFor="pref-email"
                      className="font-normal cursor-pointer"
                    >
                      Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="text" id="pref-text" />
                    <Label
                      htmlFor="pref-text"
                      className="font-normal cursor-pointer"
                    >
                      Text
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="pref-both" />
                    <Label
                      htmlFor="pref-both"
                      className="font-normal cursor-pointer"
                    >
                      Both
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* How Did You Hear About Us */}
              <div className="space-y-2">
                <Label htmlFor="heardAboutUs">How did you hear about us?</Label>
                <Select
                  value={formData.heardAboutUs}
                  onValueChange={(value) =>
                    handleInputChange("heardAboutUs", value)
                  }
                >
                  <SelectTrigger id="heardAboutUs">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {HEARD_ABOUT_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid()}
                className={cn(
                  "w-full rounded-full py-3 min-h-[48px] font-medium text-base",
                  "transition-all duration-200",
                  isFormValid()
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01] shadow-sm hover:shadow-md hover:shadow-primary/20"
                    : "bg-primary/50 text-primary-foreground cursor-not-allowed"
                )}
              >
                Notify Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
