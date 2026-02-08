import PolicyLayout from "../components/layout/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="March 2026">
      <p>
        Harmony Studio respects your privacy and is committed to protecting the
        personal information you share with us through our website,
        harmonystudio.co.in.
      </p>

      <h3>Information We Collect</h3>
      <ul>
        <li>Name, email address, and phone number submitted via forms</li>
        <li>Service inquiries and class-related requests</li>
        <li>Website usage data for performance and analytics</li>
      </ul>

      <h3>How We Use Your Information</h3>
      <ul>
        <li>Responding to inquiries and bookings</li>
        <li>Scheduling trial sessions and classes</li>
        <li>Improving our services and website experience</li>
        <li>Sending studio updates (only if opted in)</li>
      </ul>

      <h3>Data Protection</h3>
      <p>
        We implement reasonable security practices to safeguard your personal
        information against unauthorized access or misuse.
      </p>

      <h3>Third-Party Platforms</h3>
      <p>
        Our website may link to Instagram, YouTube, or WhatsApp. We are not
        responsible for the privacy practices of these platforms.
      </p>

      <h3>Your Rights</h3>
      <p>
        You may request access, correction, or deletion of your personal data at
        any time by contacting us.
      </p>
    </PolicyLayout>
  );
};

export default PrivacyPolicy;
