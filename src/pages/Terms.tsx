import { Link } from "react-router-dom";
import { LegalPage } from "@/components/layout";
import { ROUTES, APP_URL } from "@/constants";

const EMAIL = "hello@joydrop.app";

/**
 * Terms of Service page (/terms).
 *
 * The "SMS / Text Messaging Terms" section is reviewed by carriers for Twilio
 * A2P 10DLC campaign approval; keep its required disclosures intact.
 */
const Terms = () => (
  <LegalPage
    title="Terms of Service"
    effectiveDate="November 18, 2026"
    intro={
      <p>
        These Terms of Service apply to your use of the Joy Drop website,{" "}
        <a href="https://joydrop.app">https://joydrop.app</a>, the Angel Tree app for sponsors (
        <a href={APP_URL}>{APP_URL}</a>), and our text and email updates (together, the &ldquo;Joy Drop (Angel
        Tree)&rdquo; program). By using them, you agree to these terms. &ldquo;Joy Drop,&rdquo; &ldquo;we,&rdquo; and
        &ldquo;us&rdquo; refer to the Joy Drop program.
      </p>
    }
  >
    <section>
      <h2>Using the site and app</h2>
      <ul>
        <li>Please provide accurate contact information when you sign up or sponsor.</li>
        <li>
          Use the site and app only for their intended purpose: learning about the program, signing up for
          updates, and sponsoring children&rsquo;s wishlists.
        </li>
        <li>
          Keep the one-time sign-in codes we send you private. Don&rsquo;t try to access accounts or information
          that aren&rsquo;t yours, or interfere with how the site or app works.
        </li>
        <li>
          Children&rsquo;s wishlist information is shared with you only so you can fulfil gifts. Please don&rsquo;t
          copy, post, or share it for any other purpose.
        </li>
      </ul>
    </section>

    <section>
      <h2>Sponsor responsibilities</h2>
      <p>When you claim a child&rsquo;s wishlist or individual gifts, you agree to:</p>
      <ul>
        <li>Purchase the gifts you&rsquo;ve claimed, or let us know as soon as possible if you can&rsquo;t</li>
        <li>Mark gifts as purchased in the Angel Tree app so we can track progress</li>
        <li>Drop off purchased gifts at the stated location by the stated deadline</li>
      </ul>
      <p>
        If plans change, email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> so we can make sure every child
        still receives their gifts.
      </p>
    </section>

    <section>
      <h2>SMS / Text Messaging Terms</h2>
      <h3>Program name</h3>
      <p>Joy Drop (Angel Tree) holiday wishlist updates.</p>

      <h3>Program description</h3>
      <p>
        When you sign up for text updates, we&rsquo;ll send you a confirmation after signup, an announcement when
        children&rsquo;s wishlists open, and occasional sponsor updates (for example, gift deadlines and drop-off
        details).
      </p>

      <h3>How to opt in</h3>
      <p>
        You opt in by choosing &ldquo;Text&rdquo; or &ldquo;Both&rdquo; as your notification preference and
        entering your mobile number on the signup form at{" "}
        <a href="https://joydrop.app/sponsor-a-child">https://joydrop.app/sponsor-a-child</a>.
      </p>

      <h3>Message frequency and cost</h3>
      <p>Message frequency varies. Message and data rates may apply.</p>

      <h3>How to opt out</h3>
      <p>
        Reply STOP to cancel at any time. After you send STOP, we will send one message confirming you&rsquo;ve
        been unsubscribed.
      </p>

      <h3>Help</h3>
      <p>
        Reply HELP for help, or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>

      <h3>Carrier liability</h3>
      <p>Carriers are not liable for delayed or undelivered messages.</p>

      <h3>Consent is optional</h3>
      <p>
        Consent to receive text messages is not a condition of sponsoring a child or donating. You can sign up
        for email updates instead, or sponsor without signing up for texts at all.
      </p>

      <h3>Privacy</h3>
      <p>
        For how we handle your information, including your mobile number, see our{" "}
        <Link to={ROUTES.PRIVACY}>Privacy Policy</Link>.
      </p>
    </section>

    <section>
      <h2>No warranties</h2>
      <p>
        We work hard to keep the program running smoothly, but the site, app, and messages are provided
        &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind. We can&rsquo;t
        guarantee that the site or app will always be available or error-free, or that any particular wishlist
        will be available to sponsor. To the extent allowed by law, Joy Drop is not liable for indirect or
        incidental losses arising from your use of the program.
      </p>
    </section>

    <section>
      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. When we do, we&rsquo;ll change the effective date at the top
        of this page. Continuing to use the site, app, or messages after a change means you accept the updated
        terms.
      </p>
    </section>

    <section>
      <h2>Contact us</h2>
      <p>
        Questions about these terms? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or visit{" "}
        <a href="https://joydrop.app">https://joydrop.app</a>.
      </p>
    </section>
  </LegalPage>
);

export default Terms;
