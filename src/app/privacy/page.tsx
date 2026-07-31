import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Toodls collects, uses, and protects your information.",
};

const EFFECTIVE_DATE = "July 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate={EFFECTIVE_DATE}>
      <p>
        Toodls (&ldquo;Toodls,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
        explains what information we collect through the Toodls mobile
        application (the &ldquo;App&rdquo;), how we use it, and the choices
        you have. By using the App, you agree to the practices described
        below.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li>
          <strong>Photos and scans.</strong> Images you capture of items to
          identify them, estimate resale value, and generate listings.
        </li>
        <li>
          <strong>Item and listing data.</strong> Titles, categories,
          condition, pricing, and folder organization you create or that
          our AI generates on your behalf.
        </li>
        <li>
          <strong>Account information.</strong> If you create an account,
          we may collect your name, email address, and authentication
          details.
        </li>
        <li>
          <strong>Device and usage data.</strong> Device type, operating
          system, app version, and general usage analytics that help us
          improve the App.
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To identify scanned items and estimate resale value and pricing.</li>
        <li>To generate, organize, and export your listings and folders.</li>
        <li>To operate, maintain, and improve the App and its features.</li>
        <li>To communicate with you about updates, support, or changes to our services.</li>
        <li>To detect, prevent, and address technical issues, fraud, or misuse.</li>
      </ul>

      <h2>3. How We Share Information</h2>
      <p>
        We do not sell your personal information. We may share information
        with:
      </p>
      <ul>
        <li>
          Service providers who help us operate the App (such as cloud
          hosting and AI image-analysis providers), under confidentiality
          obligations.
        </li>
        <li>
          Third parties you explicitly choose to share or export listings
          to, such as a marketplace or the device share sheet.
        </li>
        <li>
          Authorities where required by law, or to protect the rights,
          safety, and property of Toodls and its users.
        </li>
      </ul>

      <h2>4. Use of Artificial Intelligence</h2>
      <p>
        Toodls uses artificial intelligence (AI) as a core part of the App.
        When you scan an item, the photos and related details you provide are
        processed by on-device and cloud-based AI models to:
      </p>
      <ul>
        <li>Identify the item and recognize its category and condition.</li>
        <li>Estimate resale value and suggest pricing.</li>
        <li>
          Generate listing content such as titles, descriptions, and tags on
          your behalf.
        </li>
        <li>Organize your items and folders.</li>
      </ul>
      <p>
        AI-generated results are estimates and suggestions, and may not always
        be accurate or complete. You are responsible for reviewing and editing
        any content before you rely on or publish it. We may use trusted
        third-party AI providers to perform this processing under
        confidentiality obligations; these providers process your content only
        to deliver these features and not to independently market to you.
      </p>
      <p>
        Photos and item data are stored so you can revisit, edit, and export
        your listings. You can delete individual items, folders, or your entire
        account at any time from within the App.
      </p>

      <h2>5. Data Retention</h2>
      <p>
        We retain your information for as long as your account is active
        or as needed to provide the App&apos;s features. If you delete
        your account, we will delete or anonymize your data within a
        reasonable period, except where retention is required by law.
      </p>

      <h2>6. Your Choices and Rights</h2>
      <ul>
        <li>Access, update, or delete your account information at any time.</li>
        <li>Control camera and photo library permissions through your device settings.</li>
        <li>Opt out of non-essential communications from us.</li>
        <li>
          Depending on your location, you may have additional rights under
          laws such as the GDPR or CCPA, including the right to request a
          copy of your data or object to certain processing.
        </li>
      </ul>

      <h2>7. Children&apos;s Privacy</h2>
      <p>
        Toodls is not directed at children under 13, and we do not
        knowingly collect personal information from children under 13. If
        you believe a child has provided us with personal information,
        please contact us so we can remove it.
      </p>

      <h2>8. Security</h2>
      <p>
        We use reasonable administrative, technical, and physical
        safeguards to protect your information. No method of transmission
        or storage is completely secure, and we cannot guarantee absolute
        security.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will
        notify you of material changes by updating the effective date at
        the top of this page or through the App.
      </p>

      <h2>10. Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy or our data
        practices, contact us at{" "}
        <a href="mailto:contact@toodls.app">contact@toodls.app</a>.
      </p>
    </LegalLayout>
  );
}
