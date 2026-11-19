import { Link } from "react-router-dom";
import { LegalPage } from "@/components/layout";
import { ROUTES, APP_URL } from "@/constants";

const EMAIL = "hello@joydrop.app";

/**
 * Privacy Policy page (/privacy).
 *
 * The "Text messages (SMS)" section is reviewed by carriers for Twilio A2P 10DLC
 * campaign approval; keep its sharing language intact.
 */
const Privacy = () => (
  <LegalPage
    title="Privacy Policy"
    effectiveDate="November 18, 2026"
    intro={
      <p>
        This Privacy Policy explains what information Joy Drop (&ldquo;Joy Drop,&rdquo; &ldquo;we,&rdquo; or
        &ldquo;us&rdquo;) collects through our website,{" "}
        <a href="https://joydrop.app">https://joydrop.app</a>, and the Angel Tree app for sponsors (together, the
        &ldquo;Joy Drop (Angel Tree)&rdquo; program), how we use it, and the choices you have.
      </p>
    }
  >
    <section>
      <h2>Information we collect</h2>
      <h3>When you sign up for updates</h3>
      <p>
        When you sign up on joydrop.app to &ldquo;Get notified when wishlists open,&rdquo; we collect:
      </p>
      <ul>
        <li>Your name</li>
        <li>Your email address and/or mobile phone number</li>
        <li>How you&rsquo;d like to be notified (email, text, or both)</li>
        <li>Optionally, how you heard about us</li>
      </ul>
      <p>
        We also record the page you signed up from and, if you choose text notifications, the date and time you
        agreed to receive text messages.
      </p>

      <h3>When you sponsor through the Angel Tree app</h3>
      <p>
        Sponsors use the Angel Tree app (<a href={APP_URL}>{APP_URL}</a>) to sign in with a one-time code sent by
        text or email and to choose children&rsquo;s wishlists. The app stores your name, phone number, email
        address, and which gifts you have claimed or purchased.
      </p>

      <h3>Children&rsquo;s wishlist information</h3>
      <p>
        Wishlist information (such as gift ideas and clothing sizes) is provided by participating families. We
        show it to sponsors only so they can choose and fulfil gifts.
      </p>
    </section>

    <section>
      <h2>How we use your information</h2>
      <ul>
        <li>To let you know when children&rsquo;s wishlists open and to send program updates you asked for</li>
        <li>To sign you in to the Angel Tree app and keep track of the gifts you&rsquo;ve claimed</li>
        <li>To coordinate gift deadlines, drop-off details, and delivery to families</li>
        <li>To answer your questions and keep the program running smoothly</li>
      </ul>
    </section>

    <section>
      <h2>How we share information</h2>
      <p>
        <strong>We do not sell your personal information.</strong> We share it only with service providers that
        process it on our behalf to run the program:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> &ndash; database and sign-in hosting
        </li>
        <li>
          <strong>Twilio</strong> &ndash; delivering text messages
        </li>
        <li>
          <strong>Resend</strong> &ndash; delivering email
        </li>
      </ul>
      <p>
        These providers may use your information only to provide their services to us. We may also disclose
        information if required by law.
      </p>
    </section>

    <section>
      <h2>Text messages (SMS)</h2>
      <p>
        If you choose to receive text messages, we use your mobile number only to send Joy Drop (Angel Tree)
        holiday wishlist updates and, if you are a sponsor, one-time sign-in codes. You can reply STOP at any time
        to stop receiving texts, or reply HELP for help.
      </p>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or promotional
        purposes. Text messaging originator opt-in data and consent will not be shared with any third parties,
        except service providers (such as our messaging provider) who deliver messages on our behalf.
      </p>
      <p>
        See the SMS / Text Messaging Terms in our <Link to={ROUTES.TERMS}>Terms of Service</Link> for more
        details.
      </p>
    </section>

    <section>
      <h2>Your choices</h2>
      <ul>
        <li>
          <strong>Text messages:</strong> reply STOP to any message to unsubscribe.
        </li>
        <li>
          <strong>Email:</strong> use the unsubscribe link in any email, or email us at{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </li>
        <li>
          <strong>Deleting your information:</strong> email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> and ask us to
          delete your information. We&rsquo;ll confirm once it&rsquo;s done.
        </li>
      </ul>
    </section>

    <section>
      <h2>How long we keep information</h2>
      <p>
        We keep your information for as long as it&rsquo;s needed to run the program, or until you ask us to
        delete it.
      </p>
    </section>

    <section>
      <h2>Security</h2>
      <p>
        We use reasonable measures to protect your information, including access controls on our database.
        No method of storing or sending information online is completely secure, but we work to keep your
        information safe.
      </p>
    </section>

    <section>
      <h2>Children&rsquo;s privacy</h2>
      <p>
        Our website and the Angel Tree app are meant for adult sponsors and volunteers. We don&rsquo;t knowingly
        collect personal information directly from children. Children&rsquo;s wishlist details come from their
        families and are shared only with sponsors to fulfil gifts.
      </p>
    </section>

    <section>
      <h2>Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we&rsquo;ll change the effective date at
        the top of this page.
      </p>
    </section>

    <section>
      <h2>Contact us</h2>
      <p>
        Questions about this policy? Email us at <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or visit{" "}
        <a href="https://joydrop.app">https://joydrop.app</a>.
      </p>
    </section>
  </LegalPage>
);

export default Privacy;
