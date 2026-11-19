/**
 * Waitlist signups ("Get notified when wishlists open").
 *
 * Posts to the subscribe_to_updates() RPC on the Angel Tree Supabase project.
 * The anon key is a public, browser-safe key (it ships in every bundle that
 * uses Supabase); the RPC is the only thing it can write to the waitlist table.
 */

const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? "https://sitoxefxfphqivnnjmpg.supabase.co";
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpdG94ZWZ4ZnBocWl2bm5qbXBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY4OTAyMDcsImV4cCI6MjA4MjQ2NjIwN30.pThb_wBuEdgC6xs9aXmkok4LGFxdlvJxmSOMvKA9Ej4";

export type NotificationPreference = "email" | "text" | "both";

export interface WaitlistSignup {
  fullName: string;
  email?: string;
  phone?: string;
  notificationPreference: NotificationPreference;
  heardAboutUs?: string;
  /** Page the signup came from, e.g. "/sponsor-a-child". */
  source?: string;
  /** Honeypot field; real people leave it empty. */
  website?: string;
}

export class WaitlistError extends Error {}

export const subscribeToUpdates = async (signup: WaitlistSignup): Promise<void> => {
  let response: Response;
  try {
    response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/subscribe_to_updates`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        p_full_name: signup.fullName,
        p_email: signup.email || null,
        p_phone: signup.phone || null,
        p_notification_preference: signup.notificationPreference,
        p_heard_about_us: signup.heardAboutUs || null,
        p_source: signup.source || null,
        p_website: signup.website || null,
      }),
    });
  } catch {
    throw new WaitlistError("We couldn't reach our server. Please check your connection and try again.");
  }

  if (!response.ok) {
    // Validation errors raised by the RPC use SQLSTATE 22023 and carry a readable message.
    const body = await response.json().catch(() => null);
    if (body?.code === "22023" && typeof body.message === "string") {
      throw new WaitlistError(body.message);
    }
    throw new WaitlistError("Something went wrong saving your signup. Please try again in a moment.");
  }
};
